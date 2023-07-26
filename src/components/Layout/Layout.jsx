import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import vanLogo from "../../assets/images/van.svg";
const Layout = (props) => {
  const location = useLocation();
  const isLoginTrue = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-800 to-gray-900">
      <div className="w-full md:w-1/2 xl:w-1/3 2xl:w-[30%] mx-auto">
        <header className="w-full p-4 flex gap-1 max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-2-">
          <img src={vanLogo} alt="van logo" className="w-1/12" />
          <div className="w-1/2 flex items-center max-[400px]:justify-center">
            <NavLink
              to="/"
              className="text-3xl max-[400px]:text-center text-orange-200 font-mono font-bold"
            >
              VANLIFE
            </NavLink>
          </div>
          <nav className="w-1/2 flex items-center">
            <ul className="w-full flex items-center max-[400px]:justify-center justify-end gap-5 text-lg font-semibold text-slate-400">
              <li className=" duration-200 hover:cursor-pointer hover:text-slate-200">
                <NavLink
                  to="host"
                  className={({ isActive }) => {
                    return isActive ? "text-slate-200 border-b-2" : "";
                  }}
                >
                  Host
                </NavLink>
              </li>
              <li className=" duration-200 hover:cursor-pointer hover:text-slate-200">
                <NavLink
                  to="about"
                  className={({ isActive }) => {
                    return isActive ? "text-slate-200 border-b-2" : "";
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className=" duration-200 hover:cursor-pointer hover:text-slate-200">
                <NavLink
                  to="vans"
                  className={({ isActive }) => {
                    return isActive ? "text-slate-200 border-b-2" : "";
                  }}
                >
                  Vans
                </NavLink>
              </li>
              {!localStorage.getItem("isLoggedIn") && (
                <li className="hover:cursor-pointer ">
                  <NavLink
                    to="login"
                    className={`text-2xl duration-200 hover:text-slate-200 ${
                      isLoginTrue ? "text-slate-200" : "text-slate-400"
                    }`}
                  >
                    <FaRegUserCircle />
                  </NavLink>
                </li>
              )}
              {localStorage.getItem("isLoggedIn") && (
                <li className="hover:cursor-pointer">
                  <NavLink
                    to="."
                    relative="path"
                    onClick={() => localStorage.removeItem("isLoggedIn")}
                    className={`text-2xl duration-200 hover:text-slate-200 ${
                      isLoginTrue ? "text-slate-200" : "text-slate-400"
                    }`}
                  >
                    <BiLogOut />
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <main className="w-full min-h-[86.5vh]">
          <Outlet />
        </main>
        <footer className="p-4 w-full bg-slate-950">
          <h1 className="text-slate-300 font-semibold text-center">
            ©2023 #VANLIFE
          </h1>
        </footer>
      </div>
    </div>
  );
};
export default Layout;
