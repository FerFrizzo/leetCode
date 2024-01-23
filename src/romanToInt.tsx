export function romanToInt(s: string): number {
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    const arrayOfNumbers = s.split("").map((item) => romanMap.get(item) || 0);
    const integer = arrayOfNumbers.reduce((acc, curr, index, array) => {
        if ((array.length === 2 && curr > acc) || (index === 1 && acc < curr )) {
            return curr - acc;
        }
        if (curr < array[index + 1]) {
            return acc - curr;
        }
        return acc + curr;
    });

    return integer;
    
}