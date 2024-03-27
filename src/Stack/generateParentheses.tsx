export function generateParenthesis(n: number): string[] {
  const result: string[] = []

  if (n === 0) return []
  if (n === 1) return ['()']

  function backtrack(s: string, left: number, right: number) {
    if (left === 0 && right === 0) {
      result.push(s)
      return
    }

    if (left < right) backtrack(s + ')', left, right - 1)
    if (left > 0) backtrack(s + '(', left - 1, right)
  }

  backtrack('', n, n)
  return result
}