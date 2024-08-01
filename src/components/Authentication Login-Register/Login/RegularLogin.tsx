import { goToPage } from "@/Redux/features/pageRouting/pageRoutingSlice";
import { addUserToRedux } from "@/Redux/features/user/userSlice";
import { loginUser } from "@/utils/actions/loginUser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import loadingImg from "@/assets/img/loading.gif" ; 
import Image from "next/image";

const RegularLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await loginUser({
        email,
        password,
      });
      if (!res.success) {
        toast.error(res.message);
        setLoading(false);
      }
      if (res.success) {
        setLoading(false);
        toast.success(res.message);
        console.log(res.user);
        dispatch(addUserToRedux({user : res.user})) ;
        dispatch(goToPage(1));
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err.message);
      console.log(err);
      throw new Error(err.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 pb-4 mt-4 w-full xl:w-2/3  space-y-4 "
    >
      {/* --- Email --- */}
      <div>
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
        className={`${loading ? 'bg-slate-500 text-white':'bg-slate-700 text-white'} flex justify-center items-center gap-3 w-full rounded-full  text-lg py-3`}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
        {loading && <Image alt="loading image" src={loadingImg} className="w-[60px]" />}
      </button>
    </form>
  );
};

export default RegularLogin;
