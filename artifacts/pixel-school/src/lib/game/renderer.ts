import { GameEngine } from './engine';
import { Entity, GameObject } from './types';
import { MAP_WIDTH, MAP_HEIGHT, TILE_SIZE, mapRows, floorColors } from './map';

export function renderGame(ctx: CanvasRenderingContext2D, engine: GameEngine) {
  // Clear background
  // Clear in logical coordinates (the context is pre-scaled for high-DPI).
  ctx.fillStyle = '#4ade80'; // Outside map grass
  ctx.fillRect(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
  
  // 1. Draw floor
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const char = mapRows[y][x];
      
      if (char === 'H' || char === 'd') {
        // Checkerboard for hallway
        ctx.fillStyle = (x + y) % 2 === 0 ? '#f8fafc' : '#f1f5f9';
      } else {
        ctx.fillStyle = floorColors[char] || 'transparent';
      }
      
      if (ctx.fillStyle !== 'transparent' && ctx.fillStyle !== 'rgba(0, 0, 0, 0)') {
        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  // 2. Collect renderables and sort by Y
  const renderables: { type: 'object' | 'entity'; ySort: number; item: any }[] = [];
  engine.objects.forEach(obj => {
    renderables.push({ type: 'object', ySort: obj.zIndex, item: obj });
  });
  engine.entities.forEach(ent => {
    renderables.push({ type: 'entity', ySort: ent.pos.y, item: ent });
  });

  renderables.sort((a, b) => a.ySort - b.ySort);

  // 3. Draw sorted
  renderables.forEach(r => {
    if (r.type === 'object') drawObject(ctx, r.item as GameObject);
    if (r.type === 'entity') drawEntity(ctx, r.item as Entity);
  });
}

function drawObject(ctx: CanvasRenderingContext2D, obj: GameObject) {
  const { x, y, w, h } = obj.rect;
  
  if (obj.type === 'wall') {
    ctx.fillStyle = '#64748b'; // front
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = '#94a3b8'; // top
    ctx.fillRect(x, y - 4, w, 4);
    // Darker bottom edge
    ctx.fillStyle = '#475569';
    ctx.fillRect(x, y + h - 2, w, 2);
  } else if (obj.type === 'desk') {
    ctx.fillStyle = obj.color || '#d97706';
    ctx.fillRect(x + 1, y + 2, w - 2, h - 6);
    // Legs
    ctx.fillStyle = '#475569';
    ctx.fillRect(x + 2, y + h - 4, 2, 4);
    ctx.fillRect(x + w - 4, y + h - 4, 2, 4);
  } else if (obj.type === 'table') {
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(x, y + 2, w, h - 4);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(x, y + h - 2, w, 2);
  }
}

function drawEntity(ctx: CanvasRenderingContext2D, ent: Entity) {
  const { x, y } = ent.pos;
  
  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath();
  ctx.ellipse(x, y, 6, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  const isWalking = ent.vel.x !== 0 || ent.vel.y !== 0;
  const bob = isWalking ? Math.abs(Math.sin(ent.frame * 0.2)) * 2 : 0;

  // Legs
  ctx.fillStyle = '#1e293b'; 
  if (isWalking) {
    const legOffset = Math.sin(ent.frame * 0.3) * 3;
    ctx.fillRect(x - 4, y - 4 - bob, 3, 4 + legOffset);
    ctx.fillRect(x + 1, y - 4 - bob, 3, 4 - legOffset);
  } else {
    ctx.fillRect(x - 4, y - 4, 3, 4);
    ctx.fillRect(x + 1, y - 4, 3, 4);
  }

  // Player Marker
  if (ent.isPlayer) {
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - 7, y - 24 - bob, 14, 22);
    
    // Halo arrow above
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(x, y - 30 - bob);
    ctx.lineTo(x - 4, y - 36 - bob);
    ctx.lineTo(x + 4, y - 36 - bob);
    ctx.fill();
  }

  // Body
  ctx.fillStyle = ent.color;
  ctx.fillRect(x - 5, y - 12 - bob, 10, 8);

  // Head
  ctx.fillStyle = ent.skinColor;
  ctx.fillRect(x - 4, y - 20 - bob, 8, 8);
  
  // Hair
  ctx.fillStyle = ent.hairColor;
  ctx.fillRect(x - 5, y - 22 - bob, 10, 4);
  ctx.fillRect(x - 5, y - 18 - bob, 2, 4);
  ctx.fillRect(x + 3, y - 18 - bob, 2, 4);
}
