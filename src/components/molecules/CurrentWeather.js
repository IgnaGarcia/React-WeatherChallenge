import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
    const { currentWeather } = useSelector((state) => state.weatherSlice);

    return (
        <div>
            {currentWeather.name !== undefined ? (
                <>
                    <h3>
                        {currentWeather.name}({currentWeather.sys.country}) -{" "}
                        {currentWeather.weather[0].description}
                    </h3>
                    <h1> {Math.round(currentWeather.main.temp)}° </h1>
                    <p>
                        {" "}
                        Sensacion Termica de{" "}
                        {Math.round(currentWeather.main.feels_like)}°{" "}
                    </p>
                    <b> {Math.round(currentWeather.main.temp_max)}° </b>{" "}
                    <i> {Math.round(currentWeather.main.temp_min)}° </i>
                    <p> Humedad: {currentWeather.main.humidity}% </p>
                    <p> Viento a {currentWeather.wind.speed} km/h </p>
                    <p> Presion {currentWeather.main.pressure} mbar </p>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default CurrentWeather;
