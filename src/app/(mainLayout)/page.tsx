"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import StageOne from "@/components/Form Page/StageOne/StageOne";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const dispatch = useAppDispatch();
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);

  return (
    <main className="flex rounded container gap-5 max-w-[1300px] mx-auto items-start justify-between p-10 shadow-2xl bg-white">
      <div className="flex-1">
        <Sidebar />
      </div>
      {/* <button onClick={()=>dispatch(goToPage(pageStatus +1 ))} className="bg-cyan-600 my-20">Change Page</button> */}
      <div className="flex-2 w-full flex flex-col items-center justify-start  max-h-[640px] overflow-y-auto">
        <StageOne />
      </div>
    </main>
  );
}
