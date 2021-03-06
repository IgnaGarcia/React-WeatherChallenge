import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import DayForecastWeather from "../atoms/DayForecastWeather";

const ForecastList = styled.ul`
    display: flex;
    list-style: none;
    border-top: 1px solid #555;
    justify-content: space-around;
`;

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
        <ForecastList>
            {
                Array.from(forecastByDay).map(([key, value]) => (
                    <DayForecastWeather key={key} weather={value} date={key}/>
                ))
            }
        </ForecastList>
    );
};

export default ForecastWeather;
