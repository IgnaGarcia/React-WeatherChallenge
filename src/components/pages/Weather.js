import React, { useEffect } from "react";
import { fetchCurrentWeatherOf, fetchForecastWeatherOf } from "../../store/slices/weather/weather";
import { fetchLocation } from "../../store/slices/location/location";
import { useDispatch, useSelector } from "react-redux";

import CurrentWeather from "../molecules/CurrentWeather";
import ForecastWeather from "../molecules/ForecastWeather";

const Weather = () => {
    const { location } = useSelector((state) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLocation());
        dispatch(fetchCurrentWeatherOf(location.city));
        dispatch(fetchForecastWeatherOf(location.city));
    }, [dispatch]);

    return (
        <>
            <CurrentWeather />
            <ForecastWeather />
        </>
    );
};

export default Weather;
