import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-4 h-5 mr-4" src={loading} alt="Loading" />
      AI genererer journal
    </div>
  );
};

export default Generating;