import { createAction } from '../helpers';
import { GET_STORED_THEME, CHANGE_THEME_COLOR } from '../constants';
import { TThemeColors } from '../types';

export const getStoredTheme = () => createAction(GET_STORED_THEME);

export const changeTheme = (payload: TThemeColors) =>
  createAction(CHANGE_THEME_COLOR, payload);
