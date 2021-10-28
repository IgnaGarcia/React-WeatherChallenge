import React from "react";
import styled from "styled-components";

const WeatherInfoDiv = styled.div`
    p{ 
        color: #bfbfbf;
        font-size: .9em;
    }
    h2{ 
        position: relative;
        color: #fafafa;
        font-size: 4em;
        text-align: center;
        span{
            position: absolute;
            color: #fafafa;
            font-size: 2rem;
        }
    }
`;

const WeatherInfo = ({ currentWeather }) => {
    return (
        <WeatherInfoDiv>
            <p>
                {Math.round(currentWeather.main.temp_max)}° maxima {Math.round(currentWeather.main.temp_min)}° minima
            </p>
            <h2>
                {Math.round(currentWeather.main.temp)}°<span>C</span>
            </h2>
            <p>
                Sensacion Termica: {Math.round(currentWeather.main.feels_like)}°
            </p>
            <p> Humedad: {currentWeather.main.humidity}% </p>
            <p> Viento: {currentWeather.wind.speed} km/h </p>
            <p> Presion: {currentWeather.main.pressure} mbar </p>
        </WeatherInfoDiv>
    );
};

export default WeatherInfo;
