import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        currentWeather: {
            name: "",
            sys: {
                country: ""
            },
            wind: {
                speed: ""
            },
            main: {
                temp: "",
                feels_like: "",
                temp_max: "",
                temp_min: "",
                pressure: "",
                humidity: ""
            },
            weather: [{
                description: ""
            }]

        },
        forecast: []
    },
    reducers: {
        setCurrentWeather: (state, action) => {
            state.currentWeather = action.payload;
        },
        setForecast: (state, action) => {
            state.forecast = action.payload;
        }
    },
});

export const { setCurrentWeather } = weatherSlice.actions;
export const { setForecast } = weatherSlice.actions;

export default weatherSlice.reducer;

export const fetchCurrentWeatherOf = (city) => {
    return (dispatch) => {
        const BASE = 'https://api.openweathermap.org/data/2.5'
        const PARAMS = 'units=metric&lang=es'
        const API_KEY = "01e04c8c6b1c0b7480e73c0e45f2e486"
        
        const city = "Ituzaingo"

        fetch(`${BASE}/weather?q=${city}&appid=${API_KEY}&${PARAMS}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                dispatch(setCurrentWeather(data))
            })
            .catch((err) => console.error(err));
    }
};

export const fetchForecastWeatherOf = (city) => {
    return (dispatch) => {
        const BASE = 'https://api.openweathermap.org/data/2.5'
        const PARAMS = 'units=metric&lang=es'
        const API_KEY = "01e04c8c6b1c0b7480e73c0e45f2e486"

        const city = "Ituzaingo"

        fetch(`${BASE}/forecast?q=${city}&appid=${API_KEY}&${PARAMS}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                dispatch(setForecast(data.list))
            })
            .catch((err) => console.error(err));
    }
};