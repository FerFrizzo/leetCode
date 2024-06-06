export function divisorSubstrings(num: number, k: number): number {
  let sum = 0
  const strOfNumber = num.toString()

  for (let i = 0; i <= strOfNumber.length - k; i++) {
    const div = Number(strOfNumber.slice(i, i + k))
    if (num % div === 0) sum++
  }

  return sum
}