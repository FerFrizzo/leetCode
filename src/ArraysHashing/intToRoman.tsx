export function intToRoman(num: number): string {
  const letInt = new Map([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);

  const list = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = '';

  for (const i of list) {
    const repeatCounter = Math.floor(num / i);
    const word = letInt.get(i) || ''

    if (repeatCounter !== 0) {
      roman += word.repeat(repeatCounter);
    }

    num = num % i;

    if (num === 0) return roman;
  }

  return roman;

}