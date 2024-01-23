import { isValid } from '../src/validParenthesis';

describe( "Valid Parenthesis", () => {
    it( "Should return true", () => {
        expect( isValid( "()" ) ).toBe( true );
    } );

    it( "should return true", () => {
        console.log( "()[]{}".split( '' ).indexOf( '(' ) );
        expect( isValid( "()[]{}" ) ).toBe( true );
    } );

    it( "should return false", () => {
        expect( isValid( "(]" ) ).toBe( false );
    } );
} );