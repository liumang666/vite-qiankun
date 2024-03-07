import { useState } from "react";

type ReducerType<T, R> = (state: T, action: R) => T;

const useReducer = <R, T>(reducer: ReducerType<T, R>, initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const dispatch = (action: R) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

export { useReducer };
