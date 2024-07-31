import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
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
    );
};

export default SocialLogin;