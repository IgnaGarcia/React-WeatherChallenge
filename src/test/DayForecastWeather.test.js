import React from 'react';
import { render } from '@testing-library/react';
import DayForecastWeather from '../components/atoms/DayForecastWeather';

test('renders content', () => {
    const date = "2021-10-29"
    const weather = [
        {
            main: {
                temp_min: 30,
                temp_max: 40,
            },
            weather: [
                {
                    description: "caluroso"
                }
            ]
        },
        {
            main: {
                temp_min: 35,
                temp_max: 45,
            },
            weather: [
                {
                    description: "muy caluroso"
                }
            ]
        }
    ]

    const component = render(<DayForecastWeather date={date} weather={weather} />)
    
    component.getByText('29/10')
    component.getByText('caluroso')
    component.getByText('30°')
    component.getByText('45°')    
})