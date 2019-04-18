import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { CHANGE_THEME_COLOR, THEME_KEY } from '../constants';
import { changeTheme as changeThemeAction } from '../actions/theme';
import { TThemeColors } from '../types';

type TChangeThemeAction = ReturnType<typeof changeThemeAction>;

function* onRehydrate() {
  try {
    const storedTheme: TThemeColors | null = yield call(
      AsyncStorage.getItem,
      THEME_KEY,
    );
    if (storedTheme) {
      yield put(changeThemeAction(storedTheme));
    } else {
      yield put(changeThemeAction('Blue'));
    }
  } catch (e) {
    yield put(changeThemeAction('Blue'));
    console.log('getStoredTheme error: ', e);
  }
}

function* changeTheme(action: TChangeThemeAction) {
  const theme = action.payload;
  try {
    yield call(AsyncStorage.setItem, THEME_KEY, theme);
  } catch (e) {
    console.log('changeTheme error: ', e);
  }
}

export function* themeSagas() {
  yield all([
    yield takeLatest(REHYDRATE, onRehydrate),
    yield takeLatest(CHANGE_THEME_COLOR, changeTheme),
  ]);
}
