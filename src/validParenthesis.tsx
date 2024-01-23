export function isValid ( s: string ): boolean {
    const arrayOfStrings = s.split( "" );
    if ( arrayOfStrings.length % 2 !== 0 ) {
        return false;
    }

    const openBrackets = ["(", "[", "{"];
    const closeBrackets = [")", "]", "}"];
    const openCloseMap = new Map<string, string>();
    openCloseMap.set( "(", ")" );
    openCloseMap.set( "[", "]" );
    openCloseMap.set( "{", "}" );
    const stack: string[] = [];
    const bol = arrayOfStrings.map( ( curr ) => {
        if ( openBrackets.includes( curr ) ) {
            stack.push( curr );
            return true;
        } else if ( closeBrackets.includes( curr ) ) {
            const lastOpenBracket = stack.pop();
            if ( !lastOpenBracket || openCloseMap.get( lastOpenBracket ) !== curr ) {
                return false;
            }
            return true;
        }
    } )

    return stack.length === 0 && bol.every( ( curr ) => curr === true );
}