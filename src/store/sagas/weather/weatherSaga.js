import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCurrentWeatherOf, fetchForecastWeatherOf } from "../../../service/weatherService";
import { setCurrentWeather, setForecast, fetchCurrentWeatherAction, fetchForecastAction } from "../../slices/weather/weatherSlice";

function* fetchCurrentWeather(action) {
   try {
      const weather = yield call(fetchCurrentWeatherOf, action.payload);
      yield put(setCurrentWeather(weather));
   } catch (e) {
      console.log(e);
   }
}

function* fetchForecast(action) {
   try {
      const forecast = yield call(fetchForecastWeatherOf, action.payload);
      yield put(setForecast(forecast));
   } catch (e) {
      console.log(e);
   }
}

function* weatherSaga() {
   yield takeLatest(fetchCurrentWeatherAction, fetchCurrentWeather);
   yield takeLatest(fetchForecastAction, fetchForecast);
}

export default weatherSaga;
