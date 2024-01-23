export function lengthOfLongestSubstring ( s: string ): number {

  if ( s.length === 0 ) {
    return 0
  }

  let max = 0
  let start = 0
  const mapChars: { [key: string]: number } = {}

  for ( let end = 0; end < s.length; end++ ) {
    const char = s[end]
    mapChars[char] = mapChars[char] + 1 || 1

    while ( mapChars[char] > 1 ) {
      const startChar = s[start]

      if ( mapChars[startChar] > 1 ) {
        mapChars[startChar]--
      } else {
        delete mapChars[startChar]
      }

      start++
    }

    max = Math.max( max, end - start + 1 )
  }

  return max
}