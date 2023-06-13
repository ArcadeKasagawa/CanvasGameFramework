import { info } from '.';
import { X } from './colorPalettes';
import { store } from './store';
import { Sprite, SpriteKind } from './types';

const screen = {
  clear: () => {
    store.ctx.clearRect(0, 0, store.width, store.height);
  },
  showframeworkinfo: () => {
    store.ctx.fillStyle = '#f00';
    store.ctx.fillRect(10, 10, 10, 10);
  },
  addSprite: (sprite: Sprite) => {
    store.sprites.push(sprite);
  },
  render: () => {
    store.sprites.forEach((sprite) => {
      const { x, y, image, scale } = sprite;
      image.forEach((line, yindex) => {
        line.forEach((p, xindex) => {
          if (p != X) {
            store.ctx.fillStyle = p;
            store.ctx.fillRect(
              x + xindex * scale,
              y + yindex * scale,
              1 * scale,
              1 * scale
            );
          }
        });
      });
      //
      if (sprite.kind != SpriteKind.bullet) {
        const { w, h, blood } = sprite;
        store.ctx.fillStyle = '#FF7F27';
        store.ctx.fillRect(x, y - 10, w + 4, 5);
        store.ctx.fillStyle = '#FFF';
        store.ctx.fillRect(x + 2, y - 8, w, 1);
        store.ctx.fillStyle = '#F00';
        store.ctx.fillRect(x + 2, y - 8, (blood / 100) * w, 1);
      }
      //
    });
    store.ctx.fillStyle = '#f00';
    store.ctx.font = '20px serif';
    store.ctx.fillText(`${info.getScore().current}`, 10, 25);
  },
};

export { screen };
