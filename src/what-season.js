import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('Invalid date!');
  }

  const sessons = [
    'winter',
    'spring',
    'summer',
    'autumn',
  ];
  const index = (Math.floor(((date.getMonth() + 1) / 12 * 4)) % 4)
  return sessons[index]
}
// декабрь = 13 / январь = 2