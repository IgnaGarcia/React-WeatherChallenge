import React from 'react';
import { render } from '@testing-library/react';
import LocationInfo from '../components/atoms/LocationInfo';

test('renders content', () => {
    const currentWeather = {
        name: "Ituzaingó",
        sys: {
            country: "AR"
        },
        weather: [
            {
                description: "caluroso"
            }
        ]
    }

    const component = render(<LocationInfo currentWeather={currentWeather}/>)
    
    component.getByText('Ituzaingó(AR)')
    component.getByText('caluroso') 
})