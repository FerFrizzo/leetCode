export function topKFrequent(nums: number[], k: number): number[] {
  const result = []
  const hashMap: Map<number, number> = new Map()
  for (const n of nums) {
    const value = (hashMap.get(n) || 0) + 1
    hashMap.set(n, value)
  }

  const sortedStoreValues: number[] =
    [...hashMap.entries()]
      .sort(([, valueA], [, valueB]) => valueA - valueB)
      .map(([key]) => key);

  for (let i = 0; i < k; i++) {
    const topK = sortedStoreValues.pop() || 0
    result.push(topK)
  }

  return result
}