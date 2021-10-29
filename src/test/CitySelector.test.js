import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CitySelector from '../components/atoms/CitySelector';

test('renders content', () => {
    const initCity = "Ituzaingó"
    const component = render(<CitySelector initCity={initCity}/>)
   
    component.getByText(`Ciudad Actual (${initCity})`)
    component.getByText('Roma - Italia')
    component.getByText('Londres - Inglaterra')
})