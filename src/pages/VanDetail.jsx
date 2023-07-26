import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import NotFound from "./NotFound";

export const loader = async () => {
  const getVans = async () => {
    const response = await fetch("/data/vans.json");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    return data;
  };

  try {
    return await getVans();
  } catch (error) {
    return error.message;
  }
};

const VanDetail = () => {
  const loaderData = useLoaderData();
  const vans = loaderData.vans;

  const params = useParams();
  const location = useLocation();
  //conditional chaining
  const isSorting = location.state?.search || "";
  const sortValue = location.state?.sort || "all";

  const findedVan = vans.find((van) => van.id === +params.id) || [];

  if (findedVan.length === 0) {
    return <NotFound />;
  } else {
    return (
      <div className="w-full p-4 flex flex-col gap-5 mb-5">
        <Link
          to={`..${isSorting}`}
          relative="path"
          className="flex items-center gap-1 underline underline-offset-4 text-slate-300 font-semibold"
        >
          <IoArrowBackOutline /> Back to {sortValue} vans
        </Link>
        <div className="w-full">
          <img
            src={findedVan.image}
            className="rounded-lg shadow-lg mb-5 h-1/2"
            alt="van"
          />
          <div className="w-full flex flex-col gap-4">
            <h4
              className={`w-fit font-semibold text-lg first-letter:uppercase
               py-2 px-6 rounded-md text-slate-200 ${findedVan.categoryColor}`}
            >
              {findedVan.category}
            </h4>
            <h1 className="font-bold text-slate-200 text-3xl">
              {findedVan.name}
            </h1>
            <h1 className="font-semibold text-orange-200 text-xl">
              ${findedVan.price}/day
            </h1>
            <p className="font-sans text-justify leading-5 text-slate-300 font-semibold text-sm">
              {findedVan.description}
            </p>
            <Link
              to="/vans"
              className="w-full text-center py-2 bg-orange-500 text-slate-200 font-semibold rounded-lg 
                        duration-150 hover:bg-orange-400"
            >
              Rent this van
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default VanDetail;
