import { combineReducers } from 'redux';

import { currenciesReducer } from './currency';

export default combineReducers({
  currency: currenciesReducer,
});
