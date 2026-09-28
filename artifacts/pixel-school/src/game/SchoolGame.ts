// Game bootstrap: mount the school simulator into any DOM element.
import Phaser from 'phaser';
import { SchoolScene } from './scenes/SchoolScene';

import { DPR } from './display';

export function createSchoolGame(parent: HTMLElement): Phaser.Game {
  if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
  parent.style.overflow = 'hidden';
  parent.style.touchAction = 'none';
  const cssW = () => parent.clientWidth || window.innerWidth;
  const cssH = () => parent.clientHeight || window.innerHeight;
  // Render at device resolution, display at CSS size: sharp tiles and smooth characters on phones.
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    backgroundColor: '#1d1a2b',
    pixelArt: true,
    roundPixels: false,
    scale: { mode: Phaser.Scale.NONE, width: Math.round(cssW() * DPR), height: Math.round(cssH() * DPR), zoom: 1 / DPR },
    input: { activePointers: 3 },
    scene: [SchoolScene],
    banner: false,
  });
  const onResize = () => {
    if (!game.isBooted || !game.canvas) return;
    game.scale.resize(Math.round(cssW() * DPR), Math.round(cssH() * DPR));
    game.scale.setZoom(1 / DPR);
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(parent);
  game.events.once('destroy', () => ro.disconnect());
  return game;
}
