import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import ListedVans from "../ListedVans/ListedVans";
import { requireAuth } from "../../utils/utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
  const getVans = async () => {
    const response = await fetch("/data/vans.json", { method: "GET" });
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

const Dashboard = () => {
  const loaderData = useLoaderData();
  const vans = loaderData.listedVans;

  return (
    <div className="w-full p-4">
      <div className="w-full mb-2">
        <div className="w-full bg-orange-200 px-4 py-5 rounded-t-lg">
          <p className="text-3xl font-bold text-slate-800">Welcome!</p>
          <div className="flex justify-between items-center py-5">
            <p>
              Income for{" "}
              <span className="underline font-semibold underline-offset-2">
                30 days
              </span>
            </p>
            <Link className="font-semibold text-slate-700" to="/host/income">
              Details
            </Link>
          </div>
          <p className="text-4xl text-slate-800 font-bold">$2,260</p>
        </div>
        <div className="w-full bg-orange-300 p-4 rounded-b-lg">
          <div className="flex justify-between items-center">
            <p className="flex items-center font-bold text-slate-800 text-lg">
              Review score
              <span className="ml-2 flex items-center text-amber-600 drop-shadow-sm">
                <span>
                  <AiFillStar />
                </span>
                <span className="ml-1 text-slate-800">5.0</span>
                <span className="text-slate-600">/5</span>
              </span>
            </p>
            <Link className="font-semibold text-slate-700" to="/host/reviews">
              Details
            </Link>
          </div>
        </div>
      </div>
      <ListedVans vans={vans} />
    </div>
  );
};

export default Dashboard;
