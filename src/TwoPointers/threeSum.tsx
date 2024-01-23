export function threeSum(nums: number[]): number[][] {

  nums = nums.sort((a, b) => a - b)

  const arr: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    const value = nums[i]
    while (left < right) {
      const valueLeft = nums[left]
      const valueRight = nums[right]
      if (valueLeft + valueRight + value === 0) {
        const triplet: number[] = [value, valueLeft, valueRight]
        arr.push(triplet)
        while (left < right && nums[left] === triplet[1]) left++
        while (left < right && nums[right] === triplet[2]) right--
      } else if (valueLeft + valueRight + value > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
}


