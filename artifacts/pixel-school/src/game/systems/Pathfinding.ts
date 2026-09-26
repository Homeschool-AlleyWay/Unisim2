// A* pathfinding on the tile grid (4-directional).
export class NavGrid {
  solid: Uint8Array;
  constructor(public w: number, public h: number) {
    this.solid = new Uint8Array(w * h);
  }
  isSolid(x: number, y: number) {
    return x < 0 || y < 0 || x >= this.w || y >= this.h || this.solid[y * this.w + x] === 1;
  }
  setSolid(x: number, y: number, v: boolean) {
    if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.solid[y * this.w + x] = v ? 1 : 0;
  }
}

export type TilePt = [number, number];

export function findPath(g: NavGrid, sx: number, sy: number, tx: number, ty: number, maxIter = 8000): TilePt[] | null {
  if (sx === tx && sy === ty) return [];
  const W = g.w, N = g.w * g.h;
  // If the goal is solid, aim for the nearest walkable neighbour.
  if (g.isSolid(tx, ty)) {
    let best: TilePt | null = null, bd = 1e9;
    for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const nx = tx + dx, ny = ty + dy;
      if (!g.isSolid(nx, ny)) { const d = Math.abs(nx - sx) + Math.abs(ny - sy); if (d < bd) { bd = d; best = [nx, ny]; } }
    }
    if (!best) return null;
    [tx, ty] = best;
    if (sx === tx && sy === ty) return [];
  }
  const gScore = new Float32Array(N).fill(Infinity);
  const came = new Int32Array(N).fill(-1);
  const closed = new Uint8Array(N);
  const heap: number[] = []; // packed [f, idx]
  const fOf: number[] = [];
  const push = (idx: number, f: number) => {
    heap.push(idx); fOf.push(f);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (fOf[p] <= fOf[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]]; [fOf[p], fOf[i]] = [fOf[i], fOf[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const lastI = heap.pop()!, lastF = fOf.pop()!;
    if (heap.length) {
      heap[0] = lastI; fOf[0] = lastF;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < heap.length && fOf[l] < fOf[m]) m = l;
        if (r < heap.length && fOf[r] < fOf[m]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]]; [fOf[m], fOf[i]] = [fOf[i], fOf[m]];
        i = m;
      }
    }
    return top;
  };
  const start = sy * W + sx, goal = ty * W + tx;
  gScore[start] = 0;
  push(start, Math.abs(sx - tx) + Math.abs(sy - ty));
  let iter = 0;
  while (heap.length && iter++ < maxIter) {
    const cur = pop();
    if (cur === goal) break;
    if (closed[cur]) continue;
    closed[cur] = 1;
    const cx = cur % W, cy = (cur / W) | 0;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dy] of dirs) {
      const nx = cx + dx, ny = cy + dy;
      if (g.isSolid(nx, ny) && !(nx === sx && ny === sy)) continue;
      const ni = ny * W + nx;
      const ng = gScore[cur] + 1;
      if (ng < gScore[ni]) {
        gScore[ni] = ng;
        came[ni] = cur;
        push(ni, ng + Math.abs(nx - tx) + Math.abs(ny - ty) * 1.001);
      }
    }
  }
  if (came[goal] === -1) return null;
  const path: TilePt[] = [];
  let c = goal;
  while (c !== start && c !== -1) { path.push([c % W, (c / W) | 0]); c = came[c]; }
  return path.reverse();
}
