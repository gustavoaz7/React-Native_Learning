import { combineReducers } from 'redux';

import { currenciesReducer } from './currency';
import { themeReducer } from './theme';

const rootReducer = combineReducers({
  currency: currenciesReducer,
  theme: themeReducer,
});

export default rootReducer;
