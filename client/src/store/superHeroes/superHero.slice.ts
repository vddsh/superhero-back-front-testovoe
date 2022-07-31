import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISuperHero} from '../../model/model';
import axios from 'axios';
import {SERVER_URL} from './superHeroes.slice';


export const updateSuperHero = createAsyncThunk(
  'superHero/update',
  async ({id, data}: { id: string, data: any }, {rejectWithValue}) => {
    try {
      const res = await axios.patch(`${SERVER_URL}/${id}`, data, {
        headers: {
          'content-Type': 'multipart/form-data'
        },
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteSuperHero = createAsyncThunk(
  'superHero/delete',
  async (id: string, {rejectWithValue}) => {
    try {
      const res = await axios.delete(`${SERVER_URL}/${id}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteSuperHeroImages = createAsyncThunk(
  'superHero/deleteImage',
  async ({id, name}: { id: string, name: string }, {rejectWithValue}) => {
    try {
      const res = await axios.delete(`${SERVER_URL}/${id}/${name}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSuperHero = createAsyncThunk(
  'superHero/getHero',
  async (id: string, {rejectWithValue}) => {
    try {
      const res = await axios.get(`${SERVER_URL}/${id}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState: ISuperHero = {
  _id: '',
  nickname: '',
  real_name: '',
  origin_description: '',
  superpowers: '',
  catch_phrase: '',
  Images: [],
  __v: 0,
};

const superHeroSlice = createSlice({
  name: 'superHero',
  initialState,
  reducers: {
    addHero: (state, action: PayloadAction<ISuperHero>) => {
      return state = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(updateSuperHero.fulfilled, (state, action: PayloadAction<ISuperHero>) => {
      return state = action.payload;
    });
    builder.addCase(deleteSuperHeroImages.fulfilled, (state, action: PayloadAction<ISuperHero>) => {
      return state = action.payload;
    });
    builder.addCase(getSuperHero.fulfilled, (state, action: PayloadAction<ISuperHero>) => {
      return state = action.payload;
    });
    builder.addCase(getSuperHero.pending, (state) => {
      return state = initialState;
    });
  }
});

export const superHeroReducer = superHeroSlice.reducer;
export const superHeroAction = superHeroSlice.actions;