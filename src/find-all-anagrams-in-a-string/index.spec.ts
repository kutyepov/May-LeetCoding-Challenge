import { expect } from 'chai';
import findAnagrams from './index';

describe('findAnagrams', () => {
  const inputs: { s: string; p: string; result: number[] }[] = [
    {
      s: 'cbaebabacd',
      p: 'abc',
      result: [0, 6],
    },
    {
      s: 'abab',
      p: 'ab',
      result: [0, 1, 2],
    },
    {
      s: 'debitcard',
      p: 'badcredit',
      result: [0],
    },
    {
      s: '',
      p: 'a',
      result: [],
    },
  ];

  inputs.forEach(({ s, p, result }) => {
    it(`should return [${result}] for s = "${s}", p = "${p}"`, () => {
      expect(findAnagrams(s, p)).to.be.eql(result);
    });
  });
});
