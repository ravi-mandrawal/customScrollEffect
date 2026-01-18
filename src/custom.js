import { useState } from "react";

const useCustome = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
  const MinCount = () => {
    setCount(count - 1);
  };

  return { count, plusCount, MinCount };
};

// function useCustome() {
//   const [count, setCount] = useState(0);
//   const plusCount = () => {
//     setCount(count + 1);
//   };
//   const MinCount = () => {
//     setCount(count - 1);
//   };

//   return { count, plusCount, MinCount };
// }

export default useCustome;
