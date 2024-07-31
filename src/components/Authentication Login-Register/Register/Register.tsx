import React from "react";
import SocialLogin from "../Social Login/SocialLogin";
import RegularRegister from "./RegularRegister";
import { useAppDispatch } from "@/Redux/store/reduxHooks";
import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  return (
    <div className=" h-full w-full flex flex-col b justify-start items-center pt-10 gap-5 overflow-y-scroll  px-5">
      <div className="text-center w-full">
        <h2 className="text-4xl font-semibold mb-3 text-slate-700">Register</h2>
        <hr className="border-b-2 mt-4 w-2/3 mx-auto" />
      </div>

      {/* --- regular login div --- */}
      <div className="w-full mt-4">
        <RegularRegister />
        <p className="text-center">
          Already have an account ? <span> </span>
          <span
            className="text-blue-600 cursor-pointer hover:text-blue-800 "
            draggable
            onClick={() => dispatch(goToPage("login"))}
          >
             Login
          </span>
        </p>
      </div>
      <p className="text-center">Or</p>
      {/* --- social login div --- */}
      <SocialLogin />
    </div>
  );
};

export default Register;
