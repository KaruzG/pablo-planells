export async function useWeatherData(coords: { lat: number; lon: number }) {
    const BASE_URL = '/api/weather/';
    const response = await fetch(BASE_URL, {
        cache: 'no-store', 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: `${coords.lat},${coords.lon}` }),
    })
    const data = await response.json();

    return data;
}