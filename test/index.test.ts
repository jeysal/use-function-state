import { renderHook } from '@testing-library/react-hooks';
import useFunctionState from '../src';

describe('without an initial fn', () => {
  it('returns undefined as the state value', () => {
    const {
      result: {
        current: [fn],
      },
    } = renderHook(() => useFunctionState());
    expect(fn).toBe(undefined);
  });
});

describe('with an initial fn', () => {
  it('returns the initial fn as the state value', () => {
    const initialFn = () => {};
    const {
      result: {
        current: [fn],
      },
    } = renderHook(() => useFunctionState(initialFn));
    expect(fn).toBe(initialFn);
  });
});
