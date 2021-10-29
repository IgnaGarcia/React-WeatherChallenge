import React from 'react';
import { render } from '@testing-library/react';
import WeatherInfo from '../components/atoms/WeatherInfo';

test('renders content', () => {
    const currentWeather = {
        name: "Ituzaingó",
        sys: {
            country: "AR"
        },
        main: {
            temp: 40,
            temp_max: 45,
            temp_min: 35,
            feels_like: 50,
            humidity: 1,
            pressure: 1024
        },
        weather: [
            {
                description: "caluroso"
            }
        ],
        wind: {
            speed: 24
        }
    }

    const component = render(<WeatherInfo currentWeather={currentWeather}/>)
    
    component.getByText('45° maxima 35° minima')
    component.getByText('40°') 
    component.getByText('Sensacion Termica: 50°') 
    component.getByText('Humedad: 1%') 
    component.getByText('Viento: 24 km/h') 
    component.getByText('Presion: 1024 mbar') 
})