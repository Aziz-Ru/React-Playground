import DropdownModeSwitch from "./DropdownModeSwitch";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
// import NoAvatar from
const Navbar = () => {
  // const [colorMode, setColorMode] = useState(true);

  return (
    <header className="sticky w-full bg-gray-50 top-0 text-gray-500 drop-shadow-sm dark:bg-gray-800 dark:text-gray-200">
      <nav className="flex items-center justify-between px-4 py-4 shadow-md md:px-6 xl:px-10">
        <div className="hidden sm:block">
          <form action="">
            <div className="Relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>
              <input
                type="text"
                name="search"
                placeholder="Type to search..."
                className="pl-9 pr-4 text-gray-600 dark:text-white focus:outline-none  md:lg:60 lg:w-72 xl:w-96 dark:bg-gray-600 py-2 text-lg "
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-3 md:gap-6 xl:gap-10">
          <ul className="flex items-center gap-4 md:gap-7 xl:gap-10">
            <DropdownModeSwitch />
            <DropdownNotification />
          </ul>
          <DropdownUser />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
