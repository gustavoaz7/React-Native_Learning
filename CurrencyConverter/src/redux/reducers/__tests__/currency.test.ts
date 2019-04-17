import { currenciesReducer, initialState } from '../currency';
import {
  swapCurrency,
  changeBaseCurrency,
  changeCurrencyAmount,
  changeQuoteCurrency,
  conversionSuccess,
  conversionError,
} from '../../actions/currency';
import { mockAPI } from './mockAPI';

describe('Currency Reducer', () => {
  test('swapCurrency', () => {
    const newState = currenciesReducer(initialState, swapCurrency());
    expect(newState).toEqual({
      ...initialState,
      baseCurrency: initialState.quoteCurrency,
      quoteCurrency: initialState.baseCurrency,
    });
  });
  test('changeBaseCurrency', () => {
    const baseCurrency = 'GBP';
    const newState = currenciesReducer(
      initialState,
      changeBaseCurrency(baseCurrency),
    );
    expect(newState).toEqual({ ...initialState, baseCurrency });
  });
  test('changeQuoteCurrency', () => {
    const quoteCurrency = 'DKK';
    const newState = currenciesReducer(
      initialState,
      changeQuoteCurrency(quoteCurrency),
    );
    expect(newState).toEqual({ ...initialState, quoteCurrency });
  });
  test('changeCurrencyAmount', () => {
    const amount = 150;
    const newState = currenciesReducer(
      initialState,
      changeCurrencyAmount(amount),
    );
    expect(newState).toEqual({ ...initialState, amount });
  });
  test('conversionSuccess', () => {
    const newState = currenciesReducer(
      initialState,
      conversionSuccess(mockAPI),
    );
    expect(newState).toEqual({
      ...initialState,
      baseCurrency: mockAPI.base,
      conversions: {
        ...initialState.conversions,
        [mockAPI.base]: { ...mockAPI },
      },
    });
    // expect(newState.baseCurrency).toEqual(mockAPI.base);
    // expect(newState.conversions).toEqual({
    //   ...initialState.conversions,
    //   [mockAPI.base]: { ...mockAPI },
    // });
  });
  test('conversionError', () => {
    const newState = currenciesReducer(initialState, conversionError(true));
    expect(newState).toEqual({ ...initialState, error: true });
  });
});
