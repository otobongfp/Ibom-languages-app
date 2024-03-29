import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSingleWord,
  getAllWords,
  getSingleWord,
} from "../redux/features/searchSlice";
import Loader from "../components/Loader";
import { Select, Option } from "@material-tailwind/react";
import { CiCircleInfo } from "react-icons/ci";

const Search = () => {
  const { loading, allWords, singleWord } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState("");
  const [searchType, setSearchType] = useState("");

  useLayoutEffect(() => {
    dispatch(getAllWords());
  }, []);

  return (
    <section>
      <div className="flex p-4 space-x-2 flex-col md:flex-row items-center justify-between">
        <p className="text-4xl">Dictionary</p>
        <p className="flex space-x-1 items-center text-blue-300">
          <CiCircleInfo className="text-2xl" />
          <p>Full dictionary coming soon!</p>
        </p>
      </div>
      <div className="p-4 grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 ">
          <p>Search words in the Ibibio dictionary</p>
          <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 items-center md:justify-between md:space-x-3 w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(getSingleWord(searchParam));
              }}
              className="flex items-center justify-center align-middle mt-2 space-x-3 w-full lg:w-[25%] "
            >
              <input
                type={searchParam}
                className="block p-2.5 w-full z-20 text-sm py-2 md:py-2 text-gray-900 rounded-lg border border-gray-900 outline-none focus:shadow-xl "
                placeholder="Word search"
                value={searchParam}
                onChange={(e) => {
                  if (e.target.value) {
                    setSearchParam(e.target.value);
                  } else {
                    setSearchParam(e.target.value);
                    dispatch(clearSingleWord());
                  }
                }}
                required
              />
              <button
                type="submit"
                className={`bg-transparent px-3 py-2 md:py-1.5 md:px-6 text-black rounded-lg flex relative   items-center justify-center overflow-hidden  transition-all border border-gray-900  hover:border-3 group  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-100 before:duration-700 before:ease-in-out  hover:before:h-56 hover:before:w-56`}
              >
                <span className="relative z-10">Search</span>
              </button>
            </form>
            <div className="w-full lg:w-[25%] mt-2">
              <Select
                value={searchType}
                onChange={(val) => setSearchType(val)}
                label="Search By"
              >
                <Option value="word">Nouns</Option>
                <Option value="number">Numbers</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="p-4 col-span-12 bg-white rounded shadow h-[50vh] md:h-[50vh] lg:h-[50vh] overflow-y-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {loading ? (
              <div className="  col-span-6 place-self-center">
                <Loader />
              </div>
            ) : singleWord.length ? (
              singleWord?.map((wordData) => {
                return (
                  <div
                    key={wordData._id}
                    className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md md:col-span-1 lg:col-span-2 p-6"
                  >
                    <div className="flex space-x-3 text-3xl">
                      <h2>{wordData?.word}</h2> <span>|</span>{" "}
                      <h2>{wordData?.translation}</h2>
                    </div>
                    <h6
                      className={`${
                        wordData?.langCode === "or"
                          ? "bg-blue-100"
                          : wordData?.langCode === "ib"
                          ? "bg-yellow-100"
                          : null
                      } border p-1 rounded-md w-fit text-xs`}
                    >
                      {wordData?.langCode === "or"
                        ? "Orong"
                        : wordData?.langCode === "ib"
                        ? "Ibibio"
                        : null}
                    </h6>
                    <h4>{wordData?.meaning}</h4>
                    <div className="text-gray-500">
                      <i>&quot;{wordData?.example}&quot;</i>
                      <hr /> <i>&quot;{wordData?.transExample}&quot;</i>
                    </div>
                  </div>
                );
              })
            ) : (
              allWords?.map((wordData) => {
                return (
                  <div
                    key={wordData._id}
                    className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md  md:col-span-1 lg:col-span-2 p-6"
                  >
                    <div className="flex space-x-3 text-3xl">
                      <h2>{wordData?.word}</h2> <span>|</span>{" "}
                      <h2>{wordData?.translation}</h2>
                    </div>
                    <h6
                      className={`${
                        wordData?.langCode === "or"
                          ? "bg-blue-100"
                          : wordData?.langCode === "ib"
                          ? "bg-yellow-100"
                          : null
                      } border p-1 rounded-md w-fit text-xs`}
                    >
                      {wordData?.langCode === "or"
                        ? "Orong"
                        : wordData?.langCode === "ib"
                        ? "Ibibio"
                        : null}
                    </h6>
                    <h4>{wordData?.meaning}</h4>
                    <div className="text-gray-500">
                      <i>&quot;{wordData?.example}&quot;</i>
                      <hr /> <i>&quot;{wordData?.transExample}&quot;</i>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
