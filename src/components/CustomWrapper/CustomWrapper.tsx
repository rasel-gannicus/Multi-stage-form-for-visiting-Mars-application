"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { addUserToRedux } from "@/Redux/features/user/userSlice";

const CustomWrapper = ({
  children, session
}: {
  children: React.ReactNode;
  session : any
}) => {
  const dispatch = useDispatch();
  // console.log(session);
  dispatch(addUserToRedux(session))

  return <>{children}</>;
};

export default CustomWrapper;
