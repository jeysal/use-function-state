import useFunctionState from '../src';
import React, { createContext, useContext, useEffect } from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

// A React context containing a handler function and a setter for it
type Handler = (value: string) => void;
interface HandlerContextValue {
  handler?: Handler;
  setHandler: (handler?: Handler) => void;
}
const HandlerContext = createContext<HandlerContextValue>({
  handler: undefined,
  setHandler: () => {},
});

// A parent component that provides the context and renders
// * Child1 consuming it to set the handler, and
// * Child2 consuming it to call the handler
const Parent: React.FC<{}> = () => {
  // changing useFunctionState to useState in the next line breaks the test!
  const [handler, setHandler] = useFunctionState<Handler>();

  return (
    <HandlerContext.Provider value={{ handler, setHandler }}>
      <Child1 />
      <Child2 />
    </HandlerContext.Provider>
  );
};

// The test handler set by Child1
const mockHandler = jest.fn();

// The child component setting the handler
const Child1: React.FC<{}> = () => {
  const { setHandler } = useContext(HandlerContext);
  useEffect(() => {
    setHandler(mockHandler);

    return () => setHandler();
  }, [setHandler]);
  return null;
};

// The child component calling the handler
const Child2: React.FC<{}> = () => {
  const { handler } = useContext(HandlerContext);
  return <button onClick={() => handler && handler('Hello World!')} />;
};

// The test showing that useFunctionState manages the function state correctly
// and can be used for this React context use case
test('useFunctionState for a handler context', () => {
  let result!: ReactTestRenderer;
  act(() => {
    result = create(<Parent />);
  });

  const button = result.root.findByType('button');
  act(() => button.props.onClick());

  expect(mockHandler).toHaveBeenCalledWith('Hello World!');
});
