/*
 * A free and open source chess game using AssemblyScript and React
 * Copyright (C) 2020 mhonert (https://github.com/mhonert)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import { rand64 } from './util';


// Random numbers to be used for calculating Zobrist hashes for board positions (see https://www.chessprogramming.org/Zobrist_Hashing):

// Note: the incremental calculation of the Zobrist hashes takes place in the Board class (see board.ts), so
// the unit tests for the hash calculation can be found in the board.spec.ts file
export const PIECE_RNG_NUMBERS: Uint64Array = randArray(13 * 64);
export const PLAYER_RNG_NUMBER = rand64();
export const EN_PASSANT_RNG_NUMBERS: Uint64Array = randArray(16);

// Optimization: setting the first element to 0 allows to remove some branching (xor with 0 does not change the hash)
export const CASTLING_RNG_NUMBERS: Uint64Array = firstElementZero(randArray(64));

function randArray(count: i32): Uint64Array {
  const numbers = new Uint64Array(count);

  for (let i = 0; i < count; i++) {
    numbers[i] = rand64();
  }

  return numbers;
}

function firstElementZero(elements: Uint64Array): Uint64Array {
  elements[0] = 0;
  return elements;
}
