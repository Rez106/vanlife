import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Form } from "react-router-dom";

const LoginForm = (props) => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const onSubmitLoginHandler = (e) => {
    e.preventDefault();

    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    if (!email.includes("@") || password.length < 3)
      return setError("Wrong Email or Password");

    props.handler({ email, password });

    setError(null);
    enteredEmail.current.value = "";
    enteredPassword.current.value = "";
  };

  const togglePassword = () => {
    setShowPass((prevState) => !prevState);
  };

  return (
    <Form className="w-full 2xl:w-3/4">
      {error && (
        <p className="w-full text-center text-lg font-semibold mb-2 text-red-500 rounded-md">
          *{error}
        </p>
      )}
      <input
        ref={enteredEmail}
        type="text"
        id="emailInput"
        className="w-full rounded-t-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold
         border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
        placeholder="E-mail"
      />
      <div className="relative w-full">
        <input
          ref={enteredPassword}
          type={showPass ? "text" : "password"}
          id="passwordInput"
          className="w-full rounded-b-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold
           border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="text-xl absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
      <button
        className="w-full mt-8 py-2 px-4 outline outline-2 outline-orange-400 bg-orange-400 
        text-xl font-semibold text-slate-100 rounded-md duration-200
       hover:bg-orange-500 hover:outline-orange-500 hover:outline-offset-4"
      >
        Log in
      </button>
    </Form>
  );
};

export default LoginForm;
