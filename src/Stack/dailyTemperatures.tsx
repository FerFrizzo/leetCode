export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = []
  const answer = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i]
    while (stack && temp > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop() as number
      answer[index] = i - index
    }
    stack.push(i)
  }

  return answer

}
