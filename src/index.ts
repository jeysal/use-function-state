import { Dispatch, useReducer } from 'react';

function reducer<F extends Function | undefined>(_state: F, newFn: F) {
  return newFn;
}

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
  return useReducer(reducer, initialFn);
}
