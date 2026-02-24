import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
        query: () => "movie/popular?api_key=0b28a80aa12a2ad7274f0ed73dfcd8ae",
    }),
    getNewMovies: builder.query({
        query: () => "movie/upcoming?api_key=0b28a80aa12a2ad7274f0ed73dfcd8ae",
    }),
    getMovieById: builder.query({
    // DİKKAT: Bu sefer query bir fonksiyon ve içine 'id' alıyor!
    query: (id) => `movie/${id}?api_key=0b28a80aa12a2ad7274f0ed73dfcd8ae&language=tr-TR`,
  }),
  }),
});

export const { useGetMoviesQuery, useGetNewMoviesQuery, useGetMovieByIdQuery } = moviesApi;