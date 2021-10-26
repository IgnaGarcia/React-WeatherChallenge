import { configureStore } from '@reduxjs/toolkit';

import weather from './slices/weather/weather';
import location from './slices/location/location';

export default configureStore({
    reducer: {
        weather,
        location
    }
})