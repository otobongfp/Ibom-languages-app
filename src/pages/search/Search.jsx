import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSingleWord,
  getAllNouns,
  getAllWords,
  getSingleNoun,
  getSingleWord,
} from "../../redux/features/searchSlice";
import Loader from "../../components/Loader";
import { Select, Option } from "@material-tailwind/react";
import { CiCircleInfo } from "react-icons/ci";
import Dictionary from "./Dictionary";
import Nouns from "./Nouns";
import { MdRefresh } from "react-icons/md";

const Search = () => {
  const { loading, allWords, singleWord, allNouns, singleNoun } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState("");
  const [searchType, setSearchType] = useState("dictionary");

  const retrieveData = (type = "dictionary") => {
    if (type === "dictionary") {
      dispatch(getAllWords({ page: 1, limit: 100 }));
    } else {
      dispatch(getAllNouns(type));
    }
  };

  useLayoutEffect(() => {
    retrieveData();
  }, []);

  const reload = (type) => {
    setSearchType(type);
    retrieveData(type);
    setSearchParam("");
  };

  const handleSubmit = () => {
    if (searchType === "dictionary") {
      dispatch(getSingleWord(searchParam));
    } else {
      dispatch(getSingleNoun({ word: searchParam, type: searchType }));
    }
  };
  const handleSelect = (type) => {
    setSearchType(type);
    retrieveData(type);
  };

  const renderTypeView = () => {
    if (searchType === "dictionary") {
      return (
        <Dictionary
          singleWord={singleWord}
          allWords={allWords}
          reload={reload}
        />
      );
    } else {
      return (
        <Nouns
          singleNoun={singleNoun}
          allNouns={allNouns}
          reload={reload}
          type={searchType}
        />
      );
    }
  };

  return (
    <section>
      <div className="flex  md:p-4 space-x-2 flex-col md:flex-row items-center justify-between">
        <p className="text-xl md:text-4xl">Dictionary</p>
        <p className="flex space-x-1 items-center text-blue-300">
          <CiCircleInfo className="text-base md:text-2xl" />
          <p className="text-sm md:text-base">Full dictionary coming soon!</p>
        </p>
      </div>
      <div className="p-2 md:p-4 grid md:grid-cols-12 gap-2 md:gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 ">
          <p>Search words in the Ibibio dictionary</p>
          <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 items-center md:justify-between md:space-x-3 w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex items-center justify-center align-middle mt-2 space-x-3 w-full lg:w-[25%] "
            >
              <input
                type={searchParam}
                className="block p-2.5 w-full z-20 text-sm py-2 md:py-2 text-gray-900 rounded-lg border border-gray-900 outline-none focus:shadow-xl "
                placeholder="Search"
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
                onChange={(val) => handleSelect(val)}
                label="Search By"
              >
                <Option value="dictionary">Dictionary</Option>
                <Option value="number">Numbers</Option>
                <Option value="name">Names</Option>
                <Option value="animal">Animals</Option>
              </Select>
            </div>
          </div>
        </div>
        <button
          onClick={() => reload(searchType)}
          className="place-self-end col-span-12 text-blue-500 flex space-x-1 items-center"
        >
          <MdRefresh className="h-5 w-5" /> <p>Reset</p>
        </button>
        <div className="p-2 md:p-4 col-span-12 bg-white rounded shadow h-[50vh] md:h-[50vh] lg:h-[50vh] overflow-y-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {loading ? (
              <div className="  col-span-6 place-self-center">
                <Loader />
              </div>
            ) : (
              renderTypeView()
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
