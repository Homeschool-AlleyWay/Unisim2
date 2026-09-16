export type Vector2 = { x: number; y: number };
export type Rect = { x: number; y: number; w: number; h: number };

export type Period = 'Arrival' | 'Period 1' | 'Lunch' | 'Period 2' | 'Dismissal';

export interface Entity {
  id: string;
  isPlayer: boolean;
  pos: Vector2; // pixels (bottom-center of sprite)
  vel: Vector2;
  targetPos: Vector2 | null;
  path: Vector2[];
  color: string;
  hairColor: string;
  skinColor: string;
  speed: number;
  frame: number;
  direction: 'up' | 'down' | 'left' | 'right';
  schedule: Record<Period, Vector2>; // target tile coordinates
  state: 'idle' | 'walking';
}

export interface GameObject {
  id: string;
  type: 'wall' | 'desk' | 'locker' | 'table' | 'plant';
  rect: Rect; // in pixels
  solid: boolean;
  color?: string;
  zIndex: number; // For Y-sorting, usually visually bottom edge
}
