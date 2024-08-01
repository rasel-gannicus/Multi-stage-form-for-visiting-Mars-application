"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSession, addUserToRedux } from "@/Redux/features/user/userSlice";
import { useGetUserInfoQuery } from "@/Redux/features/user/userApi";
import { fillUpFirstFromWithMongodbData } from "@/Redux/features/Form Information/formSlice";
import { fillUpSecondFromWithMongodbData } from "@/Redux/features/Form Information/formSlice2";
import { fillUpThirdFromWithMongodbData } from "@/Redux/features/Form Information/formSlice3";
import { useAppSelector } from "@/Redux/store/reduxHooks";

const CustomWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const userSession = useAppSelector(state => state.userSlice.userSession) ;

  const dispatch = useDispatch();
  const { data } = useGetUserInfoQuery(userSession.email);

  useEffect(() => {    
    if (session?.user.email) {
      dispatch(addNewSession(session.user));
      dispatch(addUserToRedux(session));
    }
    if (data?.isSubmitted) {
      dispatch(
        fillUpFirstFromWithMongodbData(data?.formData?.firstPageInformation)
      );
      dispatch(
        fillUpSecondFromWithMongodbData(data?.formData?.secondPageInformation)
      );
      dispatch(
        fillUpThirdFromWithMongodbData(data?.formData?.thirdPageInformation)
      );
    }
  }, [session, data, userSession]);

  return <>{children}</>;
};

export default CustomWrapper;
