import React from "react";
import styled from "styled-components";

const DayForecast = styled.li`
    width: auto;
    height: 100px;
    margin: 5px 5px 0 5px;
    color: #bfbfbf;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
        font-size: .9em;
    }
    .max{
        font-size: 1.1em;
        font-weight: 600;
    }
    .min{
        font-size: 1.1em;
    }
    .description{
        color: #f5f5f5;
    }
`;

const DayForecastWeather = ({ weather, date }) => {
    let max = 0
    let min = 0
    let flag = true

    weather.forEach(el =>{
        if(flag){
            max = el.main.temp_max
            min = el.main.temp_min
            flag = false
        } else if(max < el.main.temp_max) max = el.main.temp_max
        else if(min > el.main.temp_min) min = el.main.temp_min
    })

    return (
        <DayForecast>
            <h3> {date} </h3>
            <p> 
                <span className="max">{Math.round(max)}°</span> <span className="min">{Math.round(min)}° </span>
            </p>
            <p className="description"> {weather[0].weather[0].description} </p>
            {/*
                weather.map(value => 
                    <>
                        <span> {weather.dt_txt.split(' ')} </span>
                        <span> {weather.weather[0].description} </span>
                        <span> {weather.main.temp} </span>
                        <span> ST {weather.main.feels_like} </span>
                        <span> max {weather.main.temp_max} </span>
                        <span> min {weather.main.temp_min} </span>
                        <span> viento a {weather.wind.speed} km/h </span>
                        <span> humedad {weather.main.humidity} mbar </span>
                    </>
                )
            */
            }
        </DayForecast>
    )
}

export default DayForecastWeather;