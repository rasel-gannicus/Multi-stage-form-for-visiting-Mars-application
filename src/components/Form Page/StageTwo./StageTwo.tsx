import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { useAppDispatch } from "@/Redux/store/reduxHooks";
import { Ubuntu } from "next/font/google";
import React from "react";

// --- font for button
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const StageTwo = () => {
  //   --- changing form page with redux
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-between relative  h-[640px] items-end">
      <div className=" h-[550px] overflow-y-scroll py-2">
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Book your sit today
            </h1>

            <p className="mt-4 text-gray-500">
              Going to Mars ain&apos;t that hard
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between  w-full px-8">
        <button
          onClick={() => dispatch(goToPage(1))}
          type="submit"
          className={`${ubuntu.className} inline-block rounded bg-yellow-400 hover:bg-yellow-300  px-5 py-3  font-medium text-gray-600 duration-300 transition-all`}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default StageTwo;
