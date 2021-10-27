import React from "react";
import { useSelector } from "react-redux";
import DayForecastWeather from "../atoms/DayForecastWeather";

const ForecastWeather = () => {
    const { forecast } = useSelector((state) => state.weatherSlice);

    const forecastByDay = new Map();

    forecast.forEach((weather) => {
        let key = weather.dt_txt.split(" ")[0];

        if (forecastByDay.has(key)) {
            forecastByDay.get(key).push(weather);
        } else {
            forecastByDay.set(key, [weather]);
        }
    });

    return (
        <div>
            {
                Array.from(forecastByDay).map(([key, value]) => (
                    <DayForecastWeather key={key} weather={value} date={key}/>
                ))
            }
        </div>
    );
};

export default ForecastWeather;
