enum GameStatus {
  loading,
  ready,
  playing,
  paused,
  gameover,
}

enum SpriteKind {
  player,
  enemy,
  bullet,
  food,
}

interface Sprite {
  kind: SpriteKind;
  x: number;
  y: number;
  tox: number;
  toy: number;
  w: number;
  h: number;
  blood: number;
  life: number;
  image: string[][];
  scale: number;
  setPosition: (x: number, y: number) => void;
  update: (player: Sprite) => void;
  onCollision: (self: Sprite, target: Sprite) => void;
}

interface TimeEvent {
  time: number;
  event: () => void;
}

interface ScoreEvent {
  score: number;
  event: () => void;
}

export { GameStatus, SpriteKind, Sprite, TimeEvent, ScoreEvent };
