const PageIndicator = (props: any) => {
  const { pageStatus, userStatus } = props.props;
  return (
    <div className=" z-50 flex flex-wrap w-full gap-3 lg:gap-10 lg:flex-col justify-center items-start lg:ps-5 ">
      {/* --- Indicator 01 --- */}
      <div className="flex justify-start items-center gap-3  rounded  transition-all duration-300  ">
        <button
          className={`border-4 w-12 h-12 rounded-full ${
            pageStatus == 1 && "bg-white text-slate-700 border-none"
          } `}
        >
          1
        </button>
        <div className="hidden lg:block">
          <p
            className={`text-sm font-normal  ${
              pageStatus === 1 ? "text-green-400" : "text-slate-400"
            } `}
          >
            Stage 1
          </p>
          <button>Personal Information</button>
        </div>
      </div>

      {/* --- Indicator 02 --- */}
      <div className="flex justify-start items-center gap-3 rounded  transition-all duration-300 cursor-pointer ">
        <button
          className={`border-4 w-12 h-12 rounded-full ${
            pageStatus == 2 && "bg-white text-slate-700 border-none"
          } `}
        >
          2
        </button>
        <div className="hidden lg:block">
          <p
            className={`text-sm font-normal  ${
              pageStatus === 2 ? "text-green-400" : "text-slate-400"
            } `}
          >
            Stage 2
          </p>
          <button>Travel Preference</button>
        </div>
      </div>

      {/* --- Indicator 03 --- */}
      <div className="flex justify-start items-center gap-3  rounded  transition-all duration-300 cursor-pointer ">
        <button
          className={`border-4 w-12 h-12 rounded-full ${
            pageStatus == 3 && "bg-white text-slate-700 border-none"
          } `}
        >
          3
        </button>
        <div className="hidden lg:block">
          <p
            className={`text-sm font-normal  ${
              pageStatus === 3 ? "text-green-400" : "text-slate-400"
            } `}
          >
            Stage 3
          </p>
          <button>Health & Safety</button>
        </div>
      </div>
    </div>
  );
};

export default PageIndicator;
