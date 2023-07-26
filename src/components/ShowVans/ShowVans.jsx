import React from "react";
import { Link } from "react-router-dom";

const ShowVans = ({ vans, searchParams, sort }) => {
  return vans.map((van) => (
    <Link
      key={van.id}
      to={`${van.id}`}
      state={{ search: `?${searchParams}`, sort }}
    >
      <div
        key={van.id}
        className="w-full  flex flex-col items-center rounded-lg h-fit"
      >
        <img
          className="rounded-lg backdrop-blur-sm w-11/12 object-contain duration-200 hover:-translate-y-3 "
          src={van.image}
          alt={`van${van.id}`}
        />
        <div className="flex w-full h-1/2 justify-between p-2">
          <div className="flex flex-col gap-2">
            <p className="text-slate-200 font-semibold">{van.name}</p>
            <h4
              className={`first-letter:uppercase font-semibold text-sm py-1 px-2 rounded-md text-slate-200 ${van.categoryColor}`}
            >
              {van.category}
            </h4>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-bold text-slate-200">${van.price}</p>
            <p className="text-slate-200 text-sm">/day</p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default ShowVans;
