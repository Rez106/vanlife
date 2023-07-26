import { Outlet, useLoaderData, useLocation, useParams } from "react-router";
import NotFound from "../../pages/NotFound";
import { Link, NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { requireAuth } from "../../utils/utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
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

const HostVanDetail = () => {
  const loaderData = useLoaderData();
  const vans = loaderData.listedVans;

  const params = useParams();

  const findedVan = vans.find((van) => van.id === +params.id);
  const location = useLocation();

  if (findedVan) {
    const word = findedVan.description.split(" ");
    const descText =
      word.length > 30
        ? word.slice(0, 30).join(" ") + "..."
        : findedVan.description;
    const isDetailTrue = location.pathname === `/host/vans/${findedVan.id}`;

    return (
      <div className="w-full p-4">
        <Link
          to="/host/vans"
          relative="path"
          className="flex items-center text-slate-300 hover:underline underline-offset-2"
        >
          <span className="mr-1">
            <IoArrowBackOutline />
          </span>
          <span>Back to all vans</span>
        </Link>
        <div className="w-full bg-slate-600 p-2 mt-10 rounded-md">
          <div className="w-full flex items-center gap-5">
            <img
              className="w-2/4 rounded-md"
              src={findedVan.image}
              alt="van-image"
            />
            <div className="w-1/3 flex flex-col gap-1">
              <p
                className={`w-fit first-letter:uppercase font-semibold 
                py-1 px-4 ${findedVan.categoryColor} rounded-lg text-sm text-slate-200`}
              >
                {findedVan.category}
              </p>
              <p className="font-bold text-slate-200 text-xl">
                {findedVan.name}
              </p>
              <p className=" text-slate-200">
                <span className="font-semibold text-lg">
                  ${findedVan.price}
                </span>
                /day
              </p>
            </div>
          </div>
          <div className="w-full mt-5 p-2">
            <nav className="flex items-center gap-3">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "underline underline-offset-2 text-slate-200"
                    : "no-underline text-slate-400";
                }}
                to="."
                end
              >
                <span className="text-lg font-semibold">Details</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "underline underline-offset-2 text-slate-200"
                    : "no-underline text-slate-400";
                }}
                to={`pricing`}
                end
              >
                <span className="text-lg font-semibold">Pricing</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "underline underline-offset-2 text-slate-200"
                    : "no-underline text-slate-400";
                }}
                to={`photos`}
                end
              >
                <span className="text-lg font-semibold">Photos</span>
              </NavLink>
            </nav>
          </div>
          <div className="w-full p-2">
            {isDetailTrue ? (
              <div className="w-full flex flex-col gap-2">
                <p className="text-slate-300 ">
                  <span className="font-semibold text-lg text-slate-200">
                    Name:
                  </span>{" "}
                  {findedVan.name}
                </p>
                <p className="text-slate-300">
                  <span className="font-semibold text-lg text-slate-200">
                    Category:
                  </span>{" "}
                  {findedVan.category.charAt(0).toUpperCase() +
                    findedVan.category.slice(1)}
                </p>
                <p className="text-slate-300 leading-5 text-justify">
                  <span className="font-semibold text-lg text-slate-200">
                    Description:
                  </span>{" "}
                  {descText}
                </p>
                <p className="text-slate-300">
                  <span className="font-semibold text-lg text-slate-200">
                    Visibility:
                  </span>{" "}
                  Public
                </p>
              </div>
            ) : (
              <Outlet context={findedVan} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default HostVanDetail;
