import { Dispatch } from 'react';

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
  return [initialFn, () => {}];
}
