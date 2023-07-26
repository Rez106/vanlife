import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full mb-5">
      <div className="bg-slate-950 w-full h-60 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-slate-300 text-4xl font-semibold italic">About</h1>
        <h1 className="text-slate-300 text-4xl font-bold font-mono">
          #VANLIFE
        </h1>
      </div>
      <div className="w-full p-4">
        <h1 className="font-bold text-slate-200 text-xl mb-5 leading-9">
          Lorem ipsum, dolor sit amet consectetur Vero debitis officiis natus.
        </h1>
        <p className="text-slate-300 text-justify leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          atque placeat quos asperiores id, harum impedit sed sapiente? Dolores
          porro aliquam aut, sint quo facilis dolorum natus distinctio illum.
          Harum!
        </p>
      </div>
      <div className="w-11/12 h-52 mt-5 bg-orange-300 bg-opacity-90 p-4 mx-auto rounded-md flex flex-col justify-around">
        <h1 className="font-bold text-slate-800 text-xl mb-5 leading-7">
          Lorem ipsum, dolor sit amet consectetur Vero debitis officiis natus.
        </h1>
        <NavLink
          to="/vans"
          className="w-fit py-3 px-6 rounded-xl bg-slate-800 text-slate-200 font-semibold
        hover:bg-slate-700 duration-150"
        >
          Explore our vans
        </NavLink>
      </div>
    </div>
  );
};

export default About;
