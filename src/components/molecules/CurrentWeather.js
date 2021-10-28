import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Weather = styled.div`
    margin: 1.4em 0;
    display: flex;
    justify-content: space-between;
`;

const WeatherInfo = styled.div`
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

const LocationInfo = styled.div`
    h3{
        font-size: 2.4em;
        color: #fafafa;
    }
    p{
        font-size: 1.4em;
        color: #bfbfbf;
        text-align: right;
        margin-top: 10px;
        :first-letter {
            text-transform:capitalize;
        }
    }
`;

const CurrentWeather = () => {
    const { currentWeather } = useSelector((state) => state.weatherSlice);

    return (
        <Weather>
            {currentWeather.name !== undefined ? (
                <>
                    <WeatherInfo>
                        <p> 
                            {Math.round(currentWeather.main.temp_max)}° maxima {Math.round(currentWeather.main.temp_min)}° minima 
                        </p>
                        <h2> {Math.round(currentWeather.main.temp)}°<span>C</span> </h2>
                        <p>
                            Sensacion Termica: {Math.round(currentWeather.main.feels_like)}°
                        </p>
                        <p> Humedad: {currentWeather.main.humidity}% </p>
                        <p> Viento: {currentWeather.wind.speed} km/h </p>
                        <p> Presion: {currentWeather.main.pressure} mbar </p>
                    </WeatherInfo>
                    <LocationInfo>
                        <h3> {currentWeather.name}({currentWeather.sys.country}) </h3>
                        <p> {currentWeather.weather[0].description} </p>
                    </LocationInfo>

                </>
            ) : (
                ""
            )}
        </Weather>
    );
};

export default CurrentWeather;
