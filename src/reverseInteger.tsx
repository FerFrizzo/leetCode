export function reverse ( x: number ): number {
  const stringOfNumber = x.toString()
  let isNegative: boolean = false
  if ( stringOfNumber[0] === '-' ) {
    isNegative = true
  }

  let reverseNumber = stringOfNumber.split( '' ).reverse().join( '' )

  if ( isNegative ) {
    reverseNumber = '-' + reverseNumber.substring( 0, reverseNumber.length - 1 )
  }
  const result = Number( reverseNumber )

  if ( result < -2147483648 || result > 2147483647 ) return 0

  return result
}