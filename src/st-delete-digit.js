import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digits = (n + '').split('').map(el => +el);
  const min = Math.min(...digits);
  digits[digits.findIndex(el => el === min)] = '';
  return +digits.join('');
}
