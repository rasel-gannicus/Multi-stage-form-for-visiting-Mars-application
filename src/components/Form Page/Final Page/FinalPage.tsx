import { useAppSelector } from "@/Redux/store/reduxHooks";
import { ubuntu } from "../StageOne/StageOne";
import marsMan from "@/assets/img/mars_man-removebg-preview.png";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const FinalPage = () => {
  const fullInfo = useAppSelector((state) => state);
  const firstPageInformation: any = fullInfo.formData.firstPageInformation;
  const secondPageInformation: any = fullInfo.formData2.secondPageInformation;
  const thirdPageInformation: any = fullInfo.formData3.thirdPageInformation;

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  }, []);
  return (
    <div className="xl:h-full px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="mt-14 text-center text-4xl lg:text-5xl text-green-500 uppercase font-semibold">
          Congrats !
        </h2>
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={500}
            gravity={0.3}
            run={showConfetti}
          />
        )}
        <button onClick={()=>signIn('github', {
            callbackUrl : "http://localhost:3000/"
        })}>Sign in with github</button>
        <h2 className="text-center text-xl">
          You have successfully submitted for the Mars Visiting form.
        </h2>
        <h2 className="text-center text-xl ">
          You will be onboard withing very short time !
        </h2>
        <h2 className="text-center text-xl ">Here is your submitted info : </h2>
      </div>

      <div className="my-10 text-lg  py-5">
        <table className={`table-auto w-full text-2xl ${ubuntu.className} `}>
          <tbody className=" overflow-x-scroll">
            <tr className="w-full">
              <td className="py-2">Name : </td>
              <td className="text-blue-500 py-2">
                {firstPageInformation.firstName +
                  " " +
                  firstPageInformation.lastName}
              </td>
            </tr>
            <tr className="w-full">
              <td className="py-2">Email : </td>
              <td className="text-blue-500 py-2">
                {firstPageInformation.email}
              </td>
            </tr>
            <tr className="w-full">
              <td className="py-2">Date of birth : </td>
              <td className="text-blue-500 py-2">
                {firstPageInformation.dateOfBirth.startDate}
              </td>
            </tr>
            <tr className="w-full">
              <td className="py-2">Country : </td>
              <td className="text-blue-500 py-2">
                {firstPageInformation.country.label}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Phone : </td>
              <td className="text-blue-500 py-2">
                {firstPageInformation.phone}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Departure Date : </td>
              <td className="text-blue-500 py-2">
                {secondPageInformation.departureDate.startDate}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Return Date : </td>
              <td className="text-blue-500 py-2">
                {secondPageInformation.returnDate.startDate}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Accomodation Preferences : </td>
              <td className="text-blue-500 py-2">
                {secondPageInformation.accomodation}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Special Preferences : </td>
              <td className="text-blue-500 py-2">
                {!secondPageInformation.specialPreferences.statues
                  ? "No"
                  : secondPageInformation.specialPreferences.description}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Health Declaration : </td>
              <td className="text-blue-500 py-2">
                {thirdPageInformation.healthDeclaration}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Emergency Contact Name : </td>
              <td className="text-blue-500 py-2">
                {thirdPageInformation.emergencyContact.name}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Emergency Contact Number : </td>
              <td className="text-blue-500 py-2">
                {thirdPageInformation.emergencyContact.phone}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Emergency Contact Email : </td>
              <td className="text-blue-500 py-2">
                {thirdPageInformation.emergencyContact.email}
              </td>
            </tr>
            <tr className="w-full my-2">
              <td className="py-2">Any Medical Conditions : </td>
              <td className="text-blue-500 py-2">
                {thirdPageInformation.medicalConditions}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinalPage;
