import { combineReducers } from 'redux';
import cartReducer from './Reducer';

const rootReducer = combineReducers({
  reducer: cartReducer,
});

export default rootReducer;
