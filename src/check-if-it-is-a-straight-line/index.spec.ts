import { expect } from 'chai';
import checkStraightLine from './index';

describe('checkStraightLine', () => {
  const pointsThatLieOnStraightLine: [number, number][][] = [
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
    [
      [-2, 12],
      [2, -8],
      [6, -28],
      [-10, 52],
      [-7, 37],
      [4, -18],
      [7, -33],
      [1, -3],
      [-1, 7],
      [8, -38],
    ],
    [
      [0, 1],
      [1, 3],
      [-4, -7],
      [5, 11],
    ],
  ];

  pointsThatLieOnStraightLine.forEach((points) => {
    it(`should return true for points: ${JSON.stringify(
      points
    )} that lie on straight line`, () => {
      expect(checkStraightLine(points)).to.be.equal(true);
    });
  });
  const pointsThatDoNotLieOnStraightLine: [number, number][][] = [
    [
      [1, 1],
      [2, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 7],
    ],
    [
      [0, 1],
      [1, 3],
      [-4, -12],
      [5, 11],
    ],
  ];

  pointsThatDoNotLieOnStraightLine.forEach((points) => {
    it(`should return false for points: ${JSON.stringify(
      points
    )} that do not lie on straight line`, () => {
      expect(checkStraightLine(points)).to.be.equal(false);
    });
  });
});
