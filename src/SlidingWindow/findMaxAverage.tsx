export function findMaxAverage(nums: number[], k: number): number {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let maxAvg = sum / k

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]
    sum += nums[i]
    const avg = sum / k
    maxAvg = Math.max(maxAvg, avg)
  }

  return parseFloat(maxAvg.toFixed(5))
}
