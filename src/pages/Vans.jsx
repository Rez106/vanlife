import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import ShowVans from "../components/ShowVans/ShowVans";
import Error from "../components/UI/Error";
import { Suspense } from "react";
import vanLogo from "../assets/images/van.svg";

// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// };

export async function loader() {
  const getVans = async () => {
    const response = await fetch("/data/vans.json", { method: "GET" });

    if (!response.ok) {
      return Error("Something went wrong! No Vans Found");
    }

    const data = await response.json();
    return data;
  };

  try {
    // return await getVans();
    return defer({ vans: getVans() });
  } catch (error) {
    return error.message;
  }
}

const LoadingVans = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <img className="w-1/2" src={vanLogo} alt="van-logo" />
      <h1 className="text-3xl text-slate-200 font-bold">Loading vans...</h1>
    </div>
  );
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSorting = searchParams.get("sort");

  const loaderData = useLoaderData();

  const onSortClickHandler = (e) => {
    const sortValue = e.target.innerText.toLowerCase();
    if (sortValue == "clear filters") {
      setSearchParams({});
    } else {
      setSearchParams({ sort: sortValue });
    }
  };

  const isSortingSimple = isSorting === "simple";
  const isSortingLuxury = isSorting === "luxury";
  const isSortingRugged = isSorting === "rugged";

  return (
    <div className="w-full">
      <h1 className="text-orange-200 text-2xl font-bold mb-3 p-4">
        Explore our vans options
      </h1>
      <Suspense fallback={<LoadingVans />}>
        <Await resolve={loaderData.vans}>
          {(vansData) => {
            const displayedVans = isSorting
              ? vansData.vans.filter((van) => van.category === isSorting)
              : vansData.vans;

            return (
              <>
                <div className="w-full p-4">
                  <ul className="flex items-center gap-2">
                    <li>
                      <button
                        // to="?sort=simple"
                        onClick={onSortClickHandler}
                        className={`py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80 ${
                          isSortingSimple
                            ? "bg-orange-500 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        Simple
                      </button>
                    </li>
                    <li>
                      <button
                        // to="?sort=luxury"
                        onClick={onSortClickHandler}
                        className={`py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80 ${
                          isSortingLuxury
                            ? "bg-black text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        Luxury
                      </button>
                    </li>
                    <li>
                      <button
                        // to="?sort=rugged"
                        onClick={onSortClickHandler}
                        className={`py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80 ${
                          isSortingRugged
                            ? "bg-emerald-700 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        Rugged
                      </button>
                    </li>
                    {isSorting === null ? (
                      ""
                    ) : (
                      <li className="ml-auto text-sm text-slate-300">
                        <button
                          onClick={onSortClickHandler}
                          className="hover:border-b"
                        >
                          Clear filters
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="w-full grid grid-cols-2 gap-x-2 gap-y-10 px-2 py-10">
                  <ShowVans
                    vans={displayedVans}
                    searchParams={searchParams.toString()}
                    sort={isSorting}
                  />
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Vans;
