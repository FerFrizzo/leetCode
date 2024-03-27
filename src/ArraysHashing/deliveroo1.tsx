export function getProductSuggestions(products: string[], search: string): string[][] {

  const sortedArray = products.sort();
  const result: string[][] = [];

  for (let i = 0; i < search.length; i++) {
    const startSearch = search.slice(0, i + 1);
    const allResults = sortedArray.filter(p => p.startsWith(startSearch));
    result.push(allResults.slice(0, 3));
  }


  console.log(result);
  return result;
}
