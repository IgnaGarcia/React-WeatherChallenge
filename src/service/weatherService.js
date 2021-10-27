const BASE = "https://api.openweathermap.org/data/2.5"
const PARAMS = "units=metric&lang=es"
const API_KEY = "01e04c8c6b1c0b7480e73c0e45f2e486"

export const fetchCurrentWeatherOf = async (city) => {
    try {
        const res = await fetch(`${BASE}/weather?q=${city}&appid=${API_KEY}&${PARAMS}`)
        return await res.json()
    } catch (err) {
        console.error(err)
        return null;
    }
};

export const fetchForecastWeatherOf = async (city) => {
    try {
        const res = await fetch(`${BASE}/forecast?q=${city}&appid=${API_KEY}&${PARAMS}`)
        const data = await res.json()
        return data.list
    } catch (err) {
        console.error(err)
        return null
    }
};