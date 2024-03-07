import { useState } from "react";

type ReducerType<T, R> = (state: T, action: R) => T;

// function useReducer<T,R>(
//     reducer: ReducerType<T,R>,
//     initialState: R,
// ): [T, Dispatch<R>];

// type ReducerFn

// function reducerFn<T, R>(reducer: ReducerType<T, R>, initialState: T) {
//   const [state, setState] = useState<T>(initialState);

//   const dispatch = (action: R) => {
//     const newState = reducer(state, action);
//     setState(newState);
//   };

//   return [state, dispatch];
// }

type Dispatch<R> = (value: R) => void;

// // 定义一个泛型类型
// type ReducerFunction<T, R> = (
//   reducer: ReducerType<T, R>,
//   initialState: T
// ) => [T, Dispatch<R>];

// const useReducer: ReducerFunction<T,R> = ()=>{

// }

const useReducer = <R, T>(reducer: ReducerType<T, R>, initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const dispatch = (action: R) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

export { useReducer };
