import { Reducer } from 'redux';
import {
  SWAP_CURRENCY,
  CHANGE_CHURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CONVERSION_SUCCESS,
  CONVERSION_ERROR,
} from '../constants';
import * as currencyActions from '../actions/currency';
import { ExtractActions, ICurrencyApi } from '../types';
import { TCurrencies } from '../types';

interface IState {
  readonly baseCurrency: TCurrencies;
  readonly quoteCurrency: TCurrencies;
  readonly amount: number;
  readonly error: string | boolean;
  readonly conversions: { [key in TCurrencies]?: ICurrencyApi };
}

const initialState: IState = {
  baseCurrency: 'BRL',
  quoteCurrency: 'USD',
  amount: 1,
  error: false,
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
    case CHANGE_CHURRENCY_AMOUNT:
      return { ...state, amount: action.payload || 0 };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_BASE_CURRENCY:
      return { ...state, baseCurrency: action.payload };
    case CHANGE_QUOTE_CURRENCY:
      return { ...state, quoteCurrency: action.payload };
    case CONVERSION_SUCCESS:
      const { base } = action.payload;
      return {
        ...state,
        baseCurrency: base,
        conversions: {
          ...state.conversions,
          [base]: { ...action.payload },
        },
      };
    case CONVERSION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
