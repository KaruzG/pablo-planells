"use client"
import { useEffect, useState } from "react";

type Coords = { lat: number; lon: number } | null;

export default function useWeatherData(coords: Coords) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!coords) {
      setData(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weather", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ location: `${coords.lat},${coords.lon}` }),
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Status ${res.status} ${res.statusText} ${text}`);
        }

        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      cancelled = true;
    };
  }, [coords]);

  return { data, loading, error };
}