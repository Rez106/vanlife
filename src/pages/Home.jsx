import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-950 px-4 py-10">
        <h2 className="text-slate-200 font-bold text-2xl leading-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolorum!
        </h2>
        <p className="text-slate-300 text-md mt-5 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quas
          iusto ipsa officiis molestias tempore.
        </p>
        <div className="flex items-center justify-center mt-5">
          <NavLink
            to="/vans"
            className="py-2 px-6 font-semibold rounded-xl text-white bg-slate-800
           hover:bg-slate-600 hover:scale-95 duration-100"
          >
            Find Your Van
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
