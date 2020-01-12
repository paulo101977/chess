/*
 * A free and open source chess game using AssemblyScript and React
 * Copyright (C) 2019 mhonert (https://github.com/mhonert)
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

import { toInt32Array } from './util';

export const PAWN: i32 = 1;
export const KNIGHT: i32 = 2;
export const BISHOP: i32 = 3;
export const ROOK: i32 = 4;
export const QUEEN: i32 = 5;
export const KING: i32 = 6;

// Pieces start with index 1 (see constants above)
export const PIECE_VALUES: Array<i32> = [0, 1, 3, 3, 5, 9, 10];

export const pieces: Array<i32> = [PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING];

export const P = PAWN;
export const N = KNIGHT;
export const B = BISHOP;
export const R = ROOK;
export const Q = QUEEN;
export const K = KING;

export const KNIGHT_DIRECTIONS: Int32Array = toInt32Array([21, 19, 12, 8, -12, -21, -19, -8]);
export const KING_DIRECTIONS: Int32Array = toInt32Array([1, 10, -1, -10, 9, 11, -9, -11]);
