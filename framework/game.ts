import { events } from './events';
import { sprites } from './sprites';
import { store } from './store';
import { GameStatus, SpriteKind } from './types';

const game = {
  over: () => {
    store.gameStatus = GameStatus.gameover;
  },
  pause: () => {
    if (store.gameStatus === GameStatus.playing) {
      store.gameStatus = GameStatus.paused;
    } else if (store.gameStatus === GameStatus.paused) {
      store.gameStatus = GameStatus.playing;
    }
  },
  onUpdateInterval: (time: number, cb: () => void) => {
    events.onTimes.push({
      time: time,
      event: cb,
    });
  },
  restart: () => {
    store.score.current = 0;
    const player = store.sprites.filter(
      (sprite) => sprite.kind === SpriteKind.player
    )[0];

    store.sprites.splice(0);
    store.sprites.push(player);
    store.gameStatus = GameStatus.playing;
  },
  start: (screen) => {
    let time = 0;
    store.gameStatus = GameStatus.playing;
    const loop = () => {
      time += 1;
      screen.clear();

      if (store.gameStatus === GameStatus.playing) {
        store.sprites.forEach((sprite) => {
          sprite.update(sprite);
          sprite.x += sprite.tox;
          sprite.y += sprite.toy;
        });

        sprites.checkCollision();

        events.onTimes.forEach((te) => {
          if (time % te.time == 0) {
            te.event();
          }
        });

        events.onScores.forEach((se) => {
          if (store.score.current == se.score) {
            se.event();
          }
        });
      }

      screen.render();

      if (store.gameStatus === GameStatus.paused) {
        store.ctx.fillStyle = '#f00';
        store.ctx.font = '50px serif';
        store.ctx.fillText(`PAUSE`, 80, 170);
      }

      if (store.gameStatus === GameStatus.gameover) {
        store.ctx.fillStyle = '#f00';
        store.ctx.font = '40px serif';
        store.ctx.fillText(`GAMEOVER`, 40, 170);
      }

      window.requestAnimationFrame(loop);
    };
    loop();
  },
};

export { game };
