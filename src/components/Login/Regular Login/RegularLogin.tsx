import { ubuntu } from "@/components/Form Page/StageOne/StageOne";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";

const RegularLogin = () => {
  return (
    <form
      // onSubmit={handleSubmit}
      className="mx-auto mb-0 pb-4 mt-4 w-full xl:w-2/3  space-y-4 "
    >
      {/* ---- Name Section ends  --- */}

      {/* --- Email --- */}
      <div>
        <div className="relative">
          <input
            //   onChange={(e) =>
            //     dispatch(
            //       fillUpFirstFormData({
            //         property: "email",
            //         value: e.target.value,
            //       })
            //     )
            //   }
            //   value={formdata.email}
            // required
            type="email"
            className="w-full rounded-full border-gray-200 p-4 pe-12 text-sm border-2"
            placeholder="Your email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <HiOutlineMail className="size-4 text-gray-400" />
          </span>
        </div>
      </div>
      {/* --- Password --- */}
      <div>
        <div className="relative">
          <input
            //   onChange={(e) =>
            //     dispatch(
            //       fillUpFirstFormData({
            //         property: "email",
            //         value: e.target.value,
            //       })
            //     )
            //   }
            //   value={formdata.email}
            // required
            type="password"
            className="w-full rounded-full border-gray-200 p-4 pe-12 text-sm border-2"
            placeholder="Your password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <IoKeyOutline className="size-4 text-gray-400" />
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="bg-slate-700 w-full rounded-full text-white text-lg py-3"
      >
        Login
      </button>
    </form>
  );
};

export default RegularLogin;