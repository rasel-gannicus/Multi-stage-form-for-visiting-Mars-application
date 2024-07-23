import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import dummyImg1 from "@/assets/img/sdfs.jpg";
import dummyImg2 from "@/assets/img/sefsg.jpg";

// --- font for button
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const StageTwo = () => {
  // --- getting current page position in form with Redux
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);
  // --- getting formdata from Redux store
  const formdata = useAppSelector(
    (state) => state.formData.firstPageInformation
  );
  //   --- changing form page with redux
  const dispatch = useAppDispatch();

  const [hotel, setHotel] = useState("no hotel");
  // console.log(hotel);
  return (
    <div className="flex flex-col justify-between relative  h-[640px] items-end  lg:min-w-[600px]">
      <div className=" h-[550px] overflow-y-scroll py-2 w-full ">
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 w-full ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Travel Preferences
            </h1>
          </div>

          {/* ------------------------- Form  -------------------------- */}
          <form
            // onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-lg space-y-4 "
          >
            {/* --- Departure Date --- */}
            <div>
              <label htmlFor="date of birth" className="text-gray-500 ">
                Departure date :
              </label>

              <div className="relative">
                <input
                  // onChange={(e) =>
                  //   dispatch(
                  //     fillUpFirstFormData({
                  //       property: "dateOfBirth",
                  //       value: e.target.value,
                  //     })
                  //   )
                  // }
                  value={formdata.dateOfBirth}
                  // required
                  type="date"
                  className="w-full rounded-lg border-2 border-gray-200 text-gray-400 p-4 pe-12 mt-2 text-sm  "
                  placeholder="Date of birth"
                />
              </div>
            </div>

            {/* --- Return Date --- */}
            <div>
              <label htmlFor="date of birth" className="text-gray-500 ">
                Return date :
              </label>

              <div className="relative">
                <input
                  // onChange={(e) =>
                  //   dispatch(
                  //     fillUpFirstFormData({
                  //       property: "dateOfBirth",
                  //       value: e.target.value,
                  //     })
                  //   )
                  // }
                  value={formdata.dateOfBirth}
                  // required
                  type="date"
                  className="w-full rounded-lg border-2 border-gray-200 text-gray-400 p-4 pe-12 mt-2 text-sm "
                  placeholder="Date of birth"
                />
              </div>
            </div>

            {/* --- Accomodation Preferenes --- */}

            <h2 className=" pt-5">Accomodation Preferences : </h2>
            <div className="flex justify-between items-center">
              <div>
                <label className="flex flex-col py-1 gap-3 hover:text-black justify-start items-center text-gray-500">
                  <span className="flex w-full justify-start items-center gap-4">
                    <input
                      type="radio"
                      name="space hotel"
                      id=""
                      value="space-hotel"
                      className="w-5 h-5 cursor-pointer"
                      onChange={(e) => setHotel(e.target.value)}
                    />
                    <span className="cursor-pointer">Space Hotel</span>
                  </span>
                  <Image
                    src={dummyImg2}
                    className="cursor-pointer"
                    alt="Accomodation image"
                    style={{ width: "200px" }}
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col py-1 gap-3 hover:text-black justify-start items-center  text-gray-500">
                  <span className="flex w-full justify-start items-center gap-3">
                    <input
                      type="radio"
                      name="space hotel"
                      id=""
                      value="martian-base"
                      className="w-5 h-5 cursor-pointer"
                      onChange={(e) => setHotel(e.target.value)}
                    />
                    <span className="cursor-pointer">Martian Base</span>
                  </span>
                  <Image
                    src={dummyImg1}
                    className="cursor-pointer"
                    alt="Accomodation image"
                    style={{ width: "200px" }}
                  />
                </label>
              </div>
            </div>

            {/* ---------------- Next Page Button ---------------- */}
            <button
              type="submit"
              className={`${ubuntu.className} inline-block rounded bg-slate-600 hover:bg-slate-500 px-8 py-3  font-medium text-white absolute bottom-0 right-0`}
            >
              Next
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- Previous Page Button ---------------- */}
      <div className="flex items-center justify-between  w-full px-8">
        {pageStatus != 1 && (
          <button
            onClick={() => dispatch(goToPage(1))}
            type="submit"
            className={`${ubuntu.className} inline-block rounded bg-yellow-400 hover:bg-yellow-300  px-5 py-3  font-medium text-gray-600 duration-300 transition-all`}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default StageTwo;
