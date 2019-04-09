import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
} from '../constants';
import { TCurrencies, ExtractActions } from '../types';
import * as currencyActions from '../actions/currency';
import { baseCurrencySelector } from '../selectors/currency';

type CurrencyActions = ExtractActions<
  typeof currencyActions[keyof typeof currencyActions]
>;

const getLatestRate = (currency: TCurrencies) =>
  fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`);

function* fetchConversionRates(action: CurrencyActions) {
  try {
    let currency = action.payload;
    if (currency === undefined) {
      currency = yield select(baseCurrencySelector);
    }
    const response = yield call(getLatestRate, currency as TCurrencies);
    const result = yield response.json();
    if (result.error) {
      yield put(currencyActions.conversionError(result.error));
    } else {
      yield put(currencyActions.conversionSuccess(result));
    }
  } catch (e) {
    yield put(currencyActions.conversionError(true));
    console.log('fetchConversionRates error: ', e);
  }
}

export function* currencySagas() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchConversionRates);
}
