import { useEffect, useReducer, useState } from "react";
import {
  initialState,
  pageReducer,
  ActionType,
} from "../../utils/page-reducer";
// import { useReducer } from "../../hook/reducer";

const Home = () => {
  const [pageParams, dispatchPage] = useReducer(pageReducer, initialState);

  const preHandle = () => {
    dispatchPage({
      type: ActionType.page,
      value: pageParams.page - 1,
    });
  };

  const nextHandle = () => {
    dispatchPage({
      type: ActionType.page,
      value: pageParams.page + 1,
    });
  };

  const sizeHandle = (size: number) => {
    dispatchPage({
      type: ActionType.size,
      value: size,
    });
  };

  const resetHandle = () => {
    dispatchPage({
      type: ActionType.reset,
    });
  };

  return (
    <>
      <button onClick={preHandle}>pre</button>
      <button onClick={nextHandle}>next</button>
      <button onClick={() => sizeHandle(10)}>size-10</button>
      <button onClick={() => sizeHandle(20)}>size-20</button>
      <button onClick={() => sizeHandle(30)}>size-30</button>
      <button onClick={resetHandle}>reset</button>
      这是home-{pageParams.page}-{pageParams.size}
    </>
  );
};
export default Home;
