export function decrypt(code: number[], k: number): number[] {

  if (k === 0) {
    return code.map(() => 0)
  } else if (k > 0) {
    return calculateArray(code, k)
  }

  return calculateArray(code.reverse(), -k).reverse()

}

function calculateArray(arr: number[], k: number): number[] {
  let sumOfK = 0
  for (let i = 0; i < k; i++) {
    sumOfK += arr[i]
  }
  const result: number[] = []
  for (let i = 0; i < arr.length; i++) {
    sumOfK -= arr[i]
    const pos = (i + k) % arr.length
    sumOfK += arr[pos]
    result.push(sumOfK)
  }

  return result

}
