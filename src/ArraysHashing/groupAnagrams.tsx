export function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs]

  const map = new Map<string, string[]>()

  for (const str of strs) {
    const sortedStr = str.split('').sort().join().replaceAll(',', '')

    const foundKey = map.get(sortedStr)

    if (foundKey) {
      foundKey.push(str)
      map.set(sortedStr, foundKey)
      continue
    }

    map.set(sortedStr, [str])
  }

  return Array.from(map.values())
}