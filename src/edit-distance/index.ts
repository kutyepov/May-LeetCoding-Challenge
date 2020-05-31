export default function minDistance(w1: string, w2: string): number {
  const rows: number = w1.length;
  const cols: number = w2.length;

  const dp: number[][] = Array.from({ length: rows + 1 }, () =>
    Array.from({ length: cols + 1 })
  );

  dp.forEach((_, row) => (dp[row][0] = row));
  dp[0].forEach((_, col) => (dp[0][col] = col));

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      if (w1[row - 1] === w2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] =
          1 +
          Math.min(dp[row - 1][col - 1], dp[row][col - 1], dp[row - 1][col]);
      }
    }
  }
  return dp[rows][cols];
}
