import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { fetchCurrentWeatherAction, fetchForecastAction } from "../../store/slices/weather/weatherSlice";
import { fetchLocationAction } from "../../store/slices/location/locationSlice";
import { useDispatch, useSelector } from "react-redux";

import CurrentWeather from "../molecules/CurrentWeather";
import ForecastWeather from "../molecules/ForecastWeather";
import CitySelector from "../atoms/CitySelector";

const WeatherCard = styled.main`
    border: 1px solid #555;
    box-shadow: 0px 0px 30px -15px #555;
    background: #292A2D;
    border-radius: 15px;
    width: 45%;
    padding: 2em 0 0em 0;    
    display: flex;
    flex-direction: column;
`;

const Home = () => {
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
        <WeatherCard>
            <CitySelector setCity={setCity} initCity={initCity}/>
            <CurrentWeather />
            <ForecastWeather />
        </WeatherCard>
    );
};

export default Home;
