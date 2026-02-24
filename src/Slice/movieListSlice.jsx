import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=0b28a80aa12a2ad7274f0ed73dfcd8ae",
  );
  const data = await response.json();
  return data.results;
});

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieListSlice.reducer;
