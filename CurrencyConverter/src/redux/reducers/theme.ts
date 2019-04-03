import { Reducer } from 'redux';
import { CHANGE_THEME_COLOR } from '../constants';
import * as themeActions from '../actions/theme';
import { ExtractActions } from '../types';
import themes from '../../styles/themes';

interface ITheme {
  backgroundColor: string;
  color: string;
}

const initialState: ITheme = {
  ...themes.Blue,
};

type themeActions = ExtractActions<
  typeof themeActions[keyof typeof themeActions]
>;

export const themeReducer: Reducer<ITheme, themeActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return { ...themes[action.payload] };
    default:
      return state;
  }
};
