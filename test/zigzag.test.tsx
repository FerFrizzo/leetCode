import { zigzag } from '../src/zigzag'

describe( "Zig Zag Conversion", () => {
  it( "should return PAHNAPLSIIGYIR from PAYPALISHIRING", () => {
    const result = zigzag( 'PAYPALISHIRING', 3 );
    expect( result ).toBe( 'PAHNAPLSIIGYIR' );
  } );

  it( "should return PINALSIGYAHRPI from PAYPALISHIRING", () => {
    const result = zigzag( 'PAYPALISHIRING', 4 );
    expect( result ).toBe( 'PINALSIGYAHRPI' );
  } )

  it( "should return A from A", () => {
    const result = zigzag( 'A', 1 );
    expect( result ).toBe( 'A' );
  } )
} );