import { events } from './events';
import { store } from './store';
import { Sprite, SpriteKind } from './types';

const sprites = {
  create: (image: string[][], scale: number, kind: SpriteKind) => {
    const sprite: Sprite = {
      kind: kind,
      x: 0,
      y: 0,
      tox: 0,
      toy: 0,
      w: image[0].length * scale,
      h: image.length * scale,
      blood: 100,
      life: 1,
      image: image,
      scale: scale,
      setPosition: function (x: number, y: number): void {
        sprite.x = x;
        sprite.y = y;
      },
      update: function (player: Sprite): void {},
      onCollision: function (self: Sprite, target: Sprite): void {},
    };

    return sprite;
  },
  checkCollision: () => {
    const check = (origin: Sprite, target: Sprite) => {
      if (
        origin.x < target.x + target.w &&
        origin.x + origin.w > target.x &&
        origin.y < target.y + target.h &&
        origin.h + origin.y > target.y
      ) {
        events.onCollision(origin, target);
      }
    };

    store.sprites
      .filter((sprite) => sprite.kind === SpriteKind.enemy)
      .forEach((enemy) => {
        store.sprites
          .filter(
            (sprite) =>
              sprite.kind === SpriteKind.bullet ||
              sprite.kind === SpriteKind.player
          )
          .forEach((sprite) => {
            check(sprite, enemy);
          });
      });
  },
  onCollision: (cb: (origin: Sprite, target: Sprite) => void) => {
    events.onCollision = cb;
  },
  destroy: (sprite: Sprite) => {
    store.sprites.forEach((one, index) => {
      if (one === sprite) {
        store.sprites.splice(index, 1);
      }
    });
  },
};

export { sprites };
