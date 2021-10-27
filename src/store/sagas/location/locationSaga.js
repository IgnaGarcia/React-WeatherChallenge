import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLocation } from "../../../service/locationService";
import { setLocation, fetchLocationAction } from "../../slices/location/locationSlice";

function* fetchCurrentLocation(action) {
   try {
      const location = yield call(fetchLocation);
      yield put(setLocation(location));
   } catch (e) {
      console.log(e);
   }
}

function* locationSaga() {
   yield takeLatest(fetchLocationAction, fetchCurrentLocation);
}

export default locationSaga;