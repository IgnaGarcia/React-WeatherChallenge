import React, { useState, useEffect } from "react";
import { fetchCurrentWeatherAction, fetchForecastAction } from "../../store/slices/weather/weatherSlice";
import { fetchLocationAction } from "../../store/slices/location/locationSlice";
import { useDispatch, useSelector } from "react-redux";

import CurrentWeather from "../molecules/CurrentWeather";
import ForecastWeather from "../molecules/ForecastWeather";

const Weather = () => {
    const [city, setCity] = useState(undefined)
    const [initCity, setInitCity] = useState(undefined)

    const { location } = useSelector((state) => state.locationSlice);
    const dispatch = useDispatch();


    const setCurrentCity = () => {
        dispatch(fetchLocationAction());
        setCity(location.city);
        setInitCity(location.city);
    }

    useEffect(() => {
        if(city === undefined){ setCurrentCity(); }
        else {
            dispatch(fetchCurrentWeatherAction(city));
            dispatch(fetchForecastAction(city));
        }
    }, [dispatch, city, location.city]);

    return (
        <>
            <ul>
                <li><button onClick={() => setCity(initCity)}> Ciudad Actual ({initCity}) </button></li>
                <li><button onClick={() => setCity("Roma")}> Roma </button></li>
                <li><button onClick={() => setCity("Montevideo")}> Montevideo </button></li>
                <li><button onClick={() => setCity("Paris")}> Paris </button></li>
            </ul>
            <CurrentWeather />
            <ForecastWeather />
        </>
    );
};

export default Weather;
