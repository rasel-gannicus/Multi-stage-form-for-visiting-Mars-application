import Image from "next/image";
import React from "react";
import sidebarImg1 from "@/assets/img/ai-generated-8153530_1280.png";
import sidebarImg2 from "@/assets/img/mars 3.jpg";
import sidebarImg3 from "@/assets/img/mars 2.jpg";
import loginImg from "@/assets/img/space ai.jpg";

const SideBarImage = (props : any) => {

  const { pageStatus, userStatus } = props.props;
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        {pageStatus == 1 && (
          <Image src={sidebarImg1} alt="sidebar image 01" className="" />
        )}
        {pageStatus == 2 && (
          <Image src={sidebarImg2} alt="sidebar image 02" className="" />
        )}
        {pageStatus == 3 && (
          <Image
            src={sidebarImg3}
            alt="sidebar image 02"
            style={{ width: "1400px", objectFit: "fill" }}
          />
        )}
        {pageStatus == 'login' && (
          <Image
            src={loginImg}
            alt="sidebar image 02"
            className=" hidden lg:block absolute top-[50%] translate-y-[-50%] "
            // style={{ width: "1400px", objectFit: "fill" }}
          />
        )}
      </div>
    );
};

export default SideBarImage;