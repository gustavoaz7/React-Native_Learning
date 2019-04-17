import { themeReducer, initialState } from '../theme';
import { changeTheme } from '../../actions/theme';
import themes from '../../../styles/themes';

describe('Theme reducer', () => {
  test.only('changeTheme', () => {
    const newState = themeReducer(initialState, changeTheme('Orange'));
    expect(newState).toEqual(themes.Orange);
  });
});
