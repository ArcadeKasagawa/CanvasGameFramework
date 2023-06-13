import { ScoreEvent, Sprite, TimeEvent } from './types';

const events = {
  onScores: [] as ScoreEvent[],
  onTimes: [] as TimeEvent[],
  onPressed: {
    Space: () => {},
    R: () => {},
    J: () => {},
    P: () => {},
    A: {
      down: () => {},
      up: () => {},
    },
    D: {
      down: () => {},
      up: () => {},
    },
    W: {
      down: () => {},
      up: () => {},
    },
    S: {
      down: () => {},
      up: () => {},
    },
  },
  onCollision: (origin: Sprite, target: Sprite) => {},
};

export { events };
