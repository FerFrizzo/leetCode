export function longestConsecutive(nums: number[]): number {
  if (nums === null || nums.length === 0) return 0
  if (nums.length === 1) return 1

  const setNums = new Set(nums)
  let max = 0

  for (const n of setNums) {
    if (setNums.has(n - 1)) continue
    let currNum = n
    let currMax = 1

    while (setNums.has(currNum + 1)) {
      currNum++
      currMax++
    }

    max = Math.max(max, currMax)
  }

  return max

}