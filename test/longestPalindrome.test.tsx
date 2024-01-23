import { longestPalindrome } from '../src/longestPalindrome'

describe( "Longest Palindrome", () => {
  it( "should return bab from babad", () => {
    const result = longestPalindrome( 'babad' );
    expect( result ).toBe( 'bab' );
  } );

  it( "should return bb from cbbd", () => {
    const result = longestPalindrome( 'cbbd' );
    expect( result ).toBe( 'bb' );
  } )

  it( "should return adda from baddad", () => {
    const result = longestPalindrome( 'baddad' );
    expect( result ).toBe( 'adda' );
  } )
} );