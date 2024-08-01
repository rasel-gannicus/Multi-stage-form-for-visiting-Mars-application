"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import FinalPage from "@/components/Form Page/Final Page/FinalPage";
import StageOne from "@/components/Form Page/StageOne/StageOne";
import StageThree from "@/components/Form Page/StageThree/StageThree";
import StageTwo from "@/components/Form Page/StageTwo./StageTwo";
import Sidebar from "@/components/Sidebar/Sidebar";
import marsMan from "@/assets/img/mars_man-removebg-preview.png";
import Image from "next/image";
import Login from "@/components/Authentication Login-Register/Login/Login";
import Register from "@/components/Authentication Login-Register/Register/Register";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // --- getting current page position in form with Redux
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);
  const userStatus = useAppSelector((state) => state.userSlice.user);

  return (
    <main
      className={`flex flex-col lg:flex-row rounded-lg gap-5 max-w-[90%] 2xl:max-w-[1300px] mx-auto items-start justify-between px-5 py-5 shadow-2xl bg-white ${
        pageStatus != 4 ? "h-[90vh] xl:h-[650px]" : "h-full my-10 py-10"
      } overflow-hidden `}
    >
      <div className="flex-1 w-full h-full ">
        {pageStatus != 4 && <Sidebar props={{ pageStatus, userStatus }} />}
      </div>
      <div className="flex-2 w-full flex flex-col items-center justify-start overflow-hidden h-full relative">
        {pageStatus == 1 && <StageOne />}
        {pageStatus == 2 && <StageTwo />}
        {pageStatus == 3 && <StageThree />}
        {pageStatus == 4 && <FinalPage />}
        {pageStatus == "login" && <Login />}
        {pageStatus == "register" && <Register />}
      </div>

      {pageStatus == 4 && (
        <Image
          src={marsMan}
          alt="marsman pic"
          className="w-[250px] fixed bottom-0 right-0 z-50 hidden lg:block "
        />
      )}

      <Toaster
        toastOptions={{
          className: "text-center",
        }}
      />
    </main>
  );
}
