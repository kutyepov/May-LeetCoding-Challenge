export default function findComplement(num: number): number {
  const binary: string = num.toString(2);
  let resultStr: string = '';

  for (let n of binary) {
    resultStr += Number(!Number(n)).toString();
  }

  return parseInt(resultStr, 2);
}
