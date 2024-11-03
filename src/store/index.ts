import {createStore, combineReducers} from 'redux';
import formReducer from '../reducers/formReducer';
import cardListReducer from '../reducers/cardLIstReduser';
import {composeWithDevTools} from '@redux-devtools/extension';

export const rootReducer = combineReducers({
  field: formReducer,
  list: cardListReducer
});

export const store = createStore(rootReducer, composeWithDevTools()); 
export type RootState = ReturnType<typeof store.getState>
