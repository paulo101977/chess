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

import { clock_time_get, clockid } from 'bindings/wasi';

@inline
export function currentMillis(): i64 {
  let time_ptr = changetype<usize>(new ArrayBuffer(8));
  clock_time_get(clockid.MONOTONIC, 1_000_000, time_ptr);
  return load<i64>(time_ptr) / 1_000_000;
}
