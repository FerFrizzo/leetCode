const MAX = 2147483647;
const MIN = -2147483648;

export function myAtoi ( s: string ): number {

  let i = 0;
  s = s.trim();
  let sign = 1;
  if ( s[i] === "+" || s[i] === "-" ) {
    if ( s[i] === "-" ) sign = -1;
    i++;
  }
  let number = 0;
  while ( s.charCodeAt( i ) > 47 && s.charCodeAt( i ) < 58 ) {
    number = number * 10 + +s[i];
    i++;
  }
  const answer = number === 0 ? 0 : sign * number;
  return sign > 0 ? Math.min( MAX, answer ) : Math.max( MIN, answer );


}