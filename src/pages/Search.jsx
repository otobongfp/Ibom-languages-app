import React from "react";
import { IbomStadium } from "../../public";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="h-[500px]">
      <div className="m-4 bg-white rounded shadow h-full max-h-full">
        <p className="m-4 text-[2rem]">Search</p>
        <div className="m-4 grid md:grid-cols-12">
          <div className="col-span-6">
            <p>Search words in the ibibio dictionary</p>
            <ul className="mt-4">
              <Link>
                <li>
                  <form>
                    <label for="input-search"></label>
                    <input
                      input
                      type="search"
                      id="input-search"
                      class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Word search"
                      required
                    />
                  </form>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <div>{/* <img src={IbomStadium} className="rounded" /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
