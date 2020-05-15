import { expect } from 'chai';
import removeKdigits from './index';

describe('removeKdigits', () => {
  const inputs: {
    input: [string, number];
    output: string;
  }[] = [
    {
      input: ['1432219', 3],
      output: '1219',
    },
    {
      input: ['10200', 1],
      output: '200',
    },
    {
      input: ['10', 2],
      output: '0',
    },
    {
      input: ['199', 1],
      output: '19',
    },
    {
      input: ['102', 2],
      output: '0',
    },
  ];

  inputs.forEach(({ input, output }) => {
    it(`should return ${output} for ${JSON.stringify(input)}`, () => {
      expect(removeKdigits(...input)).to.be.equal(output);
    });
  });
});
