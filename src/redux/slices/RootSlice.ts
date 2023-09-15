import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        transmission: "Transmission"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseTransmission: (state, action) => { state.transmission = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseTransmission } = rootSlice.actions;