import { createAction, createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "location",
    initialState: {
        location: { }
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        }
    },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const fetchLocationAction = createAction("location/fetchLocation")