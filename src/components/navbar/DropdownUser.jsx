import { useState } from "react";
import { Link } from "react-router-dom";
import ContactsSvg from "../Icons/ContactsSvg";
import DownArrow from "../Icons/DownArrow";
import LogoutSvg from "../Icons/LogoutSvg";
import ProfileSvg from "../Icons/ProfileSvg";
import SettingSvg from "../Icons/SettingSvg";

const DropdownUser = () => {
  const [DropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div>
        <Link
          onClick={() => setDropdownOpen((prev) => !prev)}
          to="#"
          className="flex items-center gap-4"
        >
          <span className="text-right hidden lg:block">
            <span className="block text-sm font-medium text-black dark:text-white">
              Abdul Aziz
            </span>
            <span className="block text-xs">SRE</span>
          </span>
          <span>
            <img
              src="noavatar.png"
              alt="User"
              className="h-12 w-12 rounded-full"
            />
          </span>
          <DownArrow />
        </Link>
        
        {DropdownOpen && (
          <div className="absolute right-4 md:right-6 xl:right-10 mt-4 flex flex-col bg-gray-200 dark:bg-gray-600 shadow rounded">
            <ul className="flex flex-col px-2 py-6 ">
              <li className="">
                <Link
                  to="#"
                  className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 lg:text-base"
                >
                  <ProfileSvg />
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-3.5 px-6 py-4  text-sm font-medium duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 lg:text-base"
                >
                  <ContactsSvg />
                  My Contacts
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-3.5 px-6 py-4  mb-4 text-sm font-medium duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 lg:text-base"
                >
                  <SettingSvg />
                  Account Settings
                </Link>
              </li>
              <hr className="border-gray-700 dark:border-gray-300" />
              <li className="">
                <button className=" w-full flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 lg:text-base">
                  <LogoutSvg />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownUser;
