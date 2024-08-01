"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserToRedux } from "@/Redux/features/user/userSlice";

const CustomWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(addUserToRedux(session));
    } 
  }, [session]);

  return <>{children}</>;
};

export default CustomWrapper;
