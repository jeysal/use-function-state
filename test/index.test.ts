import { act, renderHook } from '@testing-library/react-hooks';
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

  it('returns a dispatch function that sets a new state value', () => {
    const newFn = () => {};
    const { result } = renderHook(() => useFunctionState());

    const {
      current: [, setFn],
    } = result;
    act(() => {
      setFn(newFn);
    });

    const {
      current: [fn],
    } = result;
    expect(fn).toBe(newFn);
  });
});

describe('with an initial fn', () => {
  const initialFn = () => {};

  it('returns the initial fn as the state value', () => {
    const {
      result: {
        current: [fn],
      },
    } = renderHook(() => useFunctionState(initialFn));
    expect(fn).toBe(initialFn);
  });

  it('returns a dispatch function that sets a new state value', () => {
    const newFn = () => {};
    const { result } = renderHook(() => useFunctionState(initialFn));

    const {
      current: [, setFn],
    } = result;
    act(() => {
      setFn(newFn);
    });

    const {
      current: [fn],
    } = result;
    expect(fn).toBe(newFn);
  });
});
