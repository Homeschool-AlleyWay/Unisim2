// Game bootstrap: mount the school simulator into any DOM element.
import Phaser from 'phaser';
import { SchoolScene } from './scenes/SchoolScene';

export function createSchoolGame(parent: HTMLElement): Phaser.Game {
  parent.style.position = parent.style.position || 'relative';
  parent.style.overflow = 'hidden';
  parent.style.touchAction = 'none';
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    backgroundColor: '#1d1a2b',
    pixelArt: true,
    roundPixels: true,
    scale: { mode: Phaser.Scale.RESIZE, width: parent.clientWidth || window.innerWidth, height: parent.clientHeight || window.innerHeight },
    input: { activePointers: 3 },
    scene: [SchoolScene],
    banner: false,
    callbacks: { postBoot: (g) => { g.canvas.style.imageRendering = 'pixelated'; } },
  });
  return game;
}
