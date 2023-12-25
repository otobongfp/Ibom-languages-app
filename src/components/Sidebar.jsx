import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { RiPlayListAddFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="">
      <div className="m-4">
        <h2 className="text-3xl text-white mb-8">Ibom Language Pipeline</h2>
      </div>
      <ul>
        <li className="rounded m-2 hover:bg-[#334155] text-white py-2">
          <Link to={"/about"} className="flex items-center pl-3">
            <FaQuestion />
            <span className="ml-4">About</span>
          </Link>
        </li>

        <li className="rounded m-2 hover:bg-[#334155] text-white py-2">
          <Link to={"/search"} className="flex items-center pl-3">
            <FaSearch />
            <span className="ml-4">Search</span>
          </Link>
        </li>

        <li className="rounded m-2 hover:bg-[#334155] text-white py-2">
          <Link className="flex items-center pl-3">
            <RiPlayListAddFill />
            <span className="ml-4">Contribute</span>
          </Link>
        </li>

        <li className="rounded m-2 hover:bg-[#334155] text-white py-2">
          <Link className="flex items-center pl-3">
            <FaCheckDouble />
            <span className="ml-4">Help to Validate</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
