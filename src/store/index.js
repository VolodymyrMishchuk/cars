import { configureStore } from '@reduxjs/toolkit';
import {
    carsReduser,
    addCar,
    removeCar,
    changeSearchTerm
} from './slices/carsSlice';
import {
    formReduser,
    changeName,
    changeCost
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReduser,
        form: formReduser
    }
});

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};