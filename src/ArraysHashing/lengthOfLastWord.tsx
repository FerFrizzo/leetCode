export function lengthOfLastWord (s: string): number {
  const trimmedString = s.trim()
  const lastWord = trimmedString.split(' ').pop()

  return lastWord != null ? lastWord.length : 0
}
