import { requireAuth } from "../../utils/utils";
import ListedVans from "../ListedVans/ListedVans";
import { useLoaderData } from "react-router";

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

const HostVans = () => {
  const loaderData = useLoaderData();
  const vans = loaderData.listedVans;

  return (
    <div className="w-full p-4">
      <ListedVans vans={vans} hideEdit={true} />
    </div>
  );
};

export default HostVans;
