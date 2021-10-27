import { all } from "redux-saga/effects";
import weatherSaga from "./weather/weatherSaga";
import locationSaga from "./location/locationSaga";

export function* rootSaga() {
    yield all([weatherSaga(), locationSaga()]);
}

export default rootSaga;