# useFunctionState

[![npm package](https://img.shields.io/npm/v/use-function-state.svg?style=flat-square)](https://www.npmjs.com/package/use-function-state)
[![license](https://img.shields.io/github/license/jeysal/use-function-state.svg?style=flat-square)](https://github.com/jeysal/use-function-state/blob/master/LICENSE)

React's [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook has [special behavior](https://reactjs.org/docs/hooks-reference.html#functional-updates) if it is passed a function as initial or updated state. This can be convenient, but makes life hard if you actually just want to store a function in the state.

This hook allows you to easily store a function as React state. It is implemented via a simple [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) call and has proper TypeScript definitions.

## Example

```jsx
import useFunctionState from 'use-function-state';

const initialFn = () => {};
const Comp = () => {
  const [fn, setFn] = useFunctionState(initialFn);

  return (
    <>
      {typeof fn /* 'function' (useState would have made this undefined) */}
      {setFn.length /* 1 (the newFn parameter of the setter) */}
    </>
  );
};
```

See [example.test.tsx](test/example.test.tsx) for a more realistic usage example.
