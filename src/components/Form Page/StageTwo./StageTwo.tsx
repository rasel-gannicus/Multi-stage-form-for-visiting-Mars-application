import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import Image from "next/image";
import React, { useState } from "react";
import dummyImg1 from "@/assets/img/martian hotel 2.jpeg";
import dummyImg2 from "@/assets/img/martian hotel 3.png";
import { ubuntu } from "../StageOne/StageOne";
import Datepicker from "react-tailwindcss-datepicker";
import {
  TInitialStateForm2,
  fillUpSecondFormData,
} from "@/Redux/features/Form Information/formSlice2";

const StageTwo = () => {
  //   --- changing form page with redux
  const dispatch = useAppDispatch();

  // --- getting current page status with Redux
  const pageStatus = useAppSelector((state) => state.pageRouting.currentPage);

  // --- getting formdata for second page from Redux store
  const formdata2 = useAppSelector(
    (state) => state.formData2.secondPageInformation
  );
  const { departureDate, returnDate, accomodation, specialPreferences } =
    formdata2;

  // --- getting input value from Form and passing them to redux store
  const handleInputChange = (
    property: keyof TInitialStateForm2["secondPageInformation"],
    value: any
  ) => {
    dispatch(fillUpSecondFormData({ property, value }));
  };

  //   --- function for submitting form
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(goToPage(3));
  };
  return (
    <div className="flex flex-col justify-between overflow-y-scroll  h-[80%] items-end  lg:min-w-[500px] xl:min-w-[600px] ">
      <div className=" py-2 w-full ">
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 w-full ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Travel Preferences
            </h1>
          </div>

          {/* ------------------------- Form  -------------------------- */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-lg space-y-4 text-lg"
          >
            {/* --- Departure Date --- */}
            <div>
              <label htmlFor="date of birth" className=" ">
                Departure date :
              </label>

              <div className="relative mt-3">
                <Datepicker
                  inputClassName="w-full rounded-md focus:ring-0 font-normal border-2 py-3 px-3 "
                  useRange={false}
                  asSingle={true}
                  popoverDirection="down"
                  value={departureDate}
                  onChange={(e) => handleInputChange("departureDate", e)}
                />
              </div>
            </div>

            {/* --- Return Date --- */}
            <div>
              <label htmlFor="date of birth" className=" ">
                Return date :
              </label>

              <div className="relative mt-3">
                <Datepicker
                  inputClassName="w-full rounded-md focus:ring-0 font-normal border-2 py-3 px-3 "
                  useRange={false}
                  asSingle={true}
                  popoverDirection="down"
                  value={returnDate}
                  onChange={(e) => handleInputChange("returnDate", e)}
                />
              </div>
            </div>

            {/* --- Accomodation Preferenes --- */}

            <h2 className=" text-left text-sm md:text-lg pt-5">
              Accomodation Preferences :
            </h2>
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-start">
              <div>
                <label className="flex flex-col py-1 gap-3 hover:text-black justify-start items-center text-gray-500">
                  <span className="flex w-full justify-start items-center gap-4">
                    <input
                      type="radio"
                      name="hotel"
                      id=""
                      value="space-hotel"
                      className="w-5 h-5 cursor-pointer"
                      checked={accomodation == "space-hotel"}
                      onChange={(e) =>
                        handleInputChange("accomodation", e.target.value)
                      }
                    />
                    <span className="cursor-pointer">Space Hotel</span>
                  </span>
                  <Image
                    src={dummyImg2}
                    className="cursor-pointer rounded "
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
                      name="hotel"
                      id=""
                      value="martian-base"
                      className="w-5 h-5 cursor-pointer"
                      checked={accomodation == "martian-base"}
                      onChange={(e) =>
                        handleInputChange("accomodation", e.target.value)
                      }
                    />
                    <span className="cursor-pointer">Martian Base</span>
                  </span>
                  <Image
                    src={dummyImg1}
                    className="cursor-pointer rounded  "
                    alt="Accomodation image"
                    style={{ width: "200px" }}
                  />
                </label>
              </div>
            </div>

            {/* --- Special Preferenes --- */}
            <div className="flex justify-center gap-2 items-start flex-col">
              <h2 className=" pt-5">Do you have any special preferences : </h2>
              <div className="flex flex-col lg:flex-row justify-between items-start gap-5 w-3/6">
                <label className="flex flex-col py-1 gap-3 hover:text-black justify-start items-center text-gray-500">
                  <span className="flex w-full justify-start items-center gap-4">
                    <input
                      type="radio"
                      name="special-preferences"
                      id=""
                      value="yes"
                      checked={specialPreferences.statues}
                      className="w-5 h-5 cursor-pointer"
                      onChange={(e) =>
                        handleInputChange("specialPreferences", {
                          ...specialPreferences,
                          statues: true,
                        })
                      }
                    />
                    <span className="cursor-pointer">Yes</span>
                  </span>
                </label>
                <label className="flex flex-col py-1 gap-3 hover:text-black justify-start items-center  text-gray-500">
                  <span className="flex w-full justify-start items-center gap-3">
                    <input
                      type="radio"
                      name="special-preferences"
                      id=""
                      value="no"
                      checked={!specialPreferences.statues}
                      className="w-5 h-5 cursor-pointer"
                      onChange={(e) =>
                        handleInputChange("specialPreferences", {
                          ...specialPreferences,
                          statues: false,
                        })
                      }
                    />
                    <span className="cursor-pointer">No</span>
                  </span>
                </label>
              </div>
              {specialPreferences.statues && (
                <div className="my-5">
                  <p>Describe your special preferences : </p>
                  <textarea
                    name="specialPref"
                    id=""
                    rows={5}
                    required
                    className="border-2 my-5 w-full p-3"
                    value={specialPreferences.description}
                    onChange={(e) =>
                      handleInputChange("specialPreferences", {
                        ...specialPreferences,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              )}
            </div>

            {/* ---------------- Next Page Button ---------------- */}
            <button
              type="submit"
              className={`${ubuntu.className} inline-block rounded bg-slate-600 hover:bg-slate-500 px-3 md:px-8 py-3  font-medium text-white absolute bottom-0 right-0 xl:right-[5%] `}
            >
              Next
            </button>
          </form>
        </div>
      </div>

      {/* ---------------- Previous Page Button ---------------- */}
      <div className="flext  items-center justify-between  w-full px-8">
        {pageStatus != 1 && (
          <button
            onClick={() => dispatch(goToPage(1))}
            type="submit"
            className={`${ubuntu.className} inline-block rounded bg-yellow-400 hover:bg-yellow-300 px-3 md:px-5 py-3  font-medium text-gray-600 duration-300 transition-all absolute bottom-0 left-0 xl:left-[5%] `}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default StageTwo;
