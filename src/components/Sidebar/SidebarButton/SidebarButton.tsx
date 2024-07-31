import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { ubuntu } from "@/components/Form Page/StageOne/StageOne";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { FaHome, FaUserAstronaut } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SidebarButton = (props: any) => {
  const { pageStatus, userStatus } = props.props;

  const dispatch = useDispatch();

  return (
    <>
      {pageStatus != "login" && pageStatus != "register" && (
        <div className="">
          {userStatus ? (
            <button
              className={` ${ubuntu.className} bg-white z-50 py-2 px-2 text-black absolute bottom-1 right-1 rounded flex justify-center items-center font-normal text-sm gap-2 opacity-30 hover:opacity-90 transition-all duration-300`}
              onClick={() => signOut()}
            >
              Log out
              {userStatus.image ? (
                <Image
                  alt="user image"
                  src={userStatus.image}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              ) : (
                <FaUserAstronaut />
              )}
            </button>
          ) : (
            <button
              className={` ${ubuntu.className} bg-white z-50 py-2 px-2 text-black absolute bottom-1 right-1 rounded flex justify-center items-center font-normal text-sm gap-2 opacity-30 hover:opacity-90 transition-all duration-300`}
              onClick={() => dispatch(goToPage("login"))}
            >
              Log In <FaUserAstronaut />
            </button>
          )}
        </div>
      )}

      {(pageStatus == "login" || pageStatus == "register") && (
        <button
          className={` ${ubuntu.className} bg-white z-50 py-2 px-2 text-black absolute bottom-1 left-[50%] translate-x-[-50%] rounded flex justify-center items-center font-normal text-sm gap-2  border-2 transition-all duration-300 hover:bg-slate-700 hover:text-white`}
          onClick={() => dispatch(goToPage(1))}
        >
          Home Page <FaHome />
        </button>
      )}
    </>
  );
};

export default SidebarButton;
