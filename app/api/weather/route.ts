export async function POST(req: Request) {
  try {
    console.log('API Route /api/weather/ called - app router POST')
    const { location = '39.4726816,-0.353679' } = await req.json().catch(() => ({}))

    const resp = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
    )

    const data = await resp.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch weather data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}