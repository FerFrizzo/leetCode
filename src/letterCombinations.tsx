interface PhoneDigitsToLetters {
  [key: string]: string[]
}

export function letterCombinations(digits: string): string[] {
  const phoneMap: PhoneDigitsToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  if (digits === '') return []
  const response: string[][] = []
  const result: string[] = []

  const arrDigits = digits.split('')

  for (const d in arrDigits) {
    const char = arrDigits[d]
    const letters = phoneMap[char]
    response.push(letters)
  }

  for (let i = 0; i < response.length; i++) {
    for (let j = 1; j < response.length; j++) {
      if (!result.includes(response[i][j]))
        result.push()
    }
  }

  return []
}