import { ReducerState } from '../types';

const selector = (state: ReducerState) => state.theme;

export const backgroundColorSelector = (state: ReducerState) =>
  selector(state).backgroundColor;

export const colorSelector = (state: ReducerState) => selector(state).color;
