import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSingleWord,
  getAllWords,
  getSingleWord,
} from "../redux/features/searchSlice";
import Loader from "../components/Loader";

const Search = () => {
  const { loading, allWords, singleWord } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState("");
  const background = "bg-transparent";

  useLayoutEffect(() => {
    dispatch(getAllWords());
  }, []);

  return (
    <div className="m-4 bg-white rounded shadow h-[90vh] overflow-y-auto">
      <p className="m-4 text-[2rem]">Search</p>
      <div className="m-4 grid md:grid-cols-12 gap-12">
        <div className="col-span-6">
          <p>Search words in the Ibibio dictionary</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getSingleWord(searchParam));
            }}
            className="flex items-center justify-center align-middle  mt-4 space-x-3"
          >
            <input
              type="search"
              className="block p-2.5  w-full z-20 text-sm text-gray-900 rounded-lg  border border-gray-900 outline-none focus:shadow-xl "
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
              className={`bg-transparent px-3 py-2 md:py-2 md:px-6 text-black rounded-lg flex relative   items-center justify-center overflow-hidden  transition-all border border-gray-900  hover:border-3 group  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-100 before:duration-700 before:ease-in-out  hover:before:h-56 hover:before:w-56`}

              // className="  w-fit   transition-all px-3 py-2 md:py-4 md:px-6  rounded-[60px] flex space-x-[10px]  relative h-[50px]  items-center justify-center overflow-hidden border-2 border-[rgba(255,255,255,0.20)] hover:text-brand-secondary-dark hover:border-3 group  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#FBB416] before:duration-700 before:ease-in-out  hover:before:h-56 hover:before:w-56 py-2 px-6 rounded-lg font-semibold border border-gray-900"
            >
              <span className="relative z-10">Search</span>
            </button>
          </form>
        </div>
        <div className="col-span-12 grid grid-cols-6 gap-6">
          {loading ? (
            <div className="  col-span-6 place-self-center">
              <Loader />
            </div>
          ) : singleWord.length ? (
            singleWord?.map((wordData) => {
              return (
                <div
                  key={wordData._id}
                  className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md col-span-2 p-6"
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
                  className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md col-span-2 p-6"
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
  );
};

export default Search;
