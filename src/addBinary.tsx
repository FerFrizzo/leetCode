export function addBinary(a: string, b: string): string {

  const aLength = a.length - 1
  const bLength = b.length - 1

  let carry = 0
  let result = ''
  for (let i = aLength, j = bLength; i >= 0 || j >= 0; i--, j--) {
    const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry
    result = (sum % 2) + result
    carry = sum > 1 ? 1 : 0
  }

  if (carry) result = 1 + result
  return result
}