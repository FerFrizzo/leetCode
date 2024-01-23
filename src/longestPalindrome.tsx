export function longestPalindrome ( s: string ): string {

  let lp = s[0]

  for ( let anchor = 1; anchor < s.length; anchor++ ) {
    let low = anchor
    let high = anchor

    while ( s[low] === s[high] ) {
      low--
      high++

      if ( low == -1 || high === s.length ) break
    }

    lp = lp.length >= s.substring( low + 1, high ).length ? lp : s.substring( low + 1, high )

    low = anchor - 1
    high = anchor

    while ( s[low] === s[high] ) {
      low--
      high++

      if ( low == -1 || high === s.length ) break
    }

    lp = lp.length >= s.substring( low + 1, high ).length ? lp : s.substring( low + 1, high )

  }

  return lp
}


