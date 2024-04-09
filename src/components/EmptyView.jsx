import PropTypes from "prop-types";
import { empty } from "../assets/icons";

const EmptyView = (props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <img src={empty} alt="empty" className="h-32 md:h-52 w-60 " />
      <div className="flex justify-center flex-col space-y-1">
        <h1 className=" text-gray-600">No Items Found!</h1>
        <button
          className="bg-[#ff6201da] text-white hover:text-[#ff6201da] hover:bg-white hover:border hover:border-[#ff6201da]  px-0 py-1 md:py-1.5 md:px-6 rounded-lg"
          onClick={() => props.reload(props.type)}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default EmptyView;

EmptyView.propTypes = {
  reload: PropTypes.func,
  type: PropTypes.string,
};
