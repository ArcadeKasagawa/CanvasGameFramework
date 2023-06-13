import { X } from './colorPalettes';
import { controller } from './controller';
import { events } from './events';
import { game } from './game';
import { sprites } from './sprites';
import { store } from './store';
import { GameStatus, Sprite } from './types';
import { screen } from './screen';

const init = (width: number, height: number, id: string) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  document.getElementById(id).appendChild(canvas);
  store.ctx = canvas.getContext('2d');
  store.width = width;
  store.height = height;
  screen.clear();

  document.removeEventListener('keydown', () => {});
  document.removeEventListener('keyup', () => {});
  document.addEventListener('keydown', ({ code }: KeyboardEvent) => {
    switch (code) {
      case 'KeyW':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.W.down();
        }
        break;
      case 'KeyS':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.S.down();
        }
        break;
      case 'KeyA':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.A.down();
        }
        break;
      case 'KeyD':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.D.down();
        }
        break;
      case 'Space':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.Space();
        }
        break;
      case 'KeyJ':
        if (store.gameStatus === GameStatus.playing) {
          events.onPressed.J();
        }
        break;
      case 'KeyP':
        events.onPressed.P();
        break;
      case 'KeyR':
        events.onPressed.R();
        break;
    }
  });
  document.addEventListener('keyup', ({ code }: KeyboardEvent) => {
    switch (code) {
      case 'KeyW':
        events.onPressed.W.up();
        break;
      case 'KeyS':
        events.onPressed.S.up();
        break;
      case 'KeyA':
        events.onPressed.A.up();
        break;
      case 'KeyD':
        events.onPressed.D.up();
        break;
    }
  });

  // screen.showframeworkinfo();
};

const info = {
  onScore: (score: number, cb: () => void) => {
    events.onScores.push({
      score: score,
      event: cb,
    });
  },
  getGamestatus: () => {
    return store.gameStatus;
  },
  getScore: () => {
    return store.score;
  },
  changeScoreBy: (value: number) => {
    store.score.current += value;
    if (store.score.current > store.score.high) {
      store.score.high = store.score.current;
    }
  },
};

export { game, init, screen, sprites, info, controller };
