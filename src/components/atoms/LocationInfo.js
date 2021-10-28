import React from 'react';
import styled from "styled-components";

const LocationInfoDiv = styled.div`
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

const LocationInfo = ({ currentWeather }) => {
    return (
        <LocationInfoDiv>
            <h3> {currentWeather.name}({currentWeather.sys.country}) </h3>
            <p> {currentWeather.weather[0].description} </p>
        </LocationInfoDiv>
    )
}

export default LocationInfo
