import { createAction } from '../helpers';
import {
  SWAP_CURRENCY,
  CHANGE_CHURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_SUCCESS,
  CONVERSION_ERROR,
} from '../constants';
import { TCurrencies, ICurrencyApi } from '../types';

export const swapCurrency = () => createAction(SWAP_CURRENCY);

export const changeCurrencyAmount = (payload: number) =>
  createAction(CHANGE_CHURRENCY_AMOUNT, payload);

export const changeBaseCurrency = (payload: TCurrencies) =>
  createAction(CHANGE_BASE_CURRENCY, payload);

export const changeQuoteCurrency = (payload: TCurrencies) =>
  createAction(CHANGE_QUOTE_CURRENCY, payload);

export const getInitialConversion = () => createAction(GET_INITIAL_CONVERSION);

export const conversionSuccess = (payload: ICurrencyApi) =>
  createAction(CONVERSION_SUCCESS, payload);

// TODO: remove any type
export const conversionError = (payload: any) =>
  createAction(CONVERSION_ERROR, payload);
