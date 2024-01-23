export function isAnagram(s: string, t: string): boolean {

  if (s.length !== t.length) return false

  const newS = s.split('')
  const newT = t.split('')
  newS.sort()
  newT.sort()

  return newS.join() === newT.join()

}