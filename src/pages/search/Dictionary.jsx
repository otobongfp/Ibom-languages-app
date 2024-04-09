import EmptyView from "../../components/EmptyView";
import PropTypes from "prop-types";

const Dictionary = ({ singleWord, allWords, reload }) => {
  return (
    <>
      {singleWord.length ? (
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
      ) : allWords.length ? (
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
      ) : (
        <div className="  col-span-6 place-self-center">
          <EmptyView reload={reload} type={"dictionary"} />
        </div>
      )}
    </>
  );
};

export default Dictionary;

Dictionary.propTypes = {
  reload: PropTypes.func,
  singleWord: PropTypes.array,
  allWords: PropTypes.array,
};
