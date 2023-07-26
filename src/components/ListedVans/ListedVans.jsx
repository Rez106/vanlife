import React from "react";
import { Link } from "react-router-dom";

const ListedVans = (props) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-slate-200 text-2xl">
          Your listed vans
        </h1>
        {props.hideEdit ? (
          ""
        ) : (
          <Link
            to="vans"
            className="text-slate-200 text-sm hover:underline underline-offset-2"
          >
            View all
          </Link>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 p-2 mt-5">
        {props.vans.map((van) => (
          <div
            key={van.id}
            className={`w-full max-w-full flex items-center justify-between rounded-md bg-slate-700 p-2`}
          >
            <img
              className="w-1/4 object-cover rounded-md"
              src={van.image}
              alt="listed-van"
            />
            <div className="">
              <p className="font-semibold text-slate-200 text-xl">{van.name}</p>
              <p className="font-semibold text-slate-300">${van.price}/day</p>
            </div>
            {
              <Link
                to={`/host/vans/${van.id}`}
                className="text-slate-400 font-semibold pr-2 duration-150 hover:text-slate-200"
              >
                {props.hideEdit ? "Detail" : "Edit"}
              </Link>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedVans;
