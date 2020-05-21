export default function countSquares(matrix: number[][]): number {
  matrix.unshift(new Array(matrix[0].length).fill(0));
  matrix.forEach((row) => row.unshift(0));

  let squaresCount: number = 0;

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value !== 0) {
        matrix[i][j] =
          1 +
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
        squaresCount += matrix[i][j];
      }
    });
  });

  return squaresCount;
}
