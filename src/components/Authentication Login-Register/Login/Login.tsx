import RegularLogin from "./RegularLogin";
import { useDispatch } from "react-redux";
import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import SocialLogin from "../Social Login/SocialLogin";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className=" h-full w-full flex flex-col b justify-start items-center pt-10 gap-5 overflow-y-scroll  px-5">
      <div className="text-center w-full">
        <h2 className="text-4xl font-semibold mb-3">Login</h2>
        <p>To save your information</p>
        <hr className="border-b-2 mt-4 w-2/3 mx-auto" />
      </div>
      {/* --- social login div --- */}
      <SocialLogin />

      {/* --- regular login div --- */}
      <div className="w-full mt-4">
        <h2 className="text-center text-2xl font-semibold">
          Login with Email & Password
        </h2>
        <RegularLogin />
        <p className="text-center">
          No account ?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:text-blue-800 "
            draggable
            onClick={() => dispatch(goToPage("register"))}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
