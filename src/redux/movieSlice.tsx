// src/redux/movieSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  poster: string;
}

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: []
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    }
  }
});

export const { addMovie, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
