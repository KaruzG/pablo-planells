type processWeatherDataReturn = {
    temperature: "cold" | "warm" | "hot";
    rain: boolean;
    clouds: boolean;
}

type apiWeatherResponse = {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        temp_c: number;
        is_day: 0 | 1
        precip_mm: number;
        cloud: number;
    }
}

export default function processWeatherData(rawData: apiWeatherResponse): processWeatherDataReturn {
    const temp = rawData.current.temp_c;
    const temperature: "cold" | "warm" | "hot" = temp <= 10 ? "cold" : temp <= 25 ? "warm" : "hot";

    const rain = rawData.current.precip_mm > 0;

    const clouds = rawData.current.cloud >= 50;

    return { temperature, rain, clouds };
}