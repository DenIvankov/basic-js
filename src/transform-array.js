import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {boolean} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const isElemOperation = elem => {
  return ['--discard-prev', '--double-prev', '--double-next','--discard-next'].includes(elem);
}
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const operations = [];

  let currentOperation = '';
  arr.forEach((elem, index) => {
     if (isElemOperation(elem)) {
      const [ ,, operationType, operationOrder ] = elem.split('-');

      if (operationOrder === 'next') {
        currentOperation = operationType;
      } else {
        if (operations[index - 1]) {
          if (!operations[index - 1].operation) {
            operations[index - 1].operation = operationType;
          } else {
            operations[index - 1].operation = operations[index - 1].operation + '-' + operationType;
          }
        }
      }
       operations.push(null);
    } else {
      operations.push({value: elem, operation: currentOperation});
      currentOperation = '';
    }
  })
  const result = [];
  operations.filter(Boolean).forEach(({value, operation}) => {
    if (operation === 'double') {
      result.push(value, value)
    } else if (operation === '') {
      result.push(value)
    } else if (operation === 'double-discard') {
      result.push(value)
    } else if (operation === 'double-double') {
      result.push(value, value, value)
    }
  })
  return result;
}
