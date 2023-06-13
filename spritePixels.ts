import {
  X,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
} from './framework/colorPalettes';
const player = [
  [X, X, X, N, N, N, N, N, N, X, X, X, X, X],
  [X, X, N, N, N, N, N, N, N, N, N, N, X, X],
  [X, X, A, A, A, A, L, L, A, L, X, X, X, X],
  [X, A, A, L, A, L, L, L, A, L, L, L, X, X],
  [X, A, A, L, A, A, L, L, L, A, L, L, L, X],
  [X, A, A, A, L, L, L, L, A, A, A, A, X, X],
  [X, X, X, L, L, L, L, L, L, L, L, X, X, X],
  [X, X, A, A, A, A, N, A, A, A, X, X, X, X],
  [X, A, A, A, A, A, N, A, A, N, A, A, A, X],
  [A, A, A, A, A, A, N, N, N, N, A, A, A, A],
  [L, L, L, L, A, N, L, N, N, L, N, A, L, L],
  [L, L, L, L, L, N, N, N, N, N, N, L, L, L],
  [L, L, L, L, N, N, N, N, N, N, N, N, L, L],
  [X, X, N, N, N, N, N, X, N, N, N, N, X, X],
  [X, A, A, A, A, X, X, X, X, A, A, A, A, X],
  [A, A, A, A, A, X, X, X, X, A, A, A, A, A],
];

const duck = [
  [X, X, X, A, A, A, A, X, X, X, X, X, X, X],
  [X, X, A, A, X, X, A, A, X, X, X, X, X, X],
  [X, X, A, X, X, X, X, A, X, X, X, X, X, X],
  [X, X, A, X, X, X, X, A, X, X, X, X, X, X],
  [A, A, A, A, X, A, X, A, X, X, X, X, X, X],
  [A, L, L, L, L, L, X, A, X, X, X, X, X, X],
  [A, A, L, L, L, L, X, A, A, A, A, A, X, X],
  [X, A, A, X, X, X, X, X, X, X, X, X, A, X],
  [X, X, A, X, X, X, X, X, X, X, X, X, X, A],
  [X, X, A, X, X, X, X, X, X, X, X, X, X, A],
  [X, X, A, X, X, X, X, X, X, X, X, X, A, X],
  [X, X, X, A, X, X, X, X, X, X, X, A, X, X],
  [X, X, X, X, A, A, L, A, L, A, A, X, X, X],
  [X, X, X, X, X, X, L, X, L, X, X, X, X, X],
];

const bullet = [
  [H, H],
  [H, H],
];

export { player, duck, bullet };
