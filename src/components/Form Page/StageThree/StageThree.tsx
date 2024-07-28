import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import React, { useEffect, useState } from "react";
import {
  TInitialStateForm3,
  fillUpThirdFormData,
} from "@/Redux/features/Form Information/formSlice3";
import PhoneInput from "react-phone-number-input";
import { HiOutlineMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";

const StageThree = () => {
  const dispatch = useAppDispatch();
  const formdata3 = useAppSelector(
    (state) => state.formData3.thirdPageInformation
  );
  const { healthDeclaration, emergencyContact, medicalConditions } = formdata3;

  // --- getting input value from Form and passing them to redux store
  const handleInputChange = (
    property: keyof TInitialStateForm3["thirdPageInformation"],
    value: any
  ) => {
    dispatch(fillUpThirdFormData({ property, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(goToPage(4));
  };

  // --- for 'Select Phone Number'
  const [phoneNumber, setPhoneNumber] = useState(
    formdata3.emergencyContact.phone
  );

  return (
    <div className="flex flex-col justify-between h-[80%] items-end lg:min-w-[500px] xl:min-w-[600px]">
      <div className=" overflow-y-scroll py-2 w-full">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Health and Safety
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-lg space-y-4 text-lg"
          >
            <div>
              <label>Health Declaration:</label>
              <div className="flex gap-4 mt-3">
                <label className="flex justify-start items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="healthDeclaration"
                    value="yes"
                    className="w-4 h-4"
                    checked={healthDeclaration === "yes"}
                    onChange={() =>
                      handleInputChange("healthDeclaration", "yes")
                    }
                  />
                  Yes
                </label>
                <label className="flex justify-start items-center gap-3 cursor-pointer ms-5">
                  <input
                    type="radio"
                    name="healthDeclaration"
                    value="no"
                    className="w-4 h-4"
                    checked={healthDeclaration === "no"}
                    onChange={() =>
                      handleInputChange("healthDeclaration", "no")
                    }
                  />
                  No
                </label>
              </div>
            </div>

            <div className="pt-5">
              <span className="text-red-500 font-semibold text-center w-full">
                Emergency Contact Information
              </span>

              {/* --- Emergency contact name --- */}
              <div className="mt-5">
                <label htmlFor="phone number" className=" ">
                  Contact Name
                </label>
                <div className="relative">
                  <input
                    onChange={(e: any) =>
                      handleInputChange("emergencyContact", {
                        ...emergencyContact,
                        name: e.target.value,
                      })
                    }
                    value={formdata3.emergencyContact.name}
                    // required
                    type="name"
                    className="w-full rounded-lg border-gray-200 mt-2 p-4 pe-12 text-sm border-2"
                    placeholder="Emergency contact name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <MdDriveFileRenameOutline className="size-4 text-gray-400" />
                  </span>
                </div>
              </div>

              {/* --- Emergency Phone Number --- */}
              <div className="py-5 flex flex-col">
                <label htmlFor="phone number" className=" ">
                  Phone Number
                </label>

                <PhoneInput
                  // required
                  placeholder="Emergency phone number"
                  value={phoneNumber}
                  onChange={(e: any) =>
                    handleInputChange("emergencyContact", {
                      ...emergencyContact,
                      phone: e,
                    })
                  }
                  className="border-gray-200 mt-2 border-2 rounded py-3 px-4"
                />
              </div>

              {/* --- Emergency Email --- */}
              <div>
                <label htmlFor="emergencyEmail">Email :</label>
                <div className="relative pt-3">
                  <input
                    onChange={(e: any) =>
                      handleInputChange("emergencyContact", {
                        ...emergencyContact,
                        email: e.target.value,
                      })
                    }
                    value={formdata3.emergencyContact.email}
                    name="emergencyEmail"
                    // required
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border-2"
                    placeholder="Emergency contact email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <HiOutlineMail className="size-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="medicalConditions">
                Any Medical Conditions (if applicable):
              </label>
              <textarea
                id="medicalConditions"
                rows={5}
                className="w-full rounded-md border-2 py-3 px-3"
                value={medicalConditions}
                onChange={(e) =>
                  handleInputChange("medicalConditions", e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="inline-block rounded bg-slate-600 hover:bg-slate-500 px-3 md:px-8 py-3 font-medium text-white absolute bottom-0 right-0 xl:right-[5%]"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-8">
        <button
          onClick={() => dispatch(goToPage(2))}
          className="inline-block rounded bg-yellow-400 hover:bg-yellow-300 px-3 md:px-5 py-3 font-medium text-gray-600 absolute bottom-0 left-0 xl:left-[5%]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default StageThree;
