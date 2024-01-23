export function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)

  let result: number = Math.min()
  let diff: number = 0
  let response: number = 0
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    const value = nums[i]
    while (left < right) {
      const valueLeft = nums[left]
      const valueRight = nums[right]
      const sum = valueLeft + valueRight + value
      diff = Math.abs(target - sum)
      if (result > diff) {
        result = diff
        response = sum
      }
      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return response
}