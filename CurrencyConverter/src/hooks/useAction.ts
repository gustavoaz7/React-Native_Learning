import { useStore } from '../redux/store';

type ActionCreator = (...args: any) => any;

export const useAction = (actionCreator: ActionCreator) => {
  const store = useStore();

  return (...args: any[]) => store.dispatch(actionCreator(...args));
};
