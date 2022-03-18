import {configureStore} from "@reduxjs/toolkit";
import assassinReducer from "slices/assassin";

const store = configureStore({
  reducer: {
    assassin: assassinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
