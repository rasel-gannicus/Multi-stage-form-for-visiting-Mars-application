<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-lg text-center">
  <h1 className="text-2xl font-bold sm:text-3xl">
    Book your sit today
  </h1>

  <p className="mt-4 text-gray-500">Going to Mars ain't that hard</p>
</div>

<form action="#" className="mx-auto mb-0 mt-8 max-w-lg space-y-4 ">
  {/* ---- Name Section starts  --- */}

  <div className=" flex justify-between items-center gap-3">
    {/* --- first name --- */}
    <div>
      <label htmlFor="firstName" className="sr-only">
        First Name
      </label>

      <div className="relative">
        <input
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

  {/* --- Date of Birth --- */}
  <div>
    <label htmlFor="password" className="text-gray-500 ps-2">
      Date of birth
    </label>

    <div className="relative">
      <input
        type="date"
        className="w-full rounded-lg border-2 border-gray-200 text-gray-400 p-4 pe-12 mt-2 text-sm "
        placeholder="Date of birth"
      />
    </div>
  </div>

  <div className="flex items-center justify-end">
    <button
      type="submit"
      className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
    >
      Sign in
    </button>
  </div>
</form>
</div>