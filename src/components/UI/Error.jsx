import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorPic from "../../assets/images/error.svg";

const Error = (props) => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 2xl:w-3/12 mx-auto p-4 bg-slate-800 h-screen flex flex-col justify-center items-center">
      <img src={errorPic} alt="error-svg" className="w-4/5" />
      <h1 className="text-2xl text-red-500 font-bold">
        {props.text ? props.text : "Something went wrong!"}
      </h1>
      <Link
        to="."
        relative="path"
        className="text-lg font-semibold text-slate-400 hover:underline underline-offset-2"
      >
        Try again
      </Link>
    </div>
  );
};

export default Error;
