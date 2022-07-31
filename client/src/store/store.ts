import {configureStore} from '@reduxjs/toolkit';
import {superHeroReducer} from './superHeroes/superHero.slice';
import {superHeroesDataReducer} from './superHeroes/superHeroes.slice';


const store = configureStore({
    reducer: {
      superHero: superHeroReducer,
      superHeroes: superHeroesDataReducer,
    },
  }
);


export type TypeRootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;