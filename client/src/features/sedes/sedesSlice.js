import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define la función asíncrona para obtener los datos
export const fetchSedes = createAsyncThunk(
  'sedes/fetchSedes',
  async () => {
    const response = await fetch("http://localhost:3000/sedes");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  sedes: [],
  status: 'idle',
  error: null
};

export const sedesSlice = createSlice({
  name: "sedes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSedes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSedes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sedes = action.payload;
      })
      .addCase(fetchSedes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default sedesSlice.reducer;