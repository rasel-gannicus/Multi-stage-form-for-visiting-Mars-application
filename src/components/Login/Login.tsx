import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import RegularLogin from "./Regular Login/RegularLogin";
import { useDispatch } from "react-redux";
import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";

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
      <div className="social-login w-full flex flex-col justify-center items-center gap-3">
        <button
          className="flex justify-center items-center gap-3 border-2 px-4 py-2 w-full xl:w-2/4 rounded-full hover:bg-slate-500 duration-300 transition-all hover:text-white text-xs  sm:text-base "
          onClick={() =>
            signIn("google", {
              callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_SITE_URL}`,
            })
          }
        >
          <FcGoogle />
          Login with Google
        </button>
        <button
          className="flex justify-center items-center gap-3 border-2 px-4 py-2 w-full xl:w-2/4 rounded-full hover:bg-slate-500 duration-300 transition-all hover:text-white text-xs  sm:text-base"
          onClick={() =>
            signIn("github", {
              callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_SITE_URL}`,
            })
          }
        >
          <FaGithub />
          Login with Github
        </button>
      </div>

      {/* --- regular login div --- */}
      <div className="w-full mt-4">
        <h2 className="text-center text-2xl font-semibold">
          Login with Email & Password{" "}
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
