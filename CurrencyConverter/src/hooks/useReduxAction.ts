import { useReduxStore } from '../redux/store';

type ActionCreator = (...args: any) => any;

export const useReduxAction = (actionCreator: ActionCreator) => {
  const store = useReduxStore();

  return (...args: any[]) => store.dispatch(actionCreator(...args));
};
