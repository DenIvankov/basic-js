import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {

  const result = Array.from({length: matrix.length}).fill([]);

  for (let i = 0; i < matrix.length; i++) {
    result[i] = Array.from({length: matrix[i].length}).fill(0)
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 0;
      const currentSum = getNeighborsIndex(j, i)
          .filter(([_i, _j]) => _i >= 0 && _j >= 0 && _i < matrix.length && _j < matrix[i].length )
          .map(([_i, _j]) => matrix[_i][_j])
          .reduce((acc, cur) => acc + cur, 0);

      result[i][j] = currentSum
    }

  }

  return result;
}


const getNeighborsIndex = (i,j) => {
  return [
    [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],
    [i, j - 1], [i, j + 1],
    [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
  ]
}