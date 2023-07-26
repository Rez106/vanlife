import React from "react";
import { useOutletContext } from "react-router";

const HostVanPhotos = () => {
  const findedVan = useOutletContext();

  return (
    <div className="w-full grid grid-cols-3 gap-3 ">
      <img
        className="w-full rounded-md"
        src={findedVan.image}
        alt="van-photo"
      />
    </div>
  );
};

export default HostVanPhotos;
