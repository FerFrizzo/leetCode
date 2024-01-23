export function containsDuplicate(nums: number[]): boolean {
  const newSet = new Set(nums)
  return (newSet.size < nums.length)
}