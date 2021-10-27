import React from 'react'

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
        <div>
            <h3> {date} </h3>
            <p> <b>{Math.round(max)}°</b> - <i>{Math.round(min)}°</i> </p>
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
        </div>
    )
}

export default DayForecastWeather;