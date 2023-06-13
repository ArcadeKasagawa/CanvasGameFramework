import { GameStatus, Sprite } from './types';

const store = {
  width: 0,
  height: 0,
  ctx: {} as CanvasRenderingContext2D,
  gameStatus: GameStatus.ready,
  score: {
    current: 0,
    high: 0,
  },
  sprites: [] as Sprite[],
};

export { store };
