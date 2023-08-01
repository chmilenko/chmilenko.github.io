import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Components/TableData/dataSlice";
const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
