# useFunctionState

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
