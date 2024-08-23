import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationSvg from "../Icons/NotificationSvg";

const DropdownNotification = () => {
  const [notifying, setNotifying] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <li>
      <Link
        to={"#"}
        onClick={() => {
          setDropdownOpen((prev) => !prev);
          setNotifying(false);
        }}
        className="relative  flex items-center justify-center rounded-full"
      >
        <span
          className={`absolute -top-0.5 right-0 bg-red-500 h-2 w-2 rounded z-10 ${
            notifying ? "inline" : "hidden"
          }`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full"></span>
        </span>
        <NotificationSvg />
      </Link>
      {dropdownOpen && (
        <div className="flex mt-6 absolute flex-col right-24 rounded-sm dropDown-bg h-96  w-72 sm:w-80">
          <div className="px-4 py-3">
            <h5 className="text-sm font-medium ">Notification</h5>
          </div>
          <ul className="flex flex-col overflow-y-auto h-auto">
            <li>
              <Link className="flex flex-col gap-2.5 border-t border-gray-600 dark:border-gray-400 px-4 py-3  hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>
                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col gap-2.5 border-t border-gray-600 dark:border-gray-400 px-4 py-3  hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>
                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col gap-2.5 border-t border-gray-600 dark:border-gray-400 px-4 py-3  hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>
                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col gap-2.5 border-t border-gray-600 dark:border-gray-400 px-4 py-3  hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </p>
                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownNotification;
