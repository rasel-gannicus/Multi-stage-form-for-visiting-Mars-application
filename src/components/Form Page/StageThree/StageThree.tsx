import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store/reduxHooks";
import React from "react";
import { TInitialStateForm3, fillUpThirdFormData } from "@/Redux/features/Form Information/formSlice3";

const StageThree = () => {

  const dispatch = useAppDispatch();
  const formdata3 = useAppSelector((state) => state.formData3.thirdPageInformation);
  const { healthDeclaration, emergencyContact, medicalConditions } = formdata3;

  const handleInputChange = (property: keyof TInitialStateForm3["thirdPageInformation"], value: any) => {
    dispatch(fillUpThirdFormData({ property, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(goToPage(4));  
  };

  return (
    <div className="flex flex-col justify-between relative h-[640px] items-end lg:min-w-[500px] xl:min-w-[600px]">
      <div className="h-[550px] overflow-y-scroll py-2 w-full">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Health and Safety</h1>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-lg space-y-4 text-lg">
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
                    onChange={() => handleInputChange("healthDeclaration", "yes")}
                  />
                  Yes
                </label>
                <label  className="flex justify-start items-center gap-3 cursor-pointer ms-5">
                  <input
                    type="radio"
                    name="healthDeclaration"
                    value="no"
                    className="w-4 h-4"
                    checked={healthDeclaration === "no"}
                    onChange={() => handleInputChange("healthDeclaration", "no")}
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="emergencyContact">Emergency Contact Information:</label>
              <input
                type="text"
                id="emergencyContact"
                className="w-full rounded-md border-2 py-3 px-3"
                value={emergencyContact}
                onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="medicalConditions">Any Medical Conditions (if applicable):</label>
              <textarea
                id="medicalConditions"
                rows={5}
                className="w-full rounded-md border-2 py-3 px-3"
                value={medicalConditions}
                onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="inline-block rounded bg-slate-600 hover:bg-slate-500 px-3 md:px-8 py-3 font-medium text-white absolute bottom-0 right-0"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-8">
        <button
          onClick={() => dispatch(goToPage(2))}
          className="inline-block rounded bg-yellow-400 hover:bg-yellow-300 px-3 md:px-5 py-3 font-medium text-gray-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default StageThree;
