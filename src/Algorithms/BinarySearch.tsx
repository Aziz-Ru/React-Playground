import { useMemo } from "react";
import useBinarySearch from "./useBinarySearch";

const BinarySearch = () => {
  const arr: number[] = useMemo(
    () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35, 57, 69, 91],
    []
  );
  const target: number = 10;
  const { isActive, left, right, notFound, startSearch } = useBinarySearch(
    arr,
    target
  );

  return (
    <div>
      <h1>BinarySearch</h1>

      <div className="flex flex-col gap-4 justify-center items-center">
        <button
          onClick={startSearch}
          disabled={isActive}
          className={`${
            isActive ? "bg-blue-300" : "bg-blue-950"
          } text-white py-2 px-4 rounded`}
        >
          start
        </button>
        <div className="flex ">
          {arr.map((val, index) => {
            return (
              <div
                style={{
                  border:
                    index >= left && index <= right
                      ? "4px solid red"
                      : "1px solid black",
                }}
                key={index}
              >
                <div className="p-4 ">{val}</div>
              </div>
            );
          })}
        </div>
        {notFound && <div>Not Found</div>}
      </div>
    </div>
  );
};

export default BinarySearch;
