import {ISuperHeroes} from '../../model/model';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';


export const SERVER_URL = 'http://localhost:5500/api/v1/superheroes';

export const fetchSuperHeroes = createAsyncThunk(
  'superHeroes/fetch',
  async (page: number, {rejectWithValue}) => {
    try {
      const response = await fetch(`${SERVER_URL}?page=${page}`);
      return (await response.json()) as ISuperHeroes;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postSuperHero = createAsyncThunk(
  'superHeroes/post',
  async (data: any, {rejectWithValue}) => {
    try {
        await axios.post(`${SERVER_URL}`, data,{
        headers: {
          'content-Type': 'multipart/form-data'
        },
      })
    } catch (err) {
      return rejectWithValue(err)
    }
  }
);


const initialState: ISuperHeroes = {
  data: [],
  totalPages: 1,
};

const superHeroesDataSlice = createSlice({
  name: 'superHeroesData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSuperHeroes.fulfilled, (state, action: PayloadAction<ISuperHeroes>) => {
      return state = action.payload;
    });
  }
});


export const superHeroesDataReducer = superHeroesDataSlice.reducer;