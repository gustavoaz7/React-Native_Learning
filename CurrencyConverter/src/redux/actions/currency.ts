import { createAction } from '../helpers';
import { SWAP_CURRENCY, CHANGE_CHURRENCY_AMOUNT } from '../constants';

export const swapCurrency = () => createAction(SWAP_CURRENCY);

export const changeCurrencyAmount = (payload: number) =>
  createAction(CHANGE_CHURRENCY_AMOUNT, payload);
