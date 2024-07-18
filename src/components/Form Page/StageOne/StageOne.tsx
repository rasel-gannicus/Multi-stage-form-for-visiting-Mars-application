import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Select from "react-select";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-number-input";
import React, { ChangeEvent } from "react";
import { Ubuntu } from "next/font/google";

// --- font for button
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const StageOne = () => {
  // --- for 'Select Phone Number' menubar
  const [phoneNumber, setPhoneNumber] = useState("");

  // --- selecting countries for 'Select Country' menubar
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // --- fetching countrylist for the 'Select Country' menu with SSG(Static Site Generation) method
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code",
          {
            cache: "force-cache",
          }
        );
        const data = await response.json();

        if (data.countries.length > 0) {
          setCountries(data.countries);
          setSelectedCountry(data.userSelectValue);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  //   --- function for submitting form
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="flex flex-col justify-between  h-[640px] items-end">
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

          {/* ------------------------- Form  -------------------------- */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-lg space-y-4 "
          >
            {/* ---- Name Section starts  --- */}

            <div className=" flex justify-between items-center gap-3">
              {/* --- first name --- */}
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>

                <div className="relative">
                  <input
                    required
                    type="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border-2"
                    placeholder="First Name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <MdDriveFileRenameOutline className="size-4 text-gray-400" />
                  </span>
                </div>
              </div>

              {/* --- last name --- */}
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>

                <div className="relative">
                  <input
                    required
                    type="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border-2"
                    placeholder="Last Name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <MdDriveFileRenameOutline className="size-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>
            {/* ---- Name Section ends  --- */}

            {/* --- Email --- */}
            <div>
              <div className="relative">
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border-2"
                  placeholder="Your email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <HiOutlineMail className="size-4 text-gray-400" />
                </span>
              </div>
            </div>

            {/* --- Date of Birth --- */}
            <div>
              <label htmlFor="date of birth" className="text-gray-500 ">
                Date of birth
              </label>

              <div className="relative">
                <input
                  required
                  type="date"
                  className="w-full rounded-lg border-2 border-gray-200 text-gray-400 p-4 pe-12 mt-2 text-sm "
                  placeholder="Date of birth"
                />
              </div>
            </div>

            {/* --- Select Country --- */}
            <div className="">
              <label htmlFor="date of birth" className="text-gray-500 ">
                Your Country
              </label>
              <Select
                required
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) =>
                  setSelectedCountry(selectedOption)
                }
                className="border-gray-200 mt-2 "
              />
            </div>

            {/* --- Phone Number --- */}
            <div className="py-5">
              <label htmlFor="phone number" className="text-gray-500 ">
                Phone Number
              </label>

              <PhoneInput
                required
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(phoneNumber: any) => setPhoneNumber(phoneNumber)}
                className="border-gray-200 mt-2 border-2 rounded py-3 px-4"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-between  w-full px-8">
        <button
          type="submit"
          className={`${ubuntu.className} inline-block rounded-lg bg-orange-500 hover:bg-orange-400 px-5 py-3  font-medium text-white`}
        >
          Go Back
        </button>
        <button
          type="submit"
          className={`${ubuntu.className} inline-block rounded-lg bg-slate-600 hover:bg-slate-500 px-8 py-3  font-medium text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StageOne;
