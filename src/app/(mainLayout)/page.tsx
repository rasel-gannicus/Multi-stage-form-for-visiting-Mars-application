"use client" ;
import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch() ;
  const pageStatus = useSelector(state => state.pageRouting.currentPage) ;
  console.log(pageStatus);
  return (
    <main className="flex  rounded container flex-col items-start justify-center p-10 shadow-2xl bg-white">
      <Sidebar />
      {/* <button onClick={()=>dispatch(goToPage(pageStatus +1 ))} className="bg-cyan-600 my-20">Change Page</button> */}
    </main>
  );
}
