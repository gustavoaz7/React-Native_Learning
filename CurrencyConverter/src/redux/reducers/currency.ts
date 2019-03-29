import { Reducer } from 'redux';
import { SWAP_CURRENCY, CHANGE_CHURRENCY_AMOUNT } from '../constants';
import * as currencyActions from '../actions/currency';
import { ExtractActions } from '../helpers';

interface IState {
  baseCurrency: string;
  quoteCurrency: string;
  amount: number;
  error: object | null;
  conversions: object;
}

const initialState: IState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  error: null,
  conversions: {},
};

type CurrencyActions = ExtractActions<
  typeof currencyActions[keyof typeof currencyActions]
>;

export const currenciesReducer: Reducer<IState, CurrencyActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return { ...state, amount: action.payload || 0 };
    case CHANGE_CHURRENCY_AMOUNT:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};
