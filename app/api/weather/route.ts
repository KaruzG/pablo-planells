export async function GET() {
    try {
        const location = '39.4726816,-0.353679'
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`)
        const data = await response.json()
    
        return Response.json(data)
    } catch (error) {
        console.error('Error fetching weather data:', error)
        return Response.json({ error: 'Failed to fetch weather data' }, { status: 500 })
    }
}