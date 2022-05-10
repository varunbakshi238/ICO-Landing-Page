import React from "react";
import { useLocation } from "react-router-dom";

import Signup from "../components/multi-step-form/Signup";
import Login from "../components/multi-step-form/Login";


const SignUp = () => {

  let location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <div className="container-fluid p-5 grad">
      <div className="row">
        <div className="col-md-8 col-lg-7 col-xl-5 col-sm-8 m-auto">

          {location.pathname === "/sign-up" ? (
            <Signup />
          ) : location.pathname === "/sign-in" ? (
            <Login />
          ) : (
            "false"
          )}

        </div>
      </div>
    </div>
  );
};

export default SignUp;
