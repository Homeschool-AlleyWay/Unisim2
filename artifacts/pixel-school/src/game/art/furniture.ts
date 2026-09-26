// Procedural pixel-art furniture & props. Each entry: [width, height, draw].
import { Ctx, box, makeCanvas, outline, pixelTextCentered, px, rect, shade } from './pixel';

type Draw = (c: Ctx, w: number, h: number) => void;
const WOOD = '#d39a5e', WOOD_D = '#a8703f', WOOD_L = '#e6b77f';

const bookRow = (c: Ctx, x: number, y: number, w: number, seed: number) => {
  const cols = ['#d9534f', '#5b8fd6', '#f0c24b', '#6cbf6a', '#9b6fd1', '#e98a3b', '#4fb3b3', '#f2f0e6'];
  let cx = x;
  let i = seed;
  while (cx < x + w - 1) {
    const bw = 2 + ((i * 7) % 2);
    const bh = 6 - ((i * 5) % 3);
    rect(c, cx, y + (6 - bh), bw, bh, cols[(i * 3) % cols.length]);
    rect(c, cx, y + (6 - bh), bw, 1, shade(cols[(i * 3) % cols.length], 0.35));
    cx += bw;
    i++;
  }
};

const FURNITURE: Record<string, [number, number, Draw]> = {
  desk: [16, 18, (c) => {
    rect(c, 2, 12, 2, 5, WOOD_D); rect(c, 12, 12, 2, 5, WOOD_D);
    box(c, 1, 4, 14, 9, WOOD_L, WOOD_D);
    rect(c, 2, 11, 12, 2, WOOD);
    rect(c, 4, 6, 5, 4, '#fbf8f0'); rect(c, 5, 7, 3, 1, '#9aa'); rect(c, 10, 5, 1, 5, '#f0c24b'); px(c, 10, 4, '#333');
  }],
  chair: [16, 16, (c) => {
    rect(c, 3, 3, 10, 7, '#5f7fb5'); rect(c, 3, 3, 10, 1, '#7d9bd0');
    rect(c, 4, 10, 1, 4, '#4a4a58'); rect(c, 11, 10, 1, 4, '#4a4a58');
  }],
  chairSide: [16, 16, (c) => {
    rect(c, 3, 6, 10, 6, WOOD); rect(c, 3, 6, 10, 1, WOOD_L);
    rect(c, 4, 12, 1, 3, WOOD_D); rect(c, 11, 12, 1, 3, WOOD_D);
  }],
  chairSideL: [16, 16, (c) => {
    rect(c, 3, 5, 10, 7, '#6a9e8a'); rect(c, 3, 5, 10, 1, '#8cc2ad'); rect(c, 12, 1, 2, 11, '#4f7d6b');
    rect(c, 4, 12, 1, 3, '#3d3d48'); rect(c, 11, 12, 1, 3, '#3d3d48');
  }],
  stool: [16, 16, (c) => {
    rect(c, 4, 5, 8, 4, '#e36b5d'); rect(c, 4, 5, 8, 1, '#f39a8e');
    rect(c, 5, 9, 1, 5, '#6b6b78'); rect(c, 10, 9, 1, 5, '#6b6b78');
  }],
  beanbag: [16, 16, (c) => { rect(c, 2, 6, 12, 8, '#e98a3b'); rect(c, 3, 5, 10, 1, '#e98a3b'); rect(c, 4, 7, 5, 2, '#f5b27a'); }],
  beanbagBlue: [16, 16, (c) => { rect(c, 2, 6, 12, 8, '#5b8fd6'); rect(c, 3, 5, 10, 1, '#5b8fd6'); rect(c, 4, 7, 5, 2, '#8fb6ec'); }],
  teacherDesk: [32, 22, (c) => {
    box(c, 1, 6, 30, 15, '#b27744', '#7a4e2b');
    rect(c, 2, 7, 28, 6, '#c98b52');
    rect(c, 3, 14, 11, 6, '#9e6638'); rect(c, 18, 14, 11, 6, '#9e6638'); rect(c, 8, 16, 2, 1, '#f0c24b'); rect(c, 23, 16, 2, 1, '#f0c24b');
    box(c, 17, 1, 10, 8, '#3a3f4f', '#23262f'); rect(c, 18, 2, 8, 5, '#7fd0f0'); rect(c, 21, 9, 2, 1, '#23262f');
    rect(c, 4, 8, 6, 4, '#fbf8f0'); rect(c, 5, 9, 4, 1, '#99a');
    rect(c, 11, 7, 3, 3, '#d9362f'); px(c, 12, 6, '#5a3');
  }],
  libDesk: [48, 22, (c) => {
    box(c, 1, 6, 46, 15, '#8c5a36', '#5e3a22');
    rect(c, 2, 7, 44, 5, '#a86d44');
    box(c, 20, 1, 10, 8, '#3a3f4f', '#23262f'); rect(c, 21, 2, 8, 5, '#9fe0a5');
    bookRow(c, 4, 1, 12, 2); bookRow(c, 34, 1, 10, 5);
    rect(c, 6, 14, 36, 1, '#6e4529');
  }],
  bookshelf: [32, 34, (c) => {
    box(c, 1, 1, 30, 32, '#9a6236', '#5e3a22');
    for (let s = 0; s < 3; s++) {
      rect(c, 3, 3 + s * 10, 26, 8, '#5e3a22');
      bookRow(c, 3, 4 + s * 10, 26, s * 3 + 1);
      rect(c, 2, 11 + s * 10, 28, 2, '#b67a47');
    }
  }],
  libTable: [32, 32, (c) => {
    rect(c, 3, 26, 2, 5, WOOD_D); rect(c, 27, 26, 2, 5, WOOD_D);
    box(c, 1, 3, 30, 24, '#c98b52', '#8a5a34');
    rect(c, 2, 24, 28, 3, '#a86d3d');
    rect(c, 5, 7, 8, 6, '#fbf8f0'); rect(c, 9, 7, 1, 6, '#c9c2b0');
    rect(c, 18, 14, 7, 5, '#5b8fd6'); rect(c, 18, 14, 7, 1, '#8fb6ec');
    rect(c, 22, 5, 3, 5, '#f0c24b'); rect(c, 21, 4, 5, 1, '#3b3140');
  }],
  labBench: [48, 22, (c) => {
    box(c, 1, 8, 46, 13, '#4b5566', '#2e3440'); rect(c, 2, 9, 44, 3, '#2f3a48');
    for (let i = 0; i < 3; i++) { rect(c, 6 + i * 15, 14, 6, 5, '#5c687b'); px(c, 8 + i * 15, 16, '#c7ccd6'); }
    // beakers
    const glass = (x: number, col: string, tall: number) => { rect(c, x, 8 - tall, 4, tall, '#dff4fb'); rect(c, x, 8 - tall + Math.floor(tall / 2), 4, Math.ceil(tall / 2), col); rect(c, x + 1, 8 - tall - 1, 2, 1, '#dff4fb'); };
    glass(5, '#6cdf8a', 5); glass(12, '#f0c24b', 4); glass(22, '#e86aa8', 6); glass(33, '#5ab4f0', 5); glass(40, '#b77fe0', 4);
    rect(c, 27, 3, 1, 5, '#7a7a8c'); rect(c, 26, 2, 3, 1, '#7a7a8c');
  }],
  artTable: [48, 20, (c) => {
    rect(c, 3, 14, 2, 5, WOOD_D); rect(c, 43, 14, 2, 5, WOOD_D);
    box(c, 1, 3, 46, 12, '#eee6d6', '#a09682');
    const cols = ['#e86a6a', '#5aa6e0', '#f2c94c', '#7dcc72', '#b77fe0'];
    for (let i = 0; i < 5; i++) { rect(c, 5 + i * 8, 6, 4, 3, cols[i]); px(c, 9 + i * 8, 10, cols[(i + 2) % 5]); }
    rect(c, 36, 8, 8, 5, '#fbf8f0'); rect(c, 37, 9, 3, 2, '#5aa6e0');
  }],
  easel: [16, 28, (c) => {
    rect(c, 3, 10, 1, 17, WOOD_D); rect(c, 12, 10, 1, 17, WOOD_D); rect(c, 7, 6, 2, 20, WOOD_D);
    box(c, 2, 2, 12, 14, '#fbf8f0', '#8a5a34');
    rect(c, 4, 4, 8, 4, '#8fd0f2'); rect(c, 4, 8, 8, 6, '#7dcc72'); rect(c, 8, 5, 3, 3, '#f2c94c');
    rect(c, 2, 16, 12, 2, WOOD);
  }],
  paintShelf: [32, 30, (c) => {
    box(c, 1, 1, 30, 28, '#e3d3b8', '#8a7a5a');
    for (let s = 0; s < 3; s++) {
      rect(c, 3, 3 + s * 9, 26, 7, '#c9b594');
      for (let j = 0; j < 5; j++) { const col = ['#e86a6a', '#5aa6e0', '#f2c94c', '#7dcc72', '#b77fe0'][(j + s) % 5]; rect(c, 4 + j * 5, 5 + s * 9, 4, 5, col); rect(c, 5 + j * 5, 4 + s * 9, 2, 1, '#fbf8f0'); }
    }
  }],
  longTable: [64, 18, (c) => {
    rect(c, 3, 12, 2, 5, '#6b6b78'); rect(c, 59, 12, 2, 5, '#6b6b78');
    box(c, 1, 2, 62, 11, '#eef0f4', '#9aa0ac'); rect(c, 2, 11, 60, 2, '#c6cad3');
    for (let i = 0; i < 4; i++) {
      rect(c, 4 + i * 15, 4, 9, 6, '#f2c94c'); rect(c, 5 + i * 15, 5, 3, 2, ['#e86a6a', '#7dcc72', '#e9a24b', '#e86a6a'][i]);
      rect(c, 9 + i * 15, 5, 3, 3, '#fbf8f0');
    }
  }],
  counter: [160, 30, (c) => {
    box(c, 1, 12, 158, 17, '#c3c8d2', '#7f8795'); rect(c, 2, 13, 156, 4, '#e3e7ee');
    for (let i = 0; i < 9; i++) { rect(c, 6 + i * 17, 19, 12, 8, '#aab1be'); rect(c, 7 + i * 17, 20, 10, 1, '#d5d9e1'); }
    // sneeze guard + food pans
    rect(c, 3, 3, 154, 1, '#bfe6f5'); rect(c, 3, 4, 154, 6, 'rgba(191,230,245,0.45)');
    const food = ['#e8a24b', '#e86a6a', '#7dcc72', '#f2d46b', '#c9855a', '#f6efe0', '#7dcc72', '#e86a6a'];
    for (let i = 0; i < 8; i++) { rect(c, 6 + i * 19, 7, 15, 5, '#8e95a2'); rect(c, 7 + i * 19, 8, 13, 3, food[i]); px(c, 9 + i * 19, 8, shade(food[i], 0.4)); }
    for (let i = 0; i < 6; i++) rect(c, 3 + i * 31, 2, 1, 10, '#9aa1ad');
  }],
  stove: [16, 22, (c) => {
    box(c, 1, 4, 14, 17, '#d8dce4', '#7f8795'); rect(c, 2, 5, 12, 4, '#3b3f4a');
    px(c, 4, 6, '#e86a3b'); px(c, 10, 6, '#e86a3b'); px(c, 5, 7, '#e86a3b'); px(c, 11, 7, '#e86a3b');
    rect(c, 3, 11, 10, 7, '#3b3f4a'); rect(c, 4, 12, 8, 1, '#666c7a'); rect(c, 3, 2, 6, 3, '#9aa1ad');
  }],
  fridge: [16, 32, (c) => {
    box(c, 1, 1, 14, 30, '#eef1f5', '#8e95a2'); rect(c, 2, 12, 12, 1, '#8e95a2');
    rect(c, 12, 4, 1, 5, '#9aa1ad'); rect(c, 12, 15, 1, 8, '#9aa1ad');
    rect(c, 4, 4, 3, 3, '#f2c94c'); rect(c, 5, 16, 4, 3, '#8cc7f2');
  }],
  kitchenSink: [16, 20, (c) => {
    box(c, 1, 5, 14, 14, '#c3c8d2', '#7f8795'); rect(c, 3, 6, 10, 4, '#8e95a2');
    rect(c, 7, 1, 2, 5, '#9aa1ad'); rect(c, 7, 1, 4, 1, '#9aa1ad');
  }],
  prep: [32, 20, (c) => {
    box(c, 1, 5, 30, 14, '#c3c8d2', '#7f8795'); rect(c, 2, 6, 28, 3, '#e3e7ee');
    rect(c, 4, 3, 8, 4, '#c9855a'); rect(c, 15, 2, 6, 5, '#e86a6a'); rect(c, 24, 3, 5, 3, '#7dcc72');
  }],
  vending: [16, 32, (c) => {
    box(c, 1, 1, 14, 30, '#d9534f', '#8a2f2c'); rect(c, 3, 4, 8, 17, '#2d2a33');
    for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) rect(c, 4 + k * 2 + (k > 0 ? k - 1 : 0), 5 + r * 4, 2, 2, ['#f2c94c', '#7dcc72', '#8cc7f2', '#f28c8c'][(r + k) % 4]);
    rect(c, 12, 6, 2, 6, '#f2f2f2'); rect(c, 3, 24, 8, 3, '#2d2a33');
  }],
  vendingBlue: [16, 32, (c) => {
    box(c, 1, 1, 14, 30, '#4f78b8', '#2c4570'); rect(c, 3, 4, 8, 17, '#1f2a3d');
    for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) rect(c, 4 + k * 2 + (k > 0 ? k - 1 : 0), 5 + r * 4, 2, 3, ['#f2a14b', '#9fe0a5', '#f28cc4'][k]);
    rect(c, 12, 6, 2, 6, '#f2f2f2'); rect(c, 3, 24, 8, 3, '#1f2a3d');
  }],
  trash: [16, 16, (c) => { box(c, 3, 3, 10, 12, '#4a9a6b', '#2d6445'); rect(c, 2, 2, 12, 2, '#5cb07f'); rect(c, 6, 7, 4, 4, '#d8f0e2'); }],
  plant: [16, 28, (c) => {
    box(c, 4, 19, 8, 8, '#c86a44', '#8a4428'); rect(c, 4, 19, 8, 2, '#dd8157');
    const g = ['#3f9e57', '#57b86b', '#2f7f45'];
    const leaf = (x: number, y: number, w: number, h: number, i: number) => rect(c, x, y, w, h, g[i % 3]);
    leaf(6, 3, 4, 17, 0); leaf(2, 8, 5, 4, 1); leaf(9, 6, 5, 4, 1); leaf(1, 13, 5, 3, 2); leaf(10, 11, 5, 4, 2); leaf(5, 1, 3, 4, 1); leaf(3, 16, 4, 3, 0); leaf(9, 15, 4, 3, 1);
    px(c, 7, 5, '#8fd69b'); px(c, 3, 9, '#8fd69b'); px(c, 11, 7, '#8fd69b');
  }],
  globe: [16, 22, (c) => {
    rect(c, 7, 14, 2, 6, WOOD_D); rect(c, 4, 19, 8, 2, WOOD_D);
    rect(c, 4, 3, 8, 10, '#5aa6e0'); rect(c, 3, 5, 10, 6, '#5aa6e0');
    rect(c, 5, 5, 3, 3, '#7dcc72'); rect(c, 9, 8, 3, 3, '#7dcc72'); px(c, 5, 4, '#bfe3ff');
    rect(c, 12, 4, 1, 10, '#c9a24b');
  }],
  skeleton: [16, 30, (c) => {
    const b = '#f4f0e2';
    rect(c, 5, 1, 6, 6, b); px(c, 6, 3, '#333'); px(c, 9, 3, '#333'); rect(c, 7, 5, 2, 1, '#999');
    rect(c, 7, 7, 2, 12, b); for (let i = 0; i < 4; i++) rect(c, 4, 9 + i * 2, 8, 1, b);
    rect(c, 3, 9, 1, 8, b); rect(c, 12, 9, 1, 8, b); rect(c, 5, 18, 6, 2, b); rect(c, 5, 20, 1, 6, b); rect(c, 10, 20, 1, 6, b);
    rect(c, 7, 26, 2, 3, '#7a7a8c'); rect(c, 4, 28, 8, 1, '#7a7a8c');
  }],
  labShelf: [32, 30, (c) => {
    box(c, 1, 1, 30, 28, '#e8eef2', '#7a8894');
    for (let s = 0; s < 3; s++) {
      rect(c, 2, 9 + s * 9, 28, 1, '#7a8894');
      for (let j = 0; j < 5; j++) { const col = ['#6cdf8a', '#f0c24b', '#e86aa8', '#5ab4f0', '#b77fe0'][(j + s * 2) % 5]; rect(c, 4 + j * 5, 4 + s * 9, 3, 5, '#dff4fb'); rect(c, 4 + j * 5, 6 + s * 9, 3, 3, col); }
    }
  }],
  labSink: [16, 22, (c) => { box(c, 1, 7, 14, 14, '#4b5566', '#2e3440'); rect(c, 3, 8, 10, 4, '#9aa1ad'); rect(c, 7, 2, 2, 6, '#c3c8d2'); rect(c, 7, 2, 5, 1, '#c3c8d2'); }],
  waterFountain: [16, 20, (c) => { box(c, 2, 4, 12, 9, '#c3c8d2', '#7f8795'); rect(c, 4, 5, 8, 4, '#8cc7f2'); rect(c, 6, 13, 4, 6, '#9aa1ad'); px(c, 8, 3, '#8cc7f2'); }],
  trophyCase: [32, 32, (c) => {
    box(c, 1, 1, 30, 30, '#9a6236', '#5e3a22'); rect(c, 3, 3, 26, 24, '#cfeaf5');
    rect(c, 3, 14, 26, 1, '#9a6236');
    const cup = (x: number, y: number, col: string) => { rect(c, x, y, 5, 4, col); rect(c, x + 2, y + 4, 1, 2, col); rect(c, x + 1, y + 6, 3, 1, col); px(c, x - 1, y + 1, col); px(c, x + 5, y + 1, col); };
    cup(6, 5, '#f2c94c'); cup(14, 4, '#d8dce4'); cup(22, 6, '#d99a5b'); cup(8, 17, '#f2c94c'); cup(18, 18, '#f2c94c');
    px(c, 5, 4, '#ffffff'); px(c, 5, 5, '#ffffff');
  }],
  officeDesk: [64, 24, (c) => {
    box(c, 1, 8, 62, 15, '#7c8fb0', '#475674'); rect(c, 2, 9, 60, 5, '#9aaccc');
    box(c, 8, 1, 12, 9, '#3a3f4f', '#23262f'); rect(c, 9, 2, 10, 6, '#7fd0f0');
    rect(c, 26, 6, 10, 4, '#fbf8f0'); rect(c, 40, 5, 6, 5, '#f28c8c'); rect(c, 50, 4, 4, 6, '#57b86b'); rect(c, 49, 8, 6, 2, '#c86a44');
    rect(c, 4, 16, 56, 1, '#5d6f92');
  }],
  mapBoard: [32, 30, (c) => {
    rect(c, 6, 20, 2, 9, '#6b6b78'); rect(c, 24, 20, 2, 9, '#6b6b78');
    box(c, 1, 1, 30, 20, '#fbf8f0', '#3d6fb0');
    rect(c, 4, 4, 8, 6, '#f2d49b'); rect(c, 13, 4, 7, 6, '#b9d3b0'); rect(c, 21, 4, 7, 6, '#f4c2b0'); rect(c, 4, 11, 24, 2, '#efe3c4'); rect(c, 4, 14, 7, 5, '#cfe3b7'); rect(c, 12, 14, 8, 5, '#e9dcc9'); rect(c, 21, 14, 7, 5, '#d9dde8');
    rect(c, 15, 16, 2, 2, '#d9534f');
  }],
  stall: [32, 34, (c) => {
    box(c, 1, 1, 30, 32, '#7fc4bc', '#3f7f78'); rect(c, 15, 1, 2, 32, '#3f7f78');
    rect(c, 4, 6, 9, 22, '#95d3cb'); rect(c, 19, 6, 9, 22, '#95d3cb');
    rect(c, 11, 16, 1, 3, '#3f7f78'); rect(c, 26, 16, 1, 3, '#3f7f78');
    rect(c, 7, 9, 3, 2, '#5bbf6b'); rect(c, 22, 9, 3, 2, '#d9534f');
  }],
  bathSink: [16, 18, (c) => { box(c, 1, 6, 14, 8, '#f4f6f8', '#8e95a2'); rect(c, 4, 7, 8, 3, '#bfe3ef'); rect(c, 7, 2, 2, 5, '#c3c8d2'); rect(c, 6, 14, 4, 3, '#c3c8d2'); }],
  piano: [32, 30, (c) => {
    box(c, 1, 1, 30, 20, '#2a2530', '#141118'); rect(c, 3, 3, 26, 3, '#3d3645');
    rect(c, 2, 14, 28, 6, '#f6f3ea'); for (let i = 0; i < 9; i++) rect(c, 4 + i * 3, 14, 1, 6, '#bbb5c4');
    for (let i = 0; i < 8; i++) if (i % 3 !== 2) rect(c, 5 + i * 3, 14, 2, 3, '#141118');
    rect(c, 3, 21, 2, 8, '#141118'); rect(c, 27, 21, 2, 8, '#141118');
    rect(c, 12, 5, 8, 6, '#fbf8f0'); rect(c, 13, 7, 6, 1, '#999'); rect(c, 13, 9, 6, 1, '#999');
  }],
  drums: [32, 26, (c) => {
    const drum = (x: number, y: number, w: number, h: number, col: string) => { rect(c, x, y, w, h, col); rect(c, x, y, w, 2, '#f4f0e2'); rect(c, x, y + h - 1, w, 1, shade(col, -0.4)); };
    drum(9, 11, 14, 13, '#c0504d'); drum(2, 12, 7, 8, '#c0504d'); drum(23, 12, 7, 8, '#c0504d');
    rect(c, 3, 3, 8, 2, '#f2c94c'); rect(c, 6, 5, 1, 8, '#9aa1ad'); rect(c, 22, 5, 8, 2, '#f2c94c'); rect(c, 25, 7, 1, 6, '#9aa1ad');
    rect(c, 14, 15, 4, 4, '#f4f0e2');
  }],
  musicStand: [16, 22, (c) => { rect(c, 7, 9, 2, 12, '#3d3d48'); rect(c, 4, 20, 8, 1, '#3d3d48'); box(c, 2, 2, 12, 9, '#fbf8f0', '#3d3d48'); rect(c, 4, 5, 8, 1, '#999'); rect(c, 4, 7, 8, 1, '#999'); }],
  hoop: [32, 44, (c) => {
    rect(c, 15, 16, 3, 27, '#4a4a58');
    box(c, 3, 1, 26, 17, '#fbfbff', '#4a4a58'); box(c, 11, 6, 10, 8, '#fbfbff', '#e2544a');
    rect(c, 10, 18, 12, 2, '#e2544a');
    for (let i = 0; i < 5; i++) rect(c, 11 + i * 2, 20, 1, 5, '#f4f0e2');
    rect(c, 12, 24, 8, 1, '#f4f0e2');
  }],
  ballRack: [32, 22, (c) => {
    box(c, 1, 8, 30, 13, '#9aa1ad', '#4a4a58');
    for (let i = 0; i < 4; i++) { rect(c, 3 + i * 7, 2, 6, 6, '#e8762c'); rect(c, 3 + i * 7, 4, 6, 1, '#7a3a14'); rect(c, 5 + i * 7, 2, 1, 6, '#7a3a14'); }
    for (let i = 0; i < 4; i++) { rect(c, 3 + i * 7, 10, 6, 6, i % 2 ? '#f4f0e2' : '#e8762c'); }
  }],
  bleachers: [32, 146, (c) => {
    box(c, 1, 1, 30, 144, '#8f97a8', '#4a5060');
    for (let y = 4; y < 142; y += 8) { rect(c, 3, y, 26, 5, '#b7703f'); rect(c, 3, y, 26, 1, '#d19060'); }
    for (let x = 6; x < 30; x += 10) rect(c, x, 2, 1, 142, '#5d6475');
  }],
  bench: [32, 16, (c) => { rect(c, 1, 5, 30, 6, WOOD); rect(c, 1, 5, 30, 1, WOOD_L); rect(c, 3, 11, 2, 4, '#4a4a58'); rect(c, 27, 11, 2, 4, '#4a4a58'); }],
  benchOut: [32, 18, (c) => {
    rect(c, 1, 1, 30, 4, '#9a6236'); rect(c, 1, 6, 30, 5, '#b7703f'); rect(c, 1, 6, 30, 1, '#d19060');
    rect(c, 3, 11, 2, 6, '#3d3d48'); rect(c, 27, 11, 2, 6, '#3d3d48'); rect(c, 3, 3, 2, 3, '#3d3d48'); rect(c, 27, 3, 2, 3, '#3d3d48');
  }],
  tree: [34, 48, (c) => {
    rect(c, 14, 30, 6, 17, '#7a4b2a'); rect(c, 15, 30, 2, 17, '#915c35'); rect(c, 12, 45, 10, 2, '#7a4b2a');
    const g1 = '#3f9e57', g2 = '#57b86b', g3 = '#2f7f45', g4 = '#78cc84';
    const blob = (x: number, y: number, r: number, col: string) => { for (let yy = -r; yy <= r; yy++) { const w = Math.round(Math.sqrt(r * r - yy * yy)); rect(c, x - w, y + yy, w * 2, 1, col); } };
    blob(17, 22, 12, g3); blob(10, 18, 8, g1); blob(24, 18, 8, g1); blob(17, 12, 10, g1); blob(14, 10, 6, g2); blob(22, 16, 5, g2); blob(12, 20, 4, g2); blob(13, 8, 3, g4); blob(21, 13, 2, g4);
  }],
  bush: [16, 16, (c) => {
    const blob = (x: number, y: number, r: number, col: string) => { for (let yy = -r; yy <= r; yy++) { const w = Math.round(Math.sqrt(r * r - yy * yy)); rect(c, x - w, y + yy, w * 2, 1, col); } };
    blob(8, 9, 6, '#2f7f45'); blob(6, 8, 4, '#3f9e57'); blob(10, 7, 3, '#57b86b'); px(c, 5, 6, '#e86a8a'); px(c, 11, 10, '#e86a8a');
  }],
  parkFountain: [48, 38, (c) => {
    box(c, 2, 12, 44, 24, '#b9bcc8', '#6b6f7d'); rect(c, 5, 15, 38, 16, '#6fbde8'); rect(c, 7, 17, 10, 2, '#a8dcf6'); rect(c, 28, 24, 8, 2, '#a8dcf6');
    box(c, 19, 6, 10, 16, '#c9ccd6', '#6b6f7d'); rect(c, 21, 2, 6, 5, '#8fd0f2'); rect(c, 18, 3, 3, 3, '#a8dcf6'); rect(c, 27, 3, 3, 3, '#a8dcf6');
    rect(c, 2, 33, 44, 3, '#9ea2af');
  }],
  flagpole: [16, 64, (c) => {
    rect(c, 7, 2, 2, 60, '#c3c8d2'); rect(c, 5, 60, 6, 3, '#6b6f7d'); rect(c, 6, 1, 4, 2, '#f2c94c');
    rect(c, 9, 4, 6, 10, '#3d6fb0'); rect(c, 9, 4, 6, 1, '#6d9ad8'); rect(c, 11, 7, 2, 3, '#f2c94c');
  }],
  schoolSign: [48, 30, (c) => {
    rect(c, 5, 20, 3, 9, '#6b6b78'); rect(c, 40, 20, 3, 9, '#6b6b78');
    box(c, 1, 1, 46, 21, '#2f5f9e', '#1c3a63'); rect(c, 3, 3, 42, 1, '#5b8fd6');
    pixelTextCentered(c, 'MAPLE GROVE', 24, 6, '#ffffff'); pixelTextCentered(c, 'SCHOOL', 24, 13, '#f2c94c');
    rect(c, 1, 26, 46, 3, '#57b86b'); px(c, 10, 25, '#f7a8c4'); px(c, 36, 25, '#fff4b8');
  }],
  bikeRack: [32, 18, (c) => {
    rect(c, 2, 14, 28, 2, '#6b6f7d');
    for (let i = 0; i < 3; i++) { const x = 3 + i * 9; rect(c, x, 5, 6, 1, '#6b6f7d'); rect(c, x, 5, 1, 9, '#6b6f7d'); rect(c, x + 5, 5, 1, 9, '#6b6f7d'); }
    const wheel = (x: number, y: number, col: string) => { rect(c, x, y, 5, 1, col); rect(c, x, y + 4, 5, 1, col); rect(c, x - 1, y + 1, 1, 3, col); rect(c, x + 5, y + 1, 1, 3, col); };
    wheel(3, 8, '#2d2a33'); wheel(12, 8, '#2d2a33'); rect(c, 6, 7, 8, 1, '#d9534f'); rect(c, 9, 5, 1, 3, '#d9534f');
  }],
  busStop: [16, 34, (c) => { rect(c, 7, 10, 2, 23, '#8e95a2'); box(c, 2, 1, 12, 11, '#f2c94c', '#8a6d14'); rect(c, 4, 4, 8, 4, '#2d2a33'); rect(c, 5, 5, 2, 2, '#f2c94c'); rect(c, 9, 5, 2, 2, '#f2c94c'); }],
  marker: [16, 16, () => {}],
  // Dynamic props
  bus: [104, 46, (c) => {
    box(c, 1, 6, 100, 34, '#f2c230', '#8a6d14'); rect(c, 2, 7, 98, 3, '#f7d766');
    rect(c, 1, 26, 100, 3, '#2d2a33');
    for (let i = 0; i < 7; i++) { box(c, 6 + i * 12, 11, 10, 11, '#9fd4f0', '#5d6b7a'); px(c, 8 + i * 12, 13, '#ffffff'); }
    box(c, 90, 11, 9, 13, '#9fd4f0', '#5d6b7a');
    pixelTextCentered(c, 'SCHOOL BUS', 50, 31, '#2d2a33');
    rect(c, 98, 30, 3, 4, '#fff4b8'); rect(c, 1, 30, 2, 4, '#e2544a');
    const wheel = (x: number) => { rect(c, x, 36, 12, 9, '#2d2a33'); rect(c, x + 3, 38, 6, 5, '#8e95a2'); };
    wheel(12); wheel(76);
  }],
};

// Emote bubbles shown over characters
const EMOTES: Record<string, Draw> = {
  heart: (c) => { rect(c, 2, 3, 2, 3, '#e2445c'); rect(c, 5, 3, 2, 3, '#e2445c'); rect(c, 1, 4, 7, 2, '#e2445c'); rect(c, 2, 6, 5, 1, '#e2445c'); rect(c, 3, 7, 3, 1, '#e2445c'); px(c, 4, 8, '#e2445c'); px(c, 2, 4, '#ff9aa8'); },
  talk: (c) => { rect(c, 2, 5, 1, 1, '#3b3140'); rect(c, 4, 5, 1, 1, '#3b3140'); rect(c, 6, 5, 1, 1, '#3b3140'); },
  note: (c) => { rect(c, 5, 1, 1, 6, '#6b4fa0'); rect(c, 5, 1, 3, 1, '#6b4fa0'); rect(c, 7, 2, 1, 1, '#6b4fa0'); rect(c, 3, 6, 3, 2, '#6b4fa0'); },
  alert: (c) => { rect(c, 4, 1, 2, 5, '#e2544a'); rect(c, 4, 7, 2, 2, '#e2544a'); },
  question: (c) => { rect(c, 3, 1, 4, 1, '#3d6fb0'); px(c, 7, 2, '#3d6fb0'); px(c, 7, 3, '#3d6fb0'); rect(c, 5, 4, 2, 1, '#3d6fb0'); rect(c, 5, 5, 1, 1, '#3d6fb0'); rect(c, 5, 7, 1, 1, '#3d6fb0'); px(c, 2, 2, '#3d6fb0'); },
  sleep: (c) => { rect(c, 2, 2, 4, 1, '#5b6fb0'); px(c, 4, 3, '#5b6fb0'); px(c, 3, 4, '#5b6fb0'); rect(c, 2, 5, 4, 1, '#5b6fb0'); rect(c, 6, 5, 2, 1, '#8b9fd0'); px(c, 7, 6, '#8b9fd0'); rect(c, 6, 7, 2, 1, '#8b9fd0'); },
  idea: (c) => { rect(c, 3, 1, 4, 5, '#f2c94c'); rect(c, 2, 2, 6, 3, '#f2c94c'); rect(c, 4, 6, 2, 2, '#9aa1ad'); px(c, 3, 2, '#fff4b8'); },
  food: (c) => { rect(c, 2, 3, 6, 4, '#e8a24b'); rect(c, 2, 3, 6, 1, '#f2d46b'); px(c, 3, 4, '#e2544a'); px(c, 6, 5, '#e2544a'); rect(c, 1, 7, 8, 1, '#c3c8d2'); },
  star: (c) => { px(c, 4, 1, '#f2c94c'); rect(c, 3, 2, 3, 2, '#f2c94c'); rect(c, 1, 4, 7, 1, '#f2c94c'); rect(c, 2, 5, 5, 1, '#f2c94c'); rect(c, 2, 6, 2, 2, '#f2c94c'); rect(c, 5, 6, 2, 2, '#f2c94c'); },
};

export function buildFurnitureTextures(): Record<string, HTMLCanvasElement> {
  const out: Record<string, HTMLCanvasElement> = {};
  for (const [key, [w, h, draw]] of Object.entries(FURNITURE)) {
    const [c, ctx] = makeCanvas(w, h);
    draw(ctx, w, h);
    if (key !== 'marker' && !key.startsWith('chair') && key !== 'stool') outline(c, '#2b2033');
    out[key] = c;
  }
  for (const [key, draw] of Object.entries(EMOTES)) {
    const [c, ctx] = makeCanvas(14, 15);
    // bubble
    rect(ctx, 1, 0, 11, 11, '#ffffff'); rect(ctx, 0, 1, 13, 9, '#ffffff'); rect(ctx, 5, 11, 3, 2, '#ffffff'); px(ctx, 6, 13, '#ffffff');
    const [ic, ictx] = makeCanvas(10, 10);
    draw(ictx, 10, 10);
    ctx.drawImage(ic, 2, 1);
    outline(c, '#2b2033');
    out['emote_' + key] = c;
  }
  // Small helpers: shadow, target arrow, seat marker
  {
    const [c, ctx] = makeCanvas(12, 5);
    ctx.fillStyle = 'rgba(30,15,40,0.28)';
    ctx.fillRect(2, 0, 8, 5); ctx.fillRect(0, 1, 12, 3);
    out.shadow = c;
  }
  {
    const [c, ctx] = makeCanvas(13, 13);
    const col = '#ffd84d';
    for (let i = 0; i < 6; i++) rect(ctx, 6 - i, 1 + i, 1 + i * 2, 1, col);
    rect(ctx, 4, 7, 5, 5, col);
    outline(c, '#2b2033');
    out.arrow = c;
  }
  {
    const [c, ctx] = makeCanvas(16, 16);
    ctx.strokeStyle = '#ffd84d'; ctx.lineWidth = 1;
    rect(ctx, 1, 1, 4, 1, '#ffd84d'); rect(ctx, 1, 1, 1, 4, '#ffd84d');
    rect(ctx, 11, 1, 4, 1, '#ffd84d'); rect(ctx, 14, 1, 1, 4, '#ffd84d');
    rect(ctx, 1, 14, 4, 1, '#ffd84d'); rect(ctx, 1, 11, 1, 4, '#ffd84d');
    rect(ctx, 11, 14, 4, 1, '#ffd84d'); rect(ctx, 14, 11, 1, 4, '#ffd84d');
    out.seatMark = c;
  }
  return out;
}
