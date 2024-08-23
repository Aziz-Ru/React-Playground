import useColorMode from "../../hook/useColorMode";
import MoonightSvg from "../Icons/MoonightSvg";
import SunlightSvg from "../Icons/SunlightSvg";

const DropdownModeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <li>
      <label className="h-7 w-14 border relative m-0 block rounded-full">
        <input
          onChange={() => {
            console.log(colorMode);
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className={` absolute duration-300 top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0 ${
            colorMode === "dark" ? "bg-blue-600" : "bg-white"
          }`}
          type="checkbox"
        />

        <span
          className={`absolute top-1/2 z-50 m-0 flex h-6 w-6 left-[-3px] items-center justify-center rounded-full shadow duration-75 ease-linear translate-x-0 -translate-y-1/2 ${
            colorMode === "dark" && "!right-[px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            <SunlightSvg />
          </span>
          <span className="hidden dark:inline-block">
            <MoonightSvg />
          </span>
        </span>
      </label>
    </li>
  );
};

export default DropdownModeSwitch;
