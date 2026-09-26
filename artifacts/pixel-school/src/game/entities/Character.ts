import Phaser from 'phaser';
import { DIRS, frameIndex, Pose } from '../art/characters';
import type { Dir, Seat } from '../data/furniture';
import { TILE } from '../data/schoolMap';

/** A walking, sitting, emoting pixel person. (x, y) is the point between their feet. */
export class Character {
  sprite: Phaser.GameObjects.Sprite;
  shadow: Phaser.GameObjects.Image;
  emote?: Phaser.GameObjects.Image;
  emoteUntil = 0;
  x: number;
  y: number;
  dir: Dir = 'down';
  pose: Pose = 'stand';
  seat: Seat | null = null;
  moving = false;
  private animT = 0;
  private stepPhase = 0;
  visible = true;

  constructor(public scene: Phaser.Scene, public texKey: string, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.shadow = scene.add.image(x, y, 'shadow').setOrigin(0.5, 0.6);
    this.sprite = scene.add.sprite(x, y, texKey, 0).setOrigin(0.5, 1);
    this.sync();
  }

  get tileX() { return Math.floor(this.x / TILE); }
  get tileY() { return Math.floor((this.y - 1) / TILE); }

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.sync();
  }

  face(d: Dir) { this.dir = d; }

  faceToward(x: number, y: number) {
    const dx = x - this.x, dy = y - this.y;
    this.dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'left' : 'right') : dy < 0 ? 'up' : 'down';
  }

  sitAt(seat: Seat) {
    this.seat = seat;
    this.moving = false;
    this.x = seat.tx * TILE + 8;
    this.y = seat.ty * TILE + 14;
    this.dir = seat.facing;
    this.pose = seat.kind === 'stand' || seat.kind === 'teacher' ? 'stand' : 'sit';
    this.sync();
  }

  standUp() {
    this.seat = null;
    this.pose = 'stand';
  }

  setVisible(v: boolean) {
    this.visible = v;
    this.sprite.setVisible(v);
    this.shadow.setVisible(v);
    if (!v && this.emote) this.emote.setVisible(false);
  }

  showEmote(kind: string, ms = 1800) {
    if (!this.visible) return;
    if (!this.emote) this.emote = this.scene.add.image(this.x, this.y, 'emote_' + kind).setOrigin(0.5, 1);
    this.emote.setTexture('emote_' + kind).setVisible(true).setAlpha(1);
    this.emoteUntil = this.scene.time.now + ms;
    this.sync();
  }

  /** Advance walk animation. Returns true when a footstep lands. */
  animate(dt: number, speedScale = 1): boolean {
    let stepped = false;
    if (this.moving) {
      this.animT += dt * speedScale;
      if (this.animT > 0.13) {
        this.animT = 0;
        this.stepPhase = (this.stepPhase + 1) % 4;
        stepped = this.stepPhase % 2 === 1;
      }
      this.pose = (['w1', 'stand', 'w2', 'stand'] as Pose[])[this.stepPhase];
    } else if (!this.seat) {
      this.pose = 'stand';
      this.stepPhase = 0;
    }
    this.sync();
    return stepped;
  }

  sync() {
    const idx = frameIndex(DIRS.includes(this.dir as any) ? (this.dir as any) : 'down', this.pose);
    this.sprite.setFrame(idx);
    this.sprite.setPosition(Math.round(this.x), Math.round(this.y) + 1);
    this.sprite.setDepth(this.y);
    this.shadow.setPosition(Math.round(this.x), Math.round(this.y) - 1);
    this.shadow.setDepth(2);
    this.shadow.setVisible(this.visible && this.pose !== 'sit');
    if (this.emote) {
      this.emote.setPosition(Math.round(this.x), Math.round(this.y) - 24 + (this.pose === 'sit' ? 3 : 0));
      this.emote.setDepth(10000 + this.y);
      if (this.scene.time.now > this.emoteUntil) this.emote.setVisible(false);
    }
  }

  destroy() {
    this.sprite.destroy();
    this.shadow.destroy();
    this.emote?.destroy();
  }
}
