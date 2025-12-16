"use client"

import { useState, useEffect } from "react"

export type WeatherCondition = 
  | "snow" 
  | "rain" 
  | "clouds" 
  | "clear" 
  | "mist" 
  | "thunderstorm"
  | "drizzle"

export type Season = "winter" | "spring" | "summer" | "autumn"

export interface WeatherData {
  condition: WeatherCondition
  temperature: number // in Celsius
  description: string
  season: Season
  icon: string
  humidity: number
  windSpeed: number
}

// Srinagar, Kashmir coordinates
const SRINAGAR_LAT = 34.0837
const SRINAGAR_LON = 74.7973

// Get current season based on month (Kashmir specific)
function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1 // 1-12
  
  // Kashmir seasons:
  // Winter: December - February (heavy snow)
  // Spring: March - April (melting snow, flowers)
  // Summer: May - August (pleasant, some rain)
  // Autumn: September - November (golden chinar leaves)
  
  if (month >= 12 || month <= 2) return "winter"
  if (month >= 3 && month <= 4) return "spring"
  if (month >= 5 && month <= 8) return "summer"
  return "autumn"
}

// Map OpenWeatherMap condition to our conditions
function mapWeatherCondition(weatherId: number): WeatherCondition {
  // Weather condition codes from OpenWeatherMap
  // https://openweathermap.org/weather-conditions
  
  if (weatherId >= 200 && weatherId < 300) return "thunderstorm"
  if (weatherId >= 300 && weatherId < 400) return "drizzle"
  if (weatherId >= 500 && weatherId < 600) return "rain"
  if (weatherId >= 600 && weatherId < 700) return "snow"
  if (weatherId >= 700 && weatherId < 800) return "mist"
  if (weatherId === 800) return "clear"
  return "clouds"
}

// Fallback weather based on season when API is not available
function getSeasonalFallback(season: Season): WeatherData {
  const seasonData: Record<Season, WeatherData> = {
    winter: {
      condition: "snow",
      temperature: -2,
      description: "Light snowfall in Kashmir",
      season: "winter",
      icon: "13d",
      humidity: 75,
      windSpeed: 8
    },
    spring: {
      condition: "clouds",
      temperature: 14,
      description: "Partly cloudy spring day",
      season: "spring",
      icon: "03d",
      humidity: 60,
      windSpeed: 12
    },
    summer: {
      condition: "clear",
      temperature: 24,
      description: "Clear summer sky",
      season: "summer",
      icon: "01d",
      humidity: 45,
      windSpeed: 10
    },
    autumn: {
      condition: "mist",
      temperature: 12,
      description: "Misty autumn morning",
      season: "autumn",
      icon: "50d",
      humidity: 70,
      windSpeed: 6
    }
  }
  
  return seasonData[season]
}

export function useKashmirWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true)
        
        // Try to fetch from OpenWeatherMap (free tier)
        // Note: In production, you'd want to use an API route to hide the key
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        
        if (apiKey) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${SRINAGAR_LAT}&lon=${SRINAGAR_LON}&units=metric&appid=${apiKey}`
          )
          
          if (response.ok) {
            const data = await response.json()
            const condition = mapWeatherCondition(data.weather[0].id)
            const season = getCurrentSeason()
            
            setWeather({
              condition,
              temperature: Math.round(data.main.temp),
              description: data.weather[0].description,
              season,
              icon: data.weather[0].icon,
              humidity: data.main.humidity,
              windSpeed: Math.round(data.wind.speed * 3.6) // Convert m/s to km/h
            })
            setLoading(false)
            return
          }
        }
        
        // Fallback to seasonal weather if API is not available
        const season = getCurrentSeason()
        setWeather(getSeasonalFallback(season))
        setLoading(false)
        
      } catch (err) {
        console.error("Weather fetch error:", err)
        setError("Failed to fetch weather")
        
        // Use fallback
        const season = getCurrentSeason()
        setWeather(getSeasonalFallback(season))
        setLoading(false)
      }
    }

    fetchWeather()
    
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return { weather, loading, error }
}

