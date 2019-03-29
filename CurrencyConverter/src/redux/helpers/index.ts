export type ExtractActions<AC> = AC extends () => infer A
  ? A
  : (AC extends (payload: any) => infer A ? A : never);

export interface IAction<T extends string, P> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string>(type: T): IAction<T, void>;

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): IAction<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  return !payload ? { type } : { type, payload };
}
