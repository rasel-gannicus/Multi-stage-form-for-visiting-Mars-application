"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserToRedux } from "@/Redux/features/user/userSlice";
import { useGetUserInfoQuery } from "@/Redux/features/user/userApi";
import { fillUpFirstFromWithMongodbData } from "@/Redux/features/Form Information/formSlice";
import { fillUpSecondFromWithMongodbData } from "@/Redux/features/Form Information/formSlice2";
import { fillUpThirdFromWithMongodbData } from "@/Redux/features/Form Information/formSlice3";

const CustomWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const { data } = useGetUserInfoQuery(session?.user?.email);

  useEffect(() => {
    // console.log(data);
    if (session?.user.email) {
      dispatch(addUserToRedux(session));
      setEmail(session.user.email);
    }
    if(data?.isSubmitted){
      dispatch(fillUpFirstFromWithMongodbData(data?.formData?.firstPageInformation));
      dispatch(fillUpSecondFromWithMongodbData(data?.formData?.secondPageInformation));
      dispatch(fillUpThirdFromWithMongodbData(data?.formData?.thirdPageInformation));
    }
  }, [session, email, data]);

  return <>{children}</>;
};

export default CustomWrapper;
