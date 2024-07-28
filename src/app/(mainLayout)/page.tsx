"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import StageOne from "@/components/Form Page/StageOne/StageOne";
import StageThree from "@/components/Form Page/StageThree/StageThree";
import StageTwo from "@/components/Form Page/StageTwo./StageTwo";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const dispatch = useAppDispatch();
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);

  return (
    <main className=" flex flex-col lg:flex-row rounded-lg gap-5 max-w-[1300px] mx-auto items-start justify-between p-10 shadow-2xl bg-white ">
      <div className="flex-1 w-full bg-cyan-400">
        <Sidebar />
      </div>
      <div className="flex-2 w-full flex flex-col items-center justify-start overflow-hidden">
        {pageStatus == 1 && <StageOne />} 
        {pageStatus == 2 && <StageTwo />} 
        {pageStatus == 3 && <StageThree />} 
      </div>
    </main>
  );
}
