import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { loader as vansLoader } from "./pages/Vans.jsx";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail.jsx";
import Dashboard, {
  loader as dashboardLoader,
} from "./components/HostDetail/Dashboard.jsx";
import Income from "./components/HostDetail/Income.jsx";
import HostVans, {
  loader as hostVansLoader,
} from "./components/HostDetail/HostVans.jsx";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./components/HostDetail/HostVanDetail.jsx";
import HostVanPrice from "./components/HostDetail/HostVanPrice.jsx";
import HostVanPhotos from "./components/HostDetail/HostVanPhotos.jsx";
import Reviews from "./components/HostDetail/Reviews.jsx";
import Error from "./components/UI/Error.jsx";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login.jsx";
import { requireAuth } from "./utils/utils.js";
import React, { Suspense } from "react";
import Fallback from "./pages/Fallback.jsx";

const Vans = React.lazy(() => import("./pages/Vans.jsx"));
const Host = React.lazy(() => import("./pages/Host.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<Host />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route path="vans">
          <Route index element={<HostVans />} loader={hostVansLoader} />
          <Route
            path=":id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route
              path="pricing"
              element={<HostVanPrice />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
      </Route>
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
