import { Period, Entity, GameObject, Vector2, Rect } from './types';
import { TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, generateMapObjects, studentConfigs } from './map';
import { buildCollisionGrid, findPath } from './astar';

export class GameEngine {
  timeMinutes: number = 8 * 60; // starts 8:00
  period: Period = 'Arrival';
  timeSpeed: number = 1;
  paused: boolean = false;
  
  entities: Entity[] = [];
  objects: GameObject[] = [];
  grid: boolean[][] = [];
  
  keys: Set<string> = new Set();
  joystick: Vector2 = { x: 0, y: 0 };
  
  onStateChange?: (time: number, period: Period) => void;
  
  private lastTime: number = 0;
  private animReq: number = 0;

  constructor() {
    this.objects = generateMapObjects();
    this.grid = buildCollisionGrid(this.objects);
    this.initEntities();
  }

  initEntities() {
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#eab308'];
    const skinColors = ['#fcd34d', '#fbcfe8', '#fdba74', '#d6d3d1', '#fcd34d', '#fbcfe8', '#fdba74', '#d6d3d1', '#fcd34d', '#fbcfe8'];
    
    this.entities = studentConfigs.map((cfg, i) => {
      const isPlayer = cfg.isPlayer;
      return {
        id: cfg.id,
        isPlayer,
        pos: { x: cfg.Arrival.x * TILE_SIZE + 8, y: 23 * TILE_SIZE + 8 }, // spawn at bottom entrance
        vel: { x: 0, y: 0 },
        targetPos: null,
        path: [],
        color: isPlayer ? '#ef4444' : colors[i % colors.length], // Player gets distinct red
        hairColor: '#451a03',
        skinColor: skinColors[i % skinColors.length],
        speed: isPlayer ? 65 : 40 + Math.random() * 15,
        frame: 0,
        direction: 'down',
        schedule: {
          'Arrival': cfg.Arrival,
          'Period 1': cfg['Period 1'],
          'Lunch': cfg.Lunch,
          'Period 2': cfg['Period 2'],
          'Dismissal': cfg.Dismissal
        },
        state: 'idle'
      };
    });
    this.assignAIPaths();
  }

  assignAIPaths() {
    this.entities.forEach(ent => {
      if (ent.isPlayer) return;
      const targetTile = ent.schedule[this.period];
      const startTile = { 
        x: Math.floor(ent.pos.x / TILE_SIZE), 
        y: Math.floor(ent.pos.y / TILE_SIZE) 
      };
      ent.path = findPath(startTile, targetTile, this.grid);
    });
  }

  start() {
    this.lastTime = performance.now();
    const tick = (now: number) => {
      this.loop(now);
      this.animReq = requestAnimationFrame(tick);
    };
    this.animReq = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this.animReq);
  }

  loop(now: number) {
    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    
    // Cap large dt to prevent giant physics jumps
    if (dt > 0.1) return;
    
    if (!this.paused) {
      this.update(dt);
    }
  }

  update(dt: number) {
    // 1 sec = 1 min * timeSpeed
    const dtGameMins = dt * this.timeSpeed;
    this.timeMinutes += dtGameMins;

    // Check period change
    let newPeriod = this.period;
    if (this.timeMinutes >= 12.5 * 60) newPeriod = 'Dismissal'; // 12:30
    else if (this.timeMinutes >= 11 * 60) newPeriod = 'Period 2'; // 11:00
    else if (this.timeMinutes >= 10 * 60) newPeriod = 'Lunch'; // 10:00
    else if (this.timeMinutes >= 8.5 * 60) newPeriod = 'Period 1'; // 8:30
    
    if (newPeriod !== this.period) {
      this.period = newPeriod;
      this.assignAIPaths();
    }

    if (this.timeMinutes > 13 * 60) {
      // Loop the day!
      this.timeMinutes = 8 * 60;
      this.period = 'Arrival';
      this.assignAIPaths();
    }

    // Update Player
    const player = this.entities.find(e => e.isPlayer)!;
    let inputX = this.joystick.x;
    let inputY = this.joystick.y;
    
    if (this.keys.has('w') || this.keys.has('arrowup')) inputY = -1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) inputY = 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) inputX = -1;
    if (this.keys.has('d') || this.keys.has('arrowright')) inputX = 1;

    // Normalize
    if (inputX !== 0 && inputY !== 0) {
      const len = Math.sqrt(inputX*inputX + inputY*inputY);
      inputX /= len;
      inputY /= len;
    }

    player.vel.x = inputX * player.speed;
    player.vel.y = inputY * player.speed;

    // Update all entities
    this.entities.forEach(ent => {
      if (ent.isPlayer) {
        this.moveEntityWithCollision(ent, dt);
      } else {
        this.updateAI(ent, dt);
      }
      
      // Animation frame
      if (ent.vel.x !== 0 || ent.vel.y !== 0) {
        ent.frame += dt * 10 * this.timeSpeed;
        ent.state = 'walking';
      } else {
        ent.frame = 0;
        ent.state = 'idle';
      }
    });
  }

  updateAI(ent: Entity, dt: number) {
    if (ent.path && ent.path.length > 0) {
      const targetPixel = {
        x: ent.path[0].x * TILE_SIZE + TILE_SIZE / 2,
        y: ent.path[0].y * TILE_SIZE + TILE_SIZE / 2
      };
      
      const dx = targetPixel.x - ent.pos.x;
      const dy = targetPixel.y - ent.pos.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      if (dist < 2) {
        ent.path.shift(); // Reached waypoint
        ent.vel.x = 0;
        ent.vel.y = 0;
      } else {
        ent.vel.x = (dx / dist) * ent.speed * this.timeSpeed;
        ent.vel.y = (dy / dist) * ent.speed * this.timeSpeed;
      }
      this.moveEntityWithCollision(ent, dt);
    } else {
      ent.vel.x = 0;
      ent.vel.y = 0;
    }
  }

  moveEntityWithCollision(ent: Entity, dt: number) {
    const nextX = ent.pos.x + ent.vel.x * dt;
    const nextY = ent.pos.y + ent.vel.y * dt;
    
    // Simplified collision bounding box (10x6 at the bottom of entity)
    const w = 10;
    const h = 6;
    
    // Check X
    if (!this.checkCollision({ x: nextX - w/2, y: ent.pos.y - h, w, h })) {
      ent.pos.x = nextX;
    }
    // Check Y
    if (!this.checkCollision({ x: ent.pos.x - w/2, y: nextY - h, w, h })) {
      ent.pos.y = nextY;
    }
    
    // Map bounds
    ent.pos.x = Math.max(w/2, Math.min(MAP_WIDTH * TILE_SIZE - w/2, ent.pos.x));
    ent.pos.y = Math.max(h, Math.min(MAP_HEIGHT * TILE_SIZE - 2, ent.pos.y));
  }

  checkCollision(rect: Rect): boolean {
    for (const obj of this.objects) {
      if (obj.solid && this.rectIntersect(rect, obj.rect)) {
        return true;
      }
    }
    return false;
  }

  rectIntersect(r1: Rect, r2: Rect) {
    return !(r2.x >= r1.x + r1.w || 
             r2.x + r2.w <= r1.x || 
             r2.y >= r1.y + r1.h || 
             r2.y + r2.h <= r1.y);
  }
}
