import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

export default function getCommonCharacterCount(s1, s2) {
  const hashS1 = buildHash(s1);
  const hashS2 = buildHash(s2);

  let result = 0;

  [...hashS1.entries()].forEach(([char, frequency]) => {
    if (hashS2.has(char)) {
      result += Math.min(hashS2.get(char), frequency)
    }
  })

  return result;
}

const buildHash = str => {
  const hash = new Map();
  for (const char of str) {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1)
    } else {
      hash.set(char, 1);
    }
  }
  return hash
}