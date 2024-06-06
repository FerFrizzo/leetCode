export function findLHS(nums: number[]): number {

  const hashmap: Map<number, number> = new Map();

  nums.forEach((_, index) =>
    hashmap.set(nums[index], (hashmap.get(nums[index]) || 0) + 1)
  )

  let length = 0
  for (const [k, v] of hashmap) {
    if (hashmap.has(k + 1))
      length = Math.max(length, v + (hashmap.get(k + 1) || 0))
  }

  return length
}
















// const map = new Map<number, number>();
// nums.forEach((num, i) =>
//   map.set(nums[i], (map.get(nums[i]) || 0) + 1));

// let len: number = 0;
// for (const [k, v] of map) {
//   if (!map.has(k - 1)) continue;
//   const mapGet = map.get(k - 1) || 0
//   len = Math.max(len, mapGet + v);
// }
// return len;

