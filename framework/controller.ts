import { events } from './events';
import { Sprite } from './types';

const controller = {
  moveSprite: (sprite: Sprite) => {
    events.onPressed.W.down = () => {
      sprite.tox = 0;
      sprite.toy = -1;
    };
    events.onPressed.S.down = () => {
      sprite.tox = 0;
      sprite.toy = 1;
    };
    events.onPressed.A.down = () => {
      sprite.tox = -1;
      sprite.toy = 0;
    };
    events.onPressed.D.down = () => {
      sprite.tox = 1;
      sprite.toy = 0;
    };

    events.onPressed.W.up = () => {
      sprite.toy = 0;
    };
    events.onPressed.S.up = () => {
      sprite.toy = 0;
    };
    events.onPressed.A.up = () => {
      sprite.tox = 0;
    };
    events.onPressed.D.up = () => {
      sprite.tox = 0;
    };
  },
  Space: {
    isPressed: () => {},
    onPressed: (cb: () => void) => {
      events.onPressed.Space = cb;
    },
  },
  R: {
    isPressed: () => {},
    onPressed: (cb: () => void) => {
      events.onPressed.R = cb;
    },
  },
  J: {
    isPressed: () => {},
    onPressed: (cb: () => void) => {
      events.onPressed.J = cb;
    },
  },
  P: {
    isPressed: () => {},
    onPressed: (cb: () => void) => {
      events.onPressed.P = cb;
    },
  },
};

export { controller };
