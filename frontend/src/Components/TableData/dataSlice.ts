import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./Types/dataTypes";
import * as api from "./api";

const initialState: State = {
  dataList: [],
  error: undefined,
};

export const initialListData = createAsyncThunk("data/load", () =>
  api.initDataList()
);

const dataSlice = createSlice({
  name: "loadListData",
  initialState,
  reducers: {
    sortDataListById: (state, action) => {
      state.dataList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initialListData.fulfilled, (state, action) => {
        state.dataList = action.payload;
      })
      .addCase(initialListData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { sortDataListById } = dataSlice.actions;
export default dataSlice.reducer;
