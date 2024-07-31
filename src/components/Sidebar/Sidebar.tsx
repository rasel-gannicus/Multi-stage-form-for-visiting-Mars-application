import SidebarButton from "./SidebarButton/SidebarButton";
import PageIndicator from "./PageIndicator/PageIndicator";
import SideBarImage from "./SidebarImage/SideBarImage";

const Sidebar = ({ props }: any) => {
  const { pageStatus, userStatus } = props;
  return (
    <div className="lg:w-[400px] mx-auto rounded-lg flex flex-col justify-start items-center py-8 lg:py-14 text-xl font-semibold text-white relative overflow-hidden h-full  ">
      {pageStatus != "login" && <PageIndicator props={props} />}

      <SideBarImage props={props} />

      {pageStatus != "login" && (
        <div className="absolute bg-black top-0 bottom-0 left-0 right-0 z-20 opacity-40"></div>
      )}

      <SidebarButton props={props} />
    </div>
  );
};

export default Sidebar;
