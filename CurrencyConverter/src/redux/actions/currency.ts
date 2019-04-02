import { createAction } from '../helpers';
import {
  SWAP_CURRENCY,
  CHANGE_CHURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
} from '../constants';
import { TCurrencies } from '../types';

export const swapCurrency = () => createAction(SWAP_CURRENCY);

export const changeCurrencyAmount = (payload: number) =>
  createAction(CHANGE_CHURRENCY_AMOUNT, payload);

export const changeBaseCurrency = (payload: TCurrencies) =>
  createAction(CHANGE_BASE_CURRENCY, payload);

export const changeQuoteCurrency = (payload: TCurrencies) =>
  createAction(CHANGE_QUOTE_CURRENCY, payload);
