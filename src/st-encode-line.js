import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';

  let prevSymbol = '';
  let prevSymbolFrequency = 0;

  for (const symbol of str) {
    if (symbol === prevSymbol) {
      prevSymbolFrequency += 1;
    } else {
      if (prevSymbolFrequency > 0) {
        result += (prevSymbolFrequency > 1 ? prevSymbolFrequency : '') + prevSymbol;
      }
      prevSymbol = symbol;
      prevSymbolFrequency = 1;
    }
  }
  if (prevSymbolFrequency > 0) {
    result += (prevSymbolFrequency > 1 ? prevSymbolFrequency : '') + prevSymbol;
  }
  return result;
}
