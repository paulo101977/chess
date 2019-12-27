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

import {
  __,
  BLACK_KING_MOVED,
  BLACK_LEFT_ROOK_MOVED,
  BLACK_RIGHT_ROOK_MOVED,
  Board,
  WHITE_KING_MOVED,
  WHITE_LEFT_ROOK_MOVED, WHITE_RIGHT_ROOK_MOVED
} from '../board';
import { B, K, N, P, Q, R } from '../pieces';
import { toFEN } from '../fen';
import { encodeMove, performEncodedMove } from '../move-generation';

describe("FEN exporter", () => {

  it("writes FEN for starting position correctly", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P, -P, -P, -P, -P, -P, -P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, +P, +P, +P, +P, +P, +P, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, 0
    ]);

    expect(toFEN(board)).toBe("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

  });

  it("writes FEN for test position correctly", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R,  0,  0,  0, -K,  0,  0, -R, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __, +R,  0,  0,  0, +K,  0,  0, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, 0
    ]);

    expect(toFEN(board)).toBe("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
  });

  it("writes FEN for active player color correctly", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P, -P, -P, -P, -P, -P, -P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, +P, +P, +P, +P, +P, +P, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, 0
    ]);
    performEncodedMove(board, encodeMove(P, 84, 64));

    expect(toFEN(board)).toBe("rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1");
  });

  it("writes FEN for castling availability correctly if no castlings are possible", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R,  0,  0,  0,  0, -K,  0, -R, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __, +R,  0,  0,  0,  0, +K,  0, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, BLACK_KING_MOVED | WHITE_KING_MOVED
    ]);

    expect(toFEN(board)).toBe("r4k1r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R4K1R w - - 0 1");
  });

  it("writes FEN for castling availability correctly if only white castlings are possible", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R,  0,  0,  0,  0, -K,  0, -R, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __, +R,  0,  0,  0, +K,  0,  0, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, BLACK_KING_MOVED
    ]);

    expect(toFEN(board)).toBe("r4k1r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQ - 0 1");
  });

  it("writes FEN for castling availability correctly if only black castlings are possible", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R,  0,  0,  0, -K,  0,  0, -R, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __, +R,  0,  0,  0,  0, +K,  0, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, WHITE_KING_MOVED
    ]);

    expect(toFEN(board)).toBe("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R4K1R w kq - 0 1");
  });

  it("writes FEN for castling availability correctly if only king side castlings are possible", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __,  0, -R,  0,  0, -K,  0,  0, -R, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __,  0, +R,  0,  0, +K,  0,  0, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, BLACK_LEFT_ROOK_MOVED | WHITE_LEFT_ROOK_MOVED
    ]);

    expect(toFEN(board)).toBe("1r2k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/1R2K2R w Kk - 0 1");
  });

  it("writes FEN for castling availability correctly if only queen side castlings are possible", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R,  0,  0,  0, -K,  0, -R,  0, __,
      __, -P,  0, -P, -P, -Q, -P, -B,  0, __,
      __, -B, -N,  0,  0, -P, -N, -P,  0, __,
      __,  0,  0,  0, +P, +N,  0,  0,  0, __,
      __,  0, -P,  0,  0, +P,  0,  0,  0, __,
      __,  0,  0, +N,  0,  0, +Q,  0, -P, __,
      __, +P, +P, +P, +B, +B, +P, +P, +P, __,
      __, +R,  0,  0,  0, +K,  0, +R,  0, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, BLACK_RIGHT_ROOK_MOVED | WHITE_RIGHT_ROOK_MOVED
    ]);

    expect(toFEN(board)).toBe("r3k1r1/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K1R1 w Qq - 0 1");
  });

  it("writes FEN for black en passant correctly", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P,  0, -P, -P, -P, -P, -P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, -P,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0, +P, +P, +P, +P, +P, +P, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, 0
    ]);

    board.setEnPassantPossible(81);

    expect(toFEN(board)).toBe("rnbqkbnr/p1pppppp/8/8/Pp6/8/1PPPPPPP/RNBQKBNR w KQkq a3 0 1");
  });

  it("writes FEN for white en passant correctly", () => {
    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P, -P, -P, -P, -P, -P, -P,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0, +P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, +P, +P, +P, +P, +P,  0, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, 0, 0, 0
    ]);

    board.setEnPassantPossible(38);

    expect(toFEN(board)).toBe("rnbqkbnr/ppppppp1/8/6Pp/8/8/PPPPPP1P/RNBQKBNR w KQkq h6 0 1");
  });

  it("writes FEN for half move clock correctly", () => {
    const halfMoveCount = 6;
    const halfMoveClock = 2;

    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P, -P, -P, -P, -P, -P, -P,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0, +P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, +P, +P, +P, +P, +P,  0, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, halfMoveClock, halfMoveCount, 0
    ]);

    expect(toFEN(board)).toBe("rnbqkbnr/ppppppp1/8/6Pp/8/8/PPPPPP1P/RNBQKBNR w KQkq - 2 4");
  });

  it("writes FEN for full move count correctly", () => {
    const halfMoveCount = 7;
    const halfMoveClock = 2;

    const board = new Board([
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __,
      __, -R, -N, -B, -Q, -K, -B, -N, -R, __,
      __, -P, -P, -P, -P, -P, -P, -P,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0, +P, -P, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __,  0,  0,  0,  0,  0,  0,  0,  0, __,
      __, +P, +P, +P, +P, +P, +P,  0, +P, __,
      __, +R, +N, +B, +Q, +K, +B, +N, +R, __,
      __, __, __, __, __, __, __, __, __, __,
      __, __, __, __, __, __, __, __, __, __, halfMoveClock, halfMoveCount, 0
    ]);

    expect(toFEN(board)).toBe("rnbqkbnr/ppppppp1/8/6Pp/8/8/PPPPPP1P/RNBQKBNR b KQkq - 2 4");
  });

  // Castling: only one -
});