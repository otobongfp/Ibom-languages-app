import EmptyView from "../../components/EmptyView";
import PropTypes from "prop-types";

/* 
number
{
    "_id": "6606bd4ae90dd68554747193",
    "word": "ked",
    "numeral": 1,
    "translation": "one",
    "type": "number",
    "__v": 0
  }

  animal

  {
    "_id": "6606c3ffc8a740491a6bb807",
    "word": "adua",
    "translation": "squirriel",
    "type": "animal",
    "__v": 0
  },
*/

const Nouns = ({ allNouns, singleNoun, reload, type }) => {
  return (
    <>
      {singleNoun.length ? (
        singleNoun?.map((wordData) => {
          return (
            <div
              key={wordData._id}
              className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md md:col-span-1 lg:col-span-2 p-6"
            >
              <div className="flex space-x-3 text-3xl">
                <h2>{wordData?.word}</h2> <span>|</span>{" "}
                <h2>{wordData?.translation}</h2>
              </div>
              <h6 className={`bg-red-50 border p-1 rounded-md w-fit text-xs`}>
                {wordData?.type}
              </h6>
              <h4>{wordData?.numeral}</h4>
            </div>
          );
        })
      ) : allNouns.length ? (
        allNouns?.map((wordData) => {
          return (
            <div
              key={wordData._id}
              className="space-y-2 bg-white  rounded-2xl shadow-xl drop-shadow-md md:col-span-1 lg:col-span-2 p-6"
            >
              <div className="flex space-x-3 text-3xl">
                <h2>{wordData?.word}</h2> <span>|</span>{" "}
                <h2>{wordData?.translation}</h2>
              </div>
              <h6 className={`bg-red-50 border p-1 rounded-md w-fit text-xs`}>
                {wordData?.type}
              </h6>
              <h4>{wordData?.numeral}</h4>
            </div>
          );
        })
      ) : (
        <div className="  col-span-6 place-self-center">
          <EmptyView reload={reload} type={type} />
        </div>
      )}
    </>
  );
};

export default Nouns;

Nouns.propTypes = {
  reload: PropTypes.func,
  allNouns: PropTypes.array,
  singleNoun: PropTypes.array,
  type: PropTypes.string,
};
