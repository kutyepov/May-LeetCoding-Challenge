export default function checkStraightLine(coordinates: [number, number][]) {
  // extract two points to calculate slope and y-intercept
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // calculate slope of the line:
  //    In mathematics, the slope or gradient of a line
  //    is a number that describes both the direction and the steepness of the line.*
  //    * - https://en.wikipedia.org/wiki/Slope
  const m = (y1 - y2) / (x1 - x2);

  // calculate y-intercept of the line
  // (a coordinate where a line crosses Y axis)
  const b = y1 - m * x1;

  // go through every point
  // and check if it lies on the line
  for (let [x, y] of coordinates) {
    // https://en.wikipedia.org/wiki/Linear_equation#Slope%E2%80%93intercept_form
    if (y !== m * x + b) {
      return false;
    }
  }

  return true;
}
