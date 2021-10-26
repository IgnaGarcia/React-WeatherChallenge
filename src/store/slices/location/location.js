import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "location",
    initialState: {
        location: {
            city: "",
            country: "",
            countryCode: "",
            regionName: ""
        }
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        }
    },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const fetchLocation = () => (dispatch) => {
    fetch(`http://ip-api.com/json`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch(setLocation(data))
        })
        .catch((err) => console.error(err));
};
