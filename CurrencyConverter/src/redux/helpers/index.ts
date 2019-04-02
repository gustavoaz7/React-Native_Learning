import { IAction } from '../types';

export function createAction<T extends string>(type: T): IAction<T, void>;

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): IAction<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}
