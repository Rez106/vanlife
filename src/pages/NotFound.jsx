import { NavLink } from "react-router-dom";
import notFoundPic from "../assets/images/404.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-20 p-4">
      <img className="w-1/2" src={notFoundPic} alt="not-found" />
      <p className="text-white font-semibold text-2xl text-center">
        Sorry, the page you're looking for is{" "}
        <span className="text-red-500 font-bold text-4xl">Not Found!</span>
      </p>
      <NavLink
        to="/"
        className="w-full text-center text-xl rounded-xl py-3 px-6 bg-slate-600 text-white font-semibold
         duration-200 hover:bg-slate-700"
      >
        Return to home
      </NavLink>
    </div>
  );
};

export default NotFound;
