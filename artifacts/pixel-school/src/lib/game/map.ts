import { GameObject, Vector2 } from './types';

export const TILE_SIZE = 16;
export const MAP_WIDTH = 32;
export const MAP_HEIGHT = 24;

export const mapRows = [
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WMMMMMMMMMWWAAAAAAAAAAWW       W",
  "WWWWWdWWWWWWWWWWWdWWWWWWWWWWWWWW",
  "WHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHW",
  "WHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHW",
  "WHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHW",
  "WHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHW",
  "WWWWWdWWWWWWWWWWWWWWdWWWWWWWWWWW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WEEEEEEEEEWWCCCCCCCCCCCCCCCCCCCW",
  "WWWWWdWWWWWWWWWWWWWWWWWWWWWWWWWW",
  "     d                          "
];

export const floorColors: Record<string, string> = {
  W: '#cbd5e1', // Wall top fallback
  M: '#fef08a', // Math floor
  A: '#fbcfe8', // Art floor
  H: '#f8fafc', // Hallway
  C: '#bfdbfe', // Cafeteria
  E: '#fed7aa', // Entrance
  d: '#f8fafc', // Door uses hallway color
  ' ': 'transparent'
};

export const mathDeskCoords = [
  [3,3], [5,3], [7,3], [9,3],
  [3,5], [5,5], [7,5], [9,5],
  [5,7], [7,7]
];

export const artDeskCoords = [
  [15,3], [17,3], [19,3], [21,3],
  [15,5], [17,5], [19,5], [21,5],
  [17,7], [19,7]
];

export const cafCoords = [
  [16,16], [17,16], [18,16], [19,16],
  [16,18], [17,18], [18,18], [19,18],
  [16,20], [17,20]
];

export const studentConfigs = Array.from({ length: 10 }).map((_, i) => {
  const mDesk = mathDeskCoords[i];
  const aDesk = artDeskCoords[i];
  const cTable = cafCoords[i];
  return {
    id: `student_${i}`,
    isPlayer: i === 0,
    Arrival: { x: 2 + i * 2, y: 10 },
    'Period 1': { x: mDesk[0], y: mDesk[1] + 1 }, // stand below desk
    Lunch: { x: cTable[0], y: cTable[1] - 1 }, // stand above table
    'Period 2': { x: aDesk[0], y: aDesk[1] + 1 },
    Dismissal: { x: 5, y: 23 } // exit tile
  };
});

export function generateMapObjects(): GameObject[] {
  const objects: GameObject[] = [];
  
  // Walls
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      const char = mapRows[y][x];
      if (char === 'W') {
        objects.push({
          id: `wall_${x}_${y}`,
          type: 'wall',
          rect: { x: x * TILE_SIZE, y: y * TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE },
          solid: true,
          zIndex: (y * TILE_SIZE) + TILE_SIZE
        });
      }
    }
  }

  // Desks (Math)
  mathDeskCoords.forEach(([x, y], i) => {
    objects.push({
      id: `mdesk_${i}`, type: 'desk', color: '#d97706',
      rect: { x: x * TILE_SIZE, y: y * TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE },
      solid: true, zIndex: y * TILE_SIZE + TILE_SIZE
    });
  });

  // Easels (Art)
  artDeskCoords.forEach(([x, y], i) => {
    objects.push({
      id: `adesk_${i}`, type: 'desk', color: '#fb923c', 
      rect: { x: x * TILE_SIZE, y: y * TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE },
      solid: true, zIndex: y * TILE_SIZE + TILE_SIZE
    });
  });

  // Cafeteria Tables
  cafCoords.forEach(([x, y], i) => {
    objects.push({
      id: `ctable_${i}`, type: 'table',
      rect: { x: x * TILE_SIZE, y: y * TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE },
      solid: true, zIndex: y * TILE_SIZE + TILE_SIZE
    });
  });

  return objects;
}
