import {combineReducers} from 'redux';
import RestaurantReducer from './restaurant_reducer';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer
});

export default rootReducer;