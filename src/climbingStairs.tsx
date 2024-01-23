export function climbStairs(n: number): number {
  let oneStep = 1
  let twoStep = 1

  for (let i = 0; i < (n - 1); i++) {
    const temp = oneStep
    oneStep = oneStep + twoStep
    twoStep = temp
  }

  return oneStep
}