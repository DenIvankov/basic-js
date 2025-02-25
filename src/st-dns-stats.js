import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const byChunks = domains.map(domain => domain.split('.').reverse());

  const domainFrequency = {};

  byChunks.forEach(chunked => {
    let start = '';
    chunked.forEach((chunk) => {
      start += '.' + chunk;
      if (domainFrequency[start]) {
        domainFrequency[start] = domainFrequency[start] + 1;
      } else {
        domainFrequency[start] = 1;
      }
    })
  })

  return domainFrequency
}
