import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router";

const HostVanPrice = () => {
  const findedvan = useOutletContext();
  if (findedvan) {
    return (
      <div className="w-full">
        <p className="text-lg text-slate-400">
          <span className="text-3xl font-semibold text-slate-200">
            ${findedvan.price}
          </span>
          /day
        </p>
      </div>
    );
  } else {
    return (
      <p className="font-semibold text-red-600 text-2xl">No Price Found!</p>
    );
  }
};

export default HostVanPrice;
