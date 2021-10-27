import { createAction, createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        currentWeather: { },
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

export const fetchCurrentWeatherAction = createAction("weather/fetchCurrentWeather")
export const fetchForecastAction = createAction("weather/fetchForecast")