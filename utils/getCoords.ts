"use client"

type getCoordsResponse = {
    lat: number;
    lon: number;
} | undefined

type Coords = {
    lat: number;
    lon: number;
}

export default function getCoords(): Promise<getCoordsResponse> {
    return new Promise((resolve) => {
        if (!navigator?.geolocation) return resolve(undefined)

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords: Coords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                }
                resolve(coords)
            },
            (error) => {
                console.log('Geolocation denied or unavailable', error)
                resolve(undefined)
            }
        )
    })
}