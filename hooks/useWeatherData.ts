export async function useWeatherData() {
    const BASE_URL = '/api/weather/';
    const response = await fetch(BASE_URL, { cache: 'no-store' })
    const data = await response.json();
    console.log('Weather data:', data);

    return data;
}