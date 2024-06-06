export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set: Set<number> = new Set()

  for (let i = 0, l = nums.length; i < l; i++) {
    if (i > k) set.delete(nums[i - k - 1])
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
  return false

}