type CityWeather = {
  name: string;
  weather: string;
  status: string[];
}

export async function weatherStation(keyword: string): Promise<string[]> {
  let page = 1;
  const result: string[] = [];
  let hasMore = true;
  while (hasMore) {
    await fetch(`https://jsonmock.hackerrank.com/api/weather?page=${page}`)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.data.length; i++) {
          const cityWeather = data.data[i] as CityWeather;
          if (cityWeather.name.includes(keyword)) {
            result.push(getResponse(cityWeather));
          }
        }
        hasMore = data.total_pages > page;
        page++;
      })
  }

  return result;
}
// const response = await fetch(`https://jsonmock.hackerrank.com/api/weather`)
// const data = await response.json()
// const matches = data.data.filter(city => city.name.includes(keyword));
// const result: string[] = [];
// for (let i = 0; i < matches.length; i++) {
//   const cityWeather = matches[i] as CityWeather;
//   result.push(getResponse(cityWeather));
// }
// return result;
//     .then(response => response.json())
//     .then(data => {
//       const result: string[] = [];
//       for (let i = 0; i < data.data.length; i++) {
//         const cityWeather = data.data[i] as CityWeather;
//         result.push(getResponse(cityWeather));
//       }
//       return result;
//     })

// return response;

// }

function getResponse(cityWeather: CityWeather): string {
  const weather = extractNumbers(cityWeather.weather.split(' ')[0]);
  let wind: string = ''
  let humidity: string = ''
  if (cityWeather.status.length > 0) {
    wind = extractNumbers(cityWeather.status[0].split(' ')[1]);
    humidity = extractNumbers(cityWeather.status[1].split(' ')[1]);
  }

  return `${cityWeather.name},${weather},${wind},${humidity}`;
}

function extractNumbers(str: string): string {
  return (str.match(/\d+/g) || ['0'])[0];
}