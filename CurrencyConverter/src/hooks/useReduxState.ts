import { useEffect, useState } from 'react';

import { useReduxStore } from '../redux/store';
import { ReducerState } from '../redux/types';

// TODO: Check if this is triggering a re-render of every function using this hook
export function useReduxState<S extends (state: ReducerState) => any>(
  selector: S,
) {
  type Result = S extends (...args: any[]) => infer R ? R : any;
  const store = useReduxStore();

  const [result, setResult] = useState<Result>(() =>
    selector(store.getState()),
  );

  useEffect(
    () =>
      store.subscribe(() => {
        if (!selector) {
          setResult(undefined as any);
          return;
        }

        const newResult = selector(store.getState());
        if (Object.is(newResult, result)) {
          return;
        }
        setResult(newResult);
      }),
    [store, result],
  );

  return result;
}
