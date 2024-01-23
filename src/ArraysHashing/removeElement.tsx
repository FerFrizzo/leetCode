export function removeElement (nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (x === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
