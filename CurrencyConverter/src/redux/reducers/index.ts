import { combineReducers } from 'redux';

import { currenciesReducer } from './currency';

const rootReducer = combineReducers({
  currency: currenciesReducer,
});

export default rootReducer;
