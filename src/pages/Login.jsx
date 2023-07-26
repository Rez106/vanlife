import { resolve } from "path-browserify";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { requireAuth } from "../utils/utils";

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

export const action = async ({ request }) => {
  await sleep(1000);
  const formData = await request.formData();

  const redirectTo =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email.includes("@") || password.length < 3)
    return { error: true, message: "Wrong Email or Password" };

  localStorage.setItem("isLoggedIn", true);
  return redirect(redirectTo);
};

export const loader = ({ request }) => {
  if (localStorage.getItem("isLoggedIn")) {
    return alert("You are logged in!");
  }

  return new URL(request.url).searchParams.get("redirectTo");
};

const Login = () => {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const { state } = useNavigation();

  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div
        className={`h-2 bg-orange-500 duration-500 ${
          state === "submitting" ? "w-full" : "opacity-0 w-0"
        }`}
      ></div>
      <div className="w-full flex flex-col items-center p-4">
        {loaderData && (
          <p
            className="first-letter:uppercase mb-5 text-xl font-semibold text-slate-200 bg-red-500 rounded-xl 
        py-2 px-4"
          >
            You must be logged in!
          </p>
        )}
        <h1 className="text-slate-300 text-3xl font-semibold mb-5">
          <u className="underline-offset-4 text-slate-100">Sign in</u> to your
          account
        </h1>
        <Form method="post" className="w-full 2xl:w-3/4" replace>
          {actionData?.error && (
            <p className="w-full text-center text-lg font-semibold mb-2 text-red-500 rounded-md">
              *{actionData.message}
            </p>
          )}
          <input
            type="text"
            name="email"
            className="w-full rounded-t-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold
         border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
            placeholder="E-mail"
          />
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full rounded-b-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold
           border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPass((prevState) => !prevState)}
              className="text-xl absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <button
            className="w-full mt-8 py-2 px-4 outline outline-2 outline-orange-400 bg-orange-400 
        text-xl font-semibold text-slate-100 rounded-md duration-200 disabled:bg-slate-600
        disabled:outline-none hover:bg-orange-500 hover:outline-orange-500 hover:outline-offset-4"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "Logging..." : "Login"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
