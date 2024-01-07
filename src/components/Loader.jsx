import { PiSpinnerGapLight } from "react-icons/pi";
const Loader = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <PiSpinnerGapLight className="h-8 w-8 animate-spin text-gray-600" />
      <h1 className="font-semibold text-gray-600">Loading...</h1>
    </div>
  );
};

export default Loader;
