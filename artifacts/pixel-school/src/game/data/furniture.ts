// Furniture, seats and interactive spots placed around the school.
export type Dir = 'down' | 'left' | 'right' | 'up';

export type InteractKind =
  | 'read' | 'experiment' | 'food' | 'vending' | 'locker' | 'fountain' | 'hoop' | 'piano' | 'drums'
  | 'paint' | 'sink' | 'trophy' | 'sign' | 'busstop' | 'globe' | 'skeleton' | 'computer' | 'fountainPark' | 'trash';

export interface PlacedObject {
  id: number;
  type: string; // texture key (see art/furniture.ts)
  tx: number; ty: number; // top-left tile of the footprint
  fw: number; fh: number; // footprint in tiles
  solid: boolean;
  under?: boolean; // drawn under characters (chairs, rugs, benches)
  interact?: InteractKind;
  label?: string;
  hidden?: boolean; // logic-only marker
}

export type SeatKind = 'desk' | 'table' | 'bench' | 'stand' | 'teacher';
export interface Seat {
  id: number;
  tx: number; ty: number;
  facing: Dir;
  room: string;
  kind: SeatKind;
}

export interface Placement {
  objects: PlacedObject[];
  seats: Seat[];
}

export function buildPlacement(): Placement {
  const objects: PlacedObject[] = [];
  const seats: Seat[] = [];
  let oid = 1;
  let sid = 1;
  const obj = (type: string, tx: number, ty: number, fw = 1, fh = 1, solid = true, extra: Partial<PlacedObject> = {}) => {
    const o: PlacedObject = { id: oid++, type, tx, ty, fw, fh, solid, ...extra };
    objects.push(o);
    return o;
  };
  const seat = (tx: number, ty: number, facing: Dir, room: string, kind: SeatKind, chair?: string) => {
    seats.push({ id: sid++, tx, ty, facing, room, kind });
    if (chair) obj(chair, tx, ty, 1, 1, false, { under: true });
  };

  // ---------- Classrooms ----------
  const classroom = (room: string, cols: number[], rows: number[], tdx: number, tdy: number) => {
    obj('teacherDesk', tdx, tdy, 2, 1, true, { interact: 'computer', label: "Teacher's desk" });
    seat(tdx, tdy - 1, 'down', room, 'teacher');
    for (const y of rows)
      for (const x of cols) {
        obj('desk', x, y, 1, 1, true);
        seat(x, y + 1, 'up', room, 'desk', 'chair');
      }
  };
  // Classroom A (Math)
  classroom('classA', [5, 7, 12, 14], [9, 11, 13], 9, 7);
  obj('plant', 4, 6);
  obj('bookshelf', 15, 6, 2, 1, true, { interact: 'read', label: 'Math books' });
  obj('globe', 13, 6, 1, 1, true, { interact: 'globe', label: 'Globe' });
  // Classroom B (English)
  classroom('classB', [5, 7, 11, 13], [28, 30], 12, 27);
  obj('bookshelf', 4, 26, 2, 1, true, { interact: 'read', label: 'Novels' });
  obj('plant', 15, 26);
  obj('plant', 15, 32);

  // ---------- Library ----------
  for (const x of [18, 20, 22, 28, 30]) obj('bookshelf', x, 6, 2, 1, true, { interact: 'read', label: 'Bookshelf' });
  obj('libDesk', 25, 7, 3, 1, true, { interact: 'computer', label: 'Check-out desk' });
  seat(26, 6, 'down', 'library', 'teacher');
  for (const y of [9, 12]) for (const x of [19, 21]) obj('bookshelf', x, y, 2, 1, true, { interact: 'read', label: 'Bookshelf' });
  for (const y of [10, 13]) {
    obj('libTable', 27, y, 2, 2, true);
    seat(26, y, 'right', 'library', 'table', 'chairSide');
    seat(26, y + 1, 'right', 'library', 'table', 'chairSide');
    seat(29, y, 'left', 'library', 'table', 'chairSide');
    seat(29, y + 1, 'left', 'library', 'table', 'chairSide');
  }
  seat(31, 10, 'down', 'library', 'bench', 'beanbag');
  seat(31, 13, 'down', 'library', 'bench', 'beanbagBlue');
  obj('plant', 18, 15);
  obj('plant', 31, 15);

  // ---------- Science lab ----------
  obj('teacherDesk', 38, 7, 2, 1, true, { interact: 'computer', label: "Teacher's desk" });
  seat(38, 6, 'down', 'lab', 'teacher');
  obj('skeleton', 33, 6, 1, 1, true, { interact: 'skeleton', label: 'Skeleton "Mr. Bones"' });
  obj('labShelf', 42, 6, 2, 1, true, { interact: 'experiment', label: 'Chemical shelf' });
  obj('labSink', 44, 6, 1, 1, true, { interact: 'sink', label: 'Lab sink' });
  for (const y of [9, 12])
    for (const x of [34, 41]) {
      obj('labBench', x, y, 3, 1, true, { interact: 'experiment', label: 'Lab bench' });
      for (let i = 0; i < 3; i++) seat(x + i, y + 1, 'up', 'lab', 'desk', 'stool');
    }
  obj('plant', 44, 15);

  // ---------- Cafeteria ----------
  obj('stove', 47, 6);
  obj('stove', 48, 6);
  obj('fridge', 50, 6);
  obj('kitchenSink', 52, 6);
  obj('prep', 54, 6, 2, 1);
  obj('fridge', 57, 6);
  obj('counter', 47, 9, 10, 1, true, { interact: 'food', label: 'Lunch line' });
  seat(52, 8, 'down', 'cafeteria', 'teacher'); // chef spot
  obj('vending', 58, 9, 1, 1, true, { interact: 'vending', label: 'Vending machine' });
  obj('vendingBlue', 59, 9, 1, 1, true, { interact: 'vending', label: 'Juice machine' });
  for (const y of [13, 17, 21])
    for (const x of [48, 54]) {
      obj('longTable', x, y, 4, 1, true);
      for (let i = 0; i < 4; i++) {
        seat(x + i, y - 1, 'down', 'cafeteria', 'table', 'stool');
        seat(x + i, y + 1, 'up', 'cafeteria', 'table', 'stool');
      }
    }
  obj('trash', 46, 11, 1, 1, true, { interact: 'trash', label: 'Recycling' });
  obj('trash', 59, 15, 1, 1, true, { interact: 'trash', label: 'Recycling' });
  obj('plant', 46, 16);

  // ---------- Hallway ----------
  obj('plant', 4, 19);
  obj('plant', 44, 19);
  obj('waterFountain', 16, 19, 1, 1, true, { interact: 'fountain', label: 'Water fountain' });
  obj('trophyCase', 30, 19, 2, 1, true, { interact: 'trophy', label: 'Trophy case' });
  obj('bench', 34, 22, 2, 1, false, { under: true });
  seat(34, 22, 'down', 'hallway', 'bench');
  seat(35, 22, 'down', 'hallway', 'bench');
  obj('bench', 13, 22, 2, 1, false, { under: true });
  seat(13, 22, 'down', 'hallway', 'bench');
  seat(14, 22, 'down', 'hallway', 'bench');
  // Lockers are painted on the hallway wall; these are logic markers in front of them.
  for (let x = 4; x <= 44; x++) {
    if ([10, 11, 16, 17, 20, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 38, 39].includes(x)) continue; // doors, boards, hall TV
    obj('marker', x, 18, 1, 1, true, { hidden: true, interact: 'locker', label: `Locker #${x}` });
  }

  // ---------- Lobby ----------
  obj('officeDesk', 18, 30, 4, 1, true, { interact: 'computer', label: 'Front office' });
  seat(19, 29, 'down', 'lobby', 'teacher');
  for (const y of [30, 31, 32]) seat(30, y, 'left', 'lobby', 'bench', 'chairSideL');
  obj('plant', 17, 26);
  obj('plant', 30, 26);
  obj('plant', 17, 40);
  obj('plant', 30, 40);
  obj('mapBoard', 27, 34, 2, 1, true, { interact: 'sign', label: 'School map' });

  // ---------- Restrooms ----------
  for (const x of [4, 6, 8]) obj('stall', x, 36, 2, 1, true);
  for (const x of [11, 12, 13, 14]) obj('bathSink', x, 36, 1, 1, true, { interact: 'sink', label: 'Sink' });
  obj('trash', 15, 40, 1, 1, true, { interact: 'trash', label: 'Trash can' });

  // ---------- Art room ----------
  obj('paintShelf', 32, 26, 2, 1, true, { interact: 'paint', label: 'Paint supplies' });
  obj('teacherDesk', 43, 26, 2, 1, true, { interact: 'computer', label: "Teacher's desk" });
  seat(37, 27, 'down', 'art', 'teacher');
  for (const x of [33, 40]) {
    obj('artTable', x, 28, 3, 1, true);
    for (let i = 0; i < 3; i++) seat(x + i, 29, 'up', 'art', 'desk', 'stool');
  }
  for (const x of [33, 35, 40, 42]) {
    obj('easel', x, 30, 1, 1, true, { interact: 'paint', label: 'Easel' });
    seat(x, 31, 'up', 'art', 'desk', 'stool');
  }

  // ---------- Music room ----------
  obj('piano', 42, 35, 2, 1, true, { interact: 'piano', label: 'Piano' });
  obj('drums', 39, 35, 2, 1, true, { interact: 'drums', label: 'Drum kit' });
  obj('musicStand', 34, 36, 1, 1, true);
  seat(36, 36, 'down', 'music', 'teacher');
  for (let x = 33; x <= 40; x++) seat(x, 38, 'up', 'music', 'desk', 'chair');
  obj('plant', 44, 40);

  // ---------- Gym ----------
  obj('hoop', 52, 26, 2, 1, true, { interact: 'hoop', label: 'Basketball hoop' });
  obj('bleachers', 46, 29, 2, 9, true);
  obj('ballRack', 57, 26, 2, 1, true, { interact: 'hoop', label: 'Ball rack' });
  seat(53, 28, 'down', 'gym', 'teacher');
  for (const y of [31, 34, 37]) for (const x of [50, 52, 54, 56]) seat(x, y, 'up', 'gym', 'stand');

  // ---------- Outside ----------
  for (let x = 1; x < 64; x += 4) obj('tree', x, 1, 1, 1, true);
  for (const y of [9, 17, 25, 33, 41]) obj('tree', 1, y, 1, 1, true);
  for (const y of [7, 15, 23, 29]) obj('tree', 62, y, 1, 1, true);
  obj('tree', 1, 46, 1, 1, true);
  obj('tree', 58, 45, 1, 1, true);
  obj('parkFountain', 9, 46, 3, 2, true, { interact: 'fountainPark', label: 'Courtyard fountain' });
  obj('benchOut', 4, 47, 2, 1, false, { under: true });
  seat(4, 47, 'down', '', 'bench');
  seat(5, 47, 'down', '', 'bench');
  obj('benchOut', 14, 47, 2, 1, false, { under: true });
  seat(14, 47, 'down', '', 'bench');
  seat(15, 47, 'down', '', 'bench');
  obj('flagpole', 20, 47, 1, 1, true);
  obj('schoolSign', 27, 44, 3, 1, true, { interact: 'sign', label: 'Maple Grove sign' });
  obj('bikeRack', 32, 44, 2, 1, true);
  for (const x of [5, 7, 13, 15, 17, 35, 37, 39, 41, 43, 47, 49, 51, 53, 55]) obj('bush', x, 44, 1, 1, true);
  obj('busStop', 37, 48, 1, 1, true, { interact: 'busstop', label: 'Bus stop' });

  return { objects, seats };
}
