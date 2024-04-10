import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { postNoun, postWord } from "../redux/features/contributeSlice";
import { PiSpinnerGapLight } from "react-icons/pi";

const Contribute = () => {
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.contribute);
  const [type, setType] = useState("dictionary");
  const [wordDetails, setWordDetails] = useState({
    word: "",
    translation: "",
  });
  const [nounDetails, setNounDetails] = useState({
    word: "",
    translation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "dictionary") {
      dispatch(postWord(wordDetails));
    } else {
      dispatch(postNoun({ ...nounDetails, type }));
    }
  };

  return (
    <div className="bg-white h-[90vh] mt-10">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute animate-pulse  inset-x-0 -top-40 -z-[10000] transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] animate-pulse aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff6201] to-[#24783c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="max-w-sm mx-auto"
        >
          <div className="mb-5 ">
            {message ? <p className="text-center">{message}!!</p> : ""}
          </div>
          <div className="mb-5">
            <Select
              value={type}
              onChange={(val) => setType(val)}
              label="Contribute to"
              className=" text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            >
              <Option value="dictionary">Dictionary</Option>
              <Option value="number">Numbers</Option>
              <Option value="name">Names</Option>
              <Option value="animal">Aminals</Option>
            </Select>
          </div>
          {type === "dictionary" ? (
            <>
              <div className="mb-5">
                <Input
                  value={wordDetails.word}
                  onChange={(e) =>
                    setWordDetails({ ...wordDetails, word: e.target.value })
                  }
                  required
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  label="Word"
                />
              </div>
              <div className="mb-5">
                <Input
                  value={wordDetails.translation}
                  required
                  onChange={(e) =>
                    setWordDetails({
                      ...wordDetails,
                      translation: e.target.value,
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  label="Translation"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-5">
                <Input
                  value={nounDetails.word}
                  onChange={(e) =>
                    setNounDetails({ ...nounDetails, word: e.target.value })
                  }
                  required
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  label="Word"
                />
              </div>
              <div className="mb-5">
                <Input
                  value={nounDetails.translation}
                  required
                  onChange={(e) =>
                    setNounDetails({
                      ...nounDetails,
                      translation: e.target.value,
                    })
                  }
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  label="Translation"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`
                bg-[#ff6201da] mx-auto md:bg-transparent px-3.5 py-2.5 text-sm font-semibold shadow-sm text-black rounded-lg flex relative   items-center justify-center overflow-hidden  transition-all border border-gray-900  hover:border-3 group  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#ff6201da] before:duration-700 before:ease-in-out  hover:before:h-56 hover:before:w-56`}
          >
            {loading ? (
              <PiSpinnerGapLight className="h-8 w-8 animate-spin text-gray-600" />
            ) : (
              <p className="relative z-10">Submit</p>
            )}
          </button>
        </form>
        <div
          className="absolute animate-pulse inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff6201] to-[#24783c]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contribute;
