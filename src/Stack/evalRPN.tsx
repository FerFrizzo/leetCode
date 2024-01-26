export function evalRPN(tokens: string[]): number {

  const stack: number[] = []

  if (tokens.length === 0) return 0

  for (const t of tokens) {
    if (t === '+') {
      const a = stack.pop() || 0
      const b = stack.pop() || 0
      stack.push(a + b)
    } else if (t === '*') {
      const a = stack.pop() || 0
      const b = stack.pop() || 0
      stack.push(a * b)
    } else if (t === '-') {
      const a = stack.pop() || 0
      const b = stack.pop() || 0
      stack.push(b - a)
    } else if (t === '/') {
      const a = stack.pop() || 0
      const b = stack.pop() || 0
      stack.push(Math.trunc(b / a))
    } else {
      stack.push(Number(t))
    }
  }

  return stack[0]
}
