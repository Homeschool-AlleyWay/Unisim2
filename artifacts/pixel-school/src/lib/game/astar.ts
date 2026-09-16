import { Vector2, GameObject } from './types';
import { MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from './map';

export function buildCollisionGrid(objects: GameObject[]): boolean[][] {
  const grid = Array.from({ length: MAP_HEIGHT }, () => Array(MAP_WIDTH).fill(false));
  for (const obj of objects) {
    if (obj.solid) {
      const startX = Math.floor(obj.rect.x / TILE_SIZE);
      const startY = Math.floor(obj.rect.y / TILE_SIZE);
      const endX = Math.floor((obj.rect.x + obj.rect.w - 1) / TILE_SIZE);
      const endY = Math.floor((obj.rect.y + obj.rect.h - 1) / TILE_SIZE);
      for (let y = startY; y <= endY; y++) {
        for (let x = startX; x <= endX; x++) {
          if (y >= 0 && y < MAP_HEIGHT && x >= 0 && x < MAP_WIDTH) {
            grid[y][x] = true;
          }
        }
      }
    }
  }
  return grid;
}

export function findPath(start: Vector2, goal: Vector2, grid: boolean[][]): Vector2[] {
  if (goal.y < 0 || goal.y >= MAP_HEIGHT || goal.x < 0 || goal.x >= MAP_WIDTH) return [];

  type Node = { x: number, y: number, g: number, h: number, f: number, parent: Node | null };
  const openSet: Node[] = [];
  const closedSet: boolean[][] = Array.from({length: MAP_HEIGHT}, () => Array(MAP_WIDTH).fill(false));
  
  const startNode = { x: start.x, y: start.y, g: 0, h: 0, f: 0, parent: null };
  openSet.push(startNode);
  
  const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]; 
  
  while(openSet.length > 0) {
    openSet.sort((a,b) => a.f - b.f);
    const current = openSet.shift()!;
    
    if (current.x === goal.x && current.y === goal.y) {
      const path = [];
      let curr: Node | null = current;
      while(curr) {
        path.push({ x: curr.x, y: curr.y });
        curr = curr.parent;
      }
      return path.reverse();
    }
    
    closedSet[current.y][current.x] = true;
    
    for (const [dx, dy] of dirs) {
      const nx = current.x + dx;
      const ny = current.y + dy;
      
      if (nx >= 0 && nx < MAP_WIDTH && ny >= 0 && ny < MAP_HEIGHT) {
        if (closedSet[ny][nx]) continue;
        
        // Skip solids unless it's exactly the goal tile
        if (grid[ny][nx] && !(nx === goal.x && ny === goal.y)) continue;
        
        const g = current.g + 1;
        const h = Math.abs(nx - goal.x) + Math.abs(ny - goal.y);
        
        const existing = openSet.find(n => n.x === nx && n.y === ny);
        if (existing) {
          if (g < existing.g) {
            existing.g = g;
            existing.f = g + existing.h;
            existing.parent = current;
          }
        } else {
          openSet.push({ x: nx, y: ny, g, h, f: g + h, parent: current });
        }
      }
    }
  }
  return []; 
}
