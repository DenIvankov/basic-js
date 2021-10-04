import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const {
    separator,
    repeatTimes,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  const additions = Array.from({length: additionRepeatTimes || 1})
      .fill(addition)
      .join(additionSeparator || '|');

  return Array.from({length: repeatTimes || 1})
      .fill(str + additions)
      .join(separator || '+')
}
