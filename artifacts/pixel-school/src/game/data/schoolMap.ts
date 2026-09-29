// School layout: rooms, walls and doors on a 64x54 tile grid (16px tiles).
export const TILE = 16;
export const MAP_W = 64;
export const MAP_H = 60;

export type FloorKind =
  | 'grass' | 'path' | 'sidewalk' | 'road' | 'wood' | 'carpet' | 'hall' | 'lobby' | 'checker'
  | 'gym' | 'lab' | 'bath' | 'art' | 'music' | 'kitchen';
export type Cell = FloorKind | 'wall';

export interface Room {
  id: string;
  name: string;
  floor: FloorKind;
  paint: string; // wall paint seen on this room's wall faces
  x1: number; y1: number; x2: number; y2: number; // interior, inclusive
}

export const ROOMS: Room[] = [
  { id: 'classA', name: 'Classroom A · Math', floor: 'wood', paint: '#f2d49b', x1: 4, y1: 6, x2: 16, y2: 15 },
  { id: 'library', name: 'Library', floor: 'carpet', paint: '#b9d3b0', x1: 18, y1: 6, x2: 31, y2: 15 },
  { id: 'lab', name: 'Science Lab', floor: 'lab', paint: '#bcd8e8', x1: 33, y1: 6, x2: 44, y2: 15 },
  { id: 'cafeteria', name: 'Cafeteria', floor: 'checker', paint: '#f4c2b0', x1: 46, y1: 6, x2: 59, y2: 22 },
  { id: 'hallway', name: 'Main Hallway', floor: 'hall', paint: '#efe3c4', x1: 4, y1: 19, x2: 44, y2: 22 },
  { id: 'classB', name: 'Classroom B · English', floor: 'wood', paint: '#cfe3b7', x1: 4, y1: 26, x2: 15, y2: 32 },
  { id: 'restroom', name: 'Restrooms', floor: 'bath', paint: '#cde9e4', x1: 4, y1: 36, x2: 15, y2: 40 },
  { id: 'lobby', name: 'Lobby & Front Office', floor: 'lobby', paint: '#e9dcc9', x1: 17, y1: 26, x2: 30, y2: 40 },
  { id: 'art', name: 'Art Room', floor: 'art', paint: '#f5d0e0', x1: 32, y1: 26, x2: 44, y2: 31 },
  { id: 'music', name: 'Music Room', floor: 'music', paint: '#d8c8ee', x1: 32, y1: 35, x2: 44, y2: 40 },
  { id: 'gym', name: 'Gymnasium', floor: 'gym', paint: '#d9dde8', x1: 46, y1: 26, x2: 59, y2: 40 },
];

export const ROOM_BY_ID: Record<string, Room> = Object.fromEntries(ROOMS.map((r) => [r.id, r]));

/** Door openings carved through walls: [x1,y1,x2,y2,floor] */
const DOORS: [number, number, number, number, FloorKind][] = [
  [10, 16, 11, 18, 'hall'], // Classroom A
  [24, 16, 25, 18, 'hall'], // Library
  [38, 16, 39, 18, 'hall'], // Science
  [45, 20, 45, 21, 'hall'], // Cafeteria side door
  [9, 23, 10, 25, 'hall'], // Classroom B
  [21, 23, 26, 25, 'lobby'], // Lobby <-> hallway (wide arch)
  [38, 23, 39, 25, 'hall'], // Art
  [16, 37, 16, 38, 'lobby'], // Restrooms
  [31, 37, 31, 38, 'lobby'], // Music
  [49, 23, 50, 25, 'gym'], // Cafeteria <-> gym
  [22, 41, 25, 43, 'lobby'], // Main entrance
  [60, 33, 60, 34, 'gym'], // Gym side exit
];

export interface SchoolGrid {
  cells: Cell[];
  roomIds: string[]; // '' = outside
  at(x: number, y: number): Cell;
  roomAt(x: number, y: number): string;
}

export function buildGrid(): SchoolGrid {
  const cells: Cell[] = new Array(MAP_W * MAP_H).fill('grass');
  const roomIds: string[] = new Array(MAP_W * MAP_H).fill('');
  const set = (x: number, y: number, c: Cell, room?: string) => {
    if (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H) return;
    cells[y * MAP_W + x] = c;
    if (room !== undefined) roomIds[y * MAP_W + x] = room;
  };
  const fill = (x1: number, y1: number, x2: number, y2: number, c: Cell, room?: string) => {
    for (let y = y1; y <= y2; y++) for (let x = x1; x <= x2; x++) set(x, y, c, room);
  };

  // Outdoors
  fill(0, 48, MAP_W - 1, 49, 'sidewalk');
  fill(0, 50, MAP_W - 1, 55, 'road');
  fill(0, 56, MAP_W - 1, 57, 'sidewalk');
  fill(22, 44, 25, 47, 'path');
  fill(4, 45, 20, 45, 'path');
  fill(61, 33, 62, 47, 'path');
  fill(26, 46, 44, 47, 'path');
  // Building shell
  fill(3, 3, 60, 43, 'wall');
  for (const r of ROOMS) fill(r.x1, r.y1, r.x2, r.y2, r.floor, r.id);
  // Kitchen strip at the top of the cafeteria
  fill(46, 6, 59, 8, 'kitchen', 'cafeteria');
  for (const [x1, y1, x2, y2, f] of DOORS) {
    // A door belongs to whichever room it opens into (nearest room)
    fill(x1, y1, x2, y2, f, f === 'gym' ? 'gym' : f === 'lobby' ? 'lobby' : 'hallway');
  }
  // Wall cells take the room id of whichever interior they face (for paint colours)
  const at = (x: number, y: number): Cell => (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H ? 'wall' : cells[y * MAP_W + x]);
  const roomAt = (x: number, y: number) => (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H ? '' : roomIds[y * MAP_W + x]);
  return { cells, roomIds, at, roomAt };
}

export function roomContaining(x: number, y: number): Room | undefined {
  return ROOMS.find((r) => x >= r.x1 && x <= r.x2 && y >= r.y1 && y <= r.y2);
}

/** Auditorium-style subject classrooms: one room per subject, shared by every grade. Seating
 *  rises in tiers from the teacher's stage at the front (level 0) toward the back of the room.
 *  Rows are [firstRow, lastRow, level] in tile rows; everything in front of the first tier is the stage. */
export const TIERS: Record<string, [number, number, number][]> = {
  classA: [[9, 10, 1], [11, 12, 2], [13, 15, 3]],
  lab: [[9, 10, 1], [11, 12, 2], [13, 15, 3]],
  classB: [[28, 29, 1], [30, 32, 2]],
};
/** Height of one tier step in the 3D view (world units; 1 unit = 1 tile ≈ 1 m). */
export const TIER_STEP = 0.32;

/** Tier level (0 = floor/stage) of a tile, for the auditorium classrooms. */
export function floorLevel(x: number, y: number): number {
  const r = roomContaining(x, y);
  const tiers = r && TIERS[r.id];
  if (!tiers) return 0;
  for (const [a, b, level] of tiers) if (y >= a && y <= b) return level;
  return 0;
}
