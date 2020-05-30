const kClosest = (points: number[][], K: number): number[][] =>
  points.sort(([a, b], [c, d]) => a * a + b * b - (c * c + d * d)).slice(0, K);

export default kClosest;
