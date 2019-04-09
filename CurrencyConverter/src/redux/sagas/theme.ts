/**
 * REDUX-SAGA 101
 * fork(fn, ...args) = perform a non-blocking call on fn
 * call(fn, ...args) = call fn with args as arguments
 * put(action) = dispatch an action to the store
 * select(selector, ...args) = invoke provided selector on the current store's state
 *    select() = effect is resolved with the entire satate
 * take(pattern) = wait for a specified action on the store. The Generator is suspended until an action that matches pattern is dispatched.
 *    The result of yield take(pattern) is an action object being dispatched.
 *    If no parttern or '*', all dispatched actions are matched
 *    If pattern is a function, the action is matched if pattern(action) is true
 *    If pattern is a string, the action is matched if action.type === pattern
 *    If pattern is an array, each item in the array is matched (array of strings: action.type is matched against all items in the array).
 * takeEvery(pattern, saga, ...args) = spawns a saga on each action dispatched to the store that matches pattern
 * takeLatest(pattern, saga, ...args) = spawns a saga on each action dispatched to the store that matches pattern,
 *    and automatically cancels any previous saga task started previously if it's still running
 * race(effects) = run a Race between multiple Effects (similar to how Promise.race([]) behaves).
 */
import AsyncStorage from '@react-native-community/async-storage';
import { takeEvery, take, fork, all, call, put } from 'redux-saga/effects';
import { GET_STORED_THEME, CHANGE_THEME_COLOR, THEME_KEY } from '../constants';
import { changeTheme as changeThemeAction } from '../actions/theme';
import { TThemeColors } from '../types';

type TChangeThemeAction = ReturnType<typeof changeThemeAction>;

function* getStoredTheme() {
  yield take(GET_STORED_THEME);
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
    yield fork(getStoredTheme),
    yield takeEvery(CHANGE_THEME_COLOR, changeTheme),
  ]);
}
