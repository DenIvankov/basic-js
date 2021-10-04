import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (position - 1 >= this.getLength() || position - 1 < 0 || typeof position !== 'number') {
      this.values.length = 0;
      throw new Error('You can\'t remove incorrect link!')
    }
    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const result = this.values.map(el => `( ${el} )`).join('~~');
    this.values.length = 0;
    return result;
  }
};
