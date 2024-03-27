export function getMinimumFruits(fruits: number[]): number {

  const fruitCounts = new Map<number, number>();

  for (const fruit of fruits) {
    fruitCounts.set(fruit, (fruitCounts.get(fruit) || 0) + 1);
  }

  const frequencies = Array.from(fruitCounts.values()).sort((a, b) => b - a);

  let i = 0;
  let j = 1;
  while (i < j && j < frequencies.length) {
    if (frequencies[i] > 0 && frequencies[j] > 0) {
      frequencies[i]--;
      frequencies[j]--;
    }
    if (frequencies[i] === 0) {
      i++;
      j++
    }
    if (frequencies[j] === 0) {
      j++;
    }
  }

  return frequencies.reduce((a, b) => a + b, 0);
}




