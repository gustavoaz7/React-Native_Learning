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

import { all, fork } from 'redux-saga/effects';
import { currencySagas } from './currency';
import { themeSagas } from './theme';

export function* rootSaga() {
  yield all([yield fork(currencySagas), yield fork(themeSagas)]);
}
