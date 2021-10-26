import React, { useEffect } from "react";
import { fetchCurrentWeatherOf, fetchForecastWeatherOf } from "../../store/slices/weather/weather";
import { fetchLocation } from "../../store/slices/location/location";
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
    const { currentWeather: data } = useSelector((state) => state.weather);
    const { forecast: forecast } = useSelector((state) => state.weather);
    const { location } = useSelector((state) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentWeatherOf("Ituzaingo"));
        dispatch(fetchForecastWeatherOf("Ituzaingo"));
        dispatch(fetchLocation())
        console.log(data)
        console.log(forecast)
        console.log(location)
    }, [dispatch]);

    return (
        <div>
            <h3>
                {data.name}({data.sys.country}) - {data.weather[0].description}
            </h3>
            <h1> {data.main.temp} </h1>
            <span> Sensacion Termica de {data.main.feels_like} </span>
            <b> {data.main.temp_max} </b> <i> {data.main.temp_min} </i>
            <p> Humedad: {data.main.humidity}% </p>
            <p> Viento a {data.wind.speed} km/h </p>
            <p> Presion {data.main.pressure} mbar </p>
        </div>
    );
};

export default Weather;
