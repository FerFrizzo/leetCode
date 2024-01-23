export function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    if (map.has(complement)) {
        const complementIndex = map.get(complement);
        if (complementIndex !== undefined) {
            return [complementIndex, i];
        }
    }
    map.set(nums[i], i);
  }
  return [];
}
