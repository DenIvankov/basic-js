import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

const macRegexp = /^[0-9a-fA-F]{2}(-[0-9a-fA-F]{2}){5}$/i;

export default function isMAC48Address(inputString) {
  return macRegexp.test(inputString)
}
