"use client";
import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { registerUser } from "@/utils/actions/registerUser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import loadingImg from "@/assets/img/loading.gif" ; 
import Image from "next/image";

const RegularRegister = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== repassword) {
      // window.alert("Password didn't matched");
      toast.error("Password didn't matched");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be atleast 6 characters long !");
      return;
    }
    try {
      setLoading(true);
      const res = await registerUser({
        name,
        email,
        password,
      });
      if (!res.success) {
        setLoading(false);
        toast(res.message);
      }
      if (res.success) {
        setLoading(false);
        toast.success(res.message + " Now login please !");
        dispatch(goToPage("login"));
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err.message);
      throw new Error(err.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 pb-4 mt-4 w-full xl:w-2/3  space-y-4 "
    >
      {/* --- Name --- */}
      <div>
        <div className="relative">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            className="w-full rounded-full border-gray-200 p-4 pe-12 text-sm border-2"
            placeholder="Your Name"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <FaRegUser className="size-4 text-gray-400" />
          </span>
        </div>
      </div>
      {/* --- Email --- */}
      <div>
        <div className="relative">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full rounded-full border-gray-200 p-4 pe-12 text-sm border-2"
            placeholder="Your password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <IoKeyOutline className="size-4 text-gray-400" />
          </span>
        </div>
      </div>

      {/* --- Re-Password --- */}
      <div>
        <div className="relative">
          <input
            required
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            type="password"
            className="w-full rounded-full border-gray-200 p-4 pe-12 text-sm border-2"
            placeholder="Confirm password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <IoKeyOutline className="size-4 text-gray-400" />
          </span>
        </div>
      </div>

      <button
        type="submit"
        className={`${
          loading ? "bg-slate-500" : "bg-slate-700"
        } flex justify-center items-center gap-3 w-full rounded-full text-white text-lg py-3`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Register"}
        {loading && <Image alt="loading image" src={loadingImg} className="w-[60px]" />}
      </button>
    </form>
  );
};

export default RegularRegister;
