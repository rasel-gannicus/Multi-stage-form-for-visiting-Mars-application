import Image from "next/image";
import React from "react";
import sidebarImg1 from "@/assets/img/ai-generated-8153530_1280.png";
import sidebarImg2 from "@/assets/img/mars 3.jpg";
import { useAppSelector } from "@/Redux/store/reduxHooks";

const Sidebar = () => {
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);

  return (
    <div className="md:w-[400px] lg:min-h-[640px] h-[90%] rounded-lg bg-blue-400 flex flex-col justify-start items-center py-14 text-xl font-semibold text-white relative overflow-hidden">
      {/* --- Sidebar Page indicator --- */}
      <div className=" z-50 flex flex-col justify-center items-start ">
        {/* --- Indicator 01 --- */}
        <div className="flex justify-start items-center gap-3  px-5 py-5 rounded  transition-all duration-300 cursor-pointer ">
          <button
            className={`border-4 w-12 h-12 rounded-full ${
              pageStatus == 1 && "bg-white text-slate-700 border-none"
            } `}
          >
            1
          </button>
          <div>
            <p
              className={`text-sm font-normal text-slate-400 ${
                pageStatus === 1 && "text-green-400"
              } `}
            >
              Stage 1
            </p>
            <button>Personal Information</button>
          </div>
        </div>

        {/* --- Indicator 02 --- */}
        <div className="flex justify-start items-center gap-3  px-5 py-5 rounded  transition-all duration-300 cursor-pointer ">
          <button
            className={`border-4 w-12 h-12 rounded-full ${
              pageStatus == 2 && "bg-white text-slate-700 border-none"
            } `}
          >
            2
          </button>
          <div>
            <p
              className={`text-sm font-normal text-slate-400 ${
                pageStatus === 2 && "text-green-400"
              } `}
            >
              Stage 2
            </p>
            <button>Travel Preference</button>
          </div>
        </div>

        {/* --- Indicator 03 --- */}
        <div className="flex justify-start items-center gap-3  px-5 py-5 rounded  transition-all duration-300 cursor-pointer ">
          <button className="border-4 w-12 h-12 rounded-full">3</button>
          <div>
            <p className="text-sm font-normal text-slate-400">Stage 3</p>
            <button>Health & Safety</button>
          </div>
        </div>
      </div>

      {/* --- Sidebar image div --- */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        {pageStatus == 1 && (
          <Image
            src={sidebarImg1}
            alt="sidebar image 01"
            className=""
          />
        )}
        {pageStatus == 2 && (
          <Image
            src={sidebarImg2}
            alt="sidebar image 01"
            className=""
            fill
          />
        )}
      </div>
      <div className="absolute bg-black top-0 bottom-0 left-0 right-0 z-20 opacity-70"></div>
    </div>
  );
};

export default Sidebar;
