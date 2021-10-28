import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import WeatherInfo from "../atoms/WeatherInfo";
import LocationInfo from "../atoms/LocationInfo";

const Weather = styled.div`
    margin: 1.4em 3em;
    display: flex;
    justify-content: space-between;
`;

const CurrentWeather = () => {
    const { currentWeather } = useSelector((state) => state.weatherSlice);

    return (
        <Weather>
            {currentWeather.name !== undefined ? (
                <>
                    <WeatherInfo currentWeather={currentWeather}/>
                    <LocationInfo currentWeather={currentWeather} />
                </>
            ) : (
                ""
            )}
        </Weather>
    );
};

export default CurrentWeather;
