import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {superHeroAction} from '../store/superHeroes/superHero.slice';


const allActions = {
  ...superHeroAction
};

const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};


export default useAction;