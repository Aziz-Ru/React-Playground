import { useEffect, useState } from "react";

const useBinarySearch = (arr: number[], target: number) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(arr.length - 1);
  const [notFound, setNotFound] = useState<boolean>(false);
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (left <= right) {
        const mid = Math.floor((left + right) / 2);
        setLeft(left);
        setRight(right);
        if (arr[mid] == target) {
          clearInterval(interval);
          setIsActive(false);
          setNotFound(false);
          setLeft(mid);
          setRight(mid);
        } else if (arr[mid] < target) {
          setLeft(mid + 1);
        } else {
          setRight(mid - 1);
        }
      } else {
        setNotFound(true);
        setIsActive(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [arr, left, right, isActive, target]);

  const startSearch = (): void => {
    setIsActive(!isActive);
    setLeft(0);
    setRight(arr.length - 1);
  };
  return { isActive, left, right, notFound, startSearch };
};

export default useBinarySearch;
