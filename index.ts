import * as spritePixel from './spritePixels';
import { SpriteKind, Sprite, GameStatus } from './framework/types';

import { game, init, screen, sprites, controller, info } from './framework';

import './style.css';

init(300, 300, 'app');

const player: Sprite = sprites.create(spritePixel.player, 1, SpriteKind.player);
player.setPosition(10, 150);
player.update = (self) => {
  if (self.x < 0) {
    self.tox = 0;
    self.x = 0;
  }
};

screen.addSprite(player);

controller.moveSprite(player); //bind wsad key to player

controller.Space.onPressed(() => {}); //space event

controller.J.onPressed(() => {
  //j event
  const bullet: Sprite = sprites.create(
    spritePixel.bullet,
    2,
    SpriteKind.bullet
  );
  bullet.setPosition(player.x + player.w, player.y + player.h / 2);
  bullet.tox = 2;
  screen.addSprite(bullet);
});

controller.R.onPressed(() => {
  if (info.getGamestatus() === GameStatus.gameover) {
    game.restart();
  }
});

controller.P.onPressed(() => {
  game.pause();
});

game.onUpdateInterval(20, () => {
  const enemy: Sprite = sprites.create(spritePixel.duck, 1, SpriteKind.enemy);
  enemy.setPosition(300, Math.floor(Math.random() * (300 - 0)) + 0);
  enemy.tox = -1;
  screen.addSprite(enemy);
});

sprites.onCollision((origin, target) => {
  if (origin.kind === SpriteKind.bullet && target.kind === SpriteKind.enemy) {
    sprites.destroy(origin);

    if (target.blood > 0) {
      target.blood -= 10;
    }

    if (target.blood <= 0) {
      target.life -= 1;
      target.blood = 100;
    }

    if (target.life <= 0) {
      target.life = 0;
      target.blood = 0;
      sprites.destroy(target);
      info.changeScoreBy(1);
    }
  }

  if (origin.kind === SpriteKind.player && target.kind === SpriteKind.enemy) {
    sprites.destroy(target);
    game.over();
  }
});

game.start(screen);
