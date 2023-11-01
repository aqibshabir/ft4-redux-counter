import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: "ADD" });
  };
  const minus = () => {
    dispatch({ type: "MINUS" });
  };

  return (
    <>
      <button onClick={add}>Add</button>
      {count}
      <button onClick={minus}>Minus</button>
    </>
  );
};

export default App;
