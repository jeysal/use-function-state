import { Dispatch, useReducer } from 'react';

type FunctionStateReducer<F extends Function | undefined> = (
  state: F,
  newFn: F,
) => F;
const reducer = <F extends Function | undefined>(_state: F, newFn: F) => newFn;

export default function useFunctionState<F extends Function>(
  initialFn: F,
): [F, Dispatch<F>];
export default function useFunctionState<F extends Function>(): [
  F | undefined,
  Dispatch<F | undefined>,
];
export default function useFunctionState<F extends Function>(
  initialFn?: F,
): [F | undefined, Dispatch<F | undefined>] {
  return useReducer<FunctionStateReducer<F | undefined>>(reducer, initialFn);
}
