import { createAction } from '../helpers';
import { CHANGE_THEME_COLOR } from '../constants';
import { TThemeColors } from '../types';

export const changeTheme = (payload: TThemeColors) =>
  createAction(CHANGE_THEME_COLOR, payload);
