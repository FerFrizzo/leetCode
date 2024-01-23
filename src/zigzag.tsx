export function zigzag ( s: string, numRows: number ): string {
  if ( numRows === 1 ) return s

  let direction = false
  let count = 0
  const arr = new Array( numRows ).fill( '' )

  for ( let i = 0; i < s.length; i++ ) {
    const current = s[i]
    arr[count] += current

    if ( count === 0 || count >= numRows - 1 ) {
      direction = !direction
    }

    if ( direction ) count++
    else count--
  }

  return arr.join( '' )
}