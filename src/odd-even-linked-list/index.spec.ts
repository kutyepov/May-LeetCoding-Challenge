import { expect } from 'chai';
import oddEvenList from './index';
import listNodeFromArray from '../_helpers/listnode/fromarray';
import listNodeToArray from '../_helpers/listnode/toarray';

describe('oddEvenList', () => {
  it('should group odd nodes followed by even nodes', () => {
    const inputs = [
      {
        input: [1, 2, 3, 4, 5],
        output: [1, 3, 5, 2, 4],
      },
      {
        input: [2, 1, 3, 5, 6, 4, 7],
        output: [2, 3, 6, 7, 1, 5, 4],
      },
      {
        input: [1],
        output: [1],
      },
    ];

    inputs.forEach(({ input, output }) => {
      const result = oddEvenList(listNodeFromArray(input));
      expect(listNodeToArray(result)).to.be.eql(output);
    });
  });

  it('should not fail if list does not exist', () => {
    expect(oddEvenList(null)).to.be.equal(null);
  });
});
