import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/root";
import weatherSlice from "./slices/weather/weatherSlice";
import locationSlice from "./slices/location/locationSlice";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        weatherSlice,
        locationSlice
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
})


sagaMiddleware.run(rootSaga)