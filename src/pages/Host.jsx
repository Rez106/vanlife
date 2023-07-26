import { NavLink, Outlet } from "react-router-dom";

const Host = () => {
  return (
    <div className="w-full">
      <nav className="w-full p-4">
        <ul className="flex gap-3 items-center max-[360px]:justify-center">
          <li className="text-slate-400 font-semibold">
            <NavLink
              to="."
              className={({ isActive }) => {
                return isActive
                  ? "underline underline-offset-4 text-slate-200"
                  : "";
              }}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-slate-400 font-semibold">
            <NavLink
              to="income"
              className={({ isActive }) => {
                return isActive
                  ? "underline underline-offset-4 text-slate-200"
                  : "";
              }}
            >
              Income
            </NavLink>
          </li>
          <li className="text-slate-400 font-semibold">
            <NavLink
              to="vans"
              className={({ isActive }) => {
                return isActive
                  ? "underline underline-offset-4 text-slate-200"
                  : "";
              }}
            >
              Vans
            </NavLink>
          </li>
          <li className="text-slate-400 font-semibold">
            <NavLink
              to="reviews"
              className={({ isActive }) => {
                return isActive
                  ? "underline underline-offset-4 text-slate-200"
                  : "";
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
