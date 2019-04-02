import { Reducer } from 'redux';
import { SWAP_CURRENCY, CHANGE_CHURRENCY_AMOUNT } from '../constants';
import * as currencyActions from '../actions/currency';
import { ExtractActions } from '../helpers';

// TODO: How to create a type from all elements in a string array
type TCurrencies =
  | 'AUD'
  | 'BGN'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JPY'
  | 'KRW'
  | 'MXN'
  | 'MYR'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PLN'
  | 'RON'
  | 'RUB'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TRY'
  | 'USD'
  | 'ZAR';
  
interface IState {
  baseCurrency: TCurrencies;
  quoteCurrency: TCurrencies;
  amount: number;
  error: object | null;
  conversions: {
    [key in TCurrencies]?: {
      isFetching: boolean;
      base: string;
      date: string;
      rates: {
        [key1 in TCurrencies]: number
      };
    }
  };
}

const initialState: IState = {
  baseCurrency: 'BRL',
  quoteCurrency: 'USD',
  amount: 1,
  error: null,
  conversions: {
    BRL: {
      isFetching: false,
      base: 'BRL',
      date: '2019-04-01',
      rates: {
        BGN: 0.4489486732,
        NZD: 0.3777890001,
        ILS: 0.9353135617,
        RUB: 16.9279450923,
        CAD: 0.3444587274,
        USD: 0.257919383,
        PHP: 13.5368653016,
        CHF: 0.2566339179,
        AUD: 0.3621109173,
        JPY: 28.619961436,
        TRY: 1.4262923515,
        HKD: 2.0246304288,
        MYR: 1.0524286108,
        HRK: 1.7048021302,
        CZK: 5.9202552566,
        IDR: 3668.9032228446,
        DKK: 1.7133642457,
        NOK: 2.2123771922,
        HUF: 73.6938756772,
        GBP: 0.1966256542,
        MXN: 4.9682536039,
        THB: 8.1849692407,
        ISK: 31.6086677073,
        ZAR: 3.6538196676,
        BRL: 1,
        SGD: 0.3492103572,
        PLN: 0.9868239831,
        INR: 17.8790974199,
        KRW: 292.7279405013,
        RON: 1.0932421265,
        CNY: 1.7310164356,
        SEK: 2.3918832063,
        EUR: 0.2295473327,
      },
    },
  },
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
    default:
      return state;
  }
};
