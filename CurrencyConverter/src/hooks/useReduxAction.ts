import { useReduxStore } from '../redux/context';

type ActionCreator = (...args: any) => any;

export const useReduxAction = (actionCreator: ActionCreator) => {
  const store = useReduxStore();

  return (...args: any[]) => store.dispatch(actionCreator(...args));
};
