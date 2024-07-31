import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/lib/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import CustomWrapper from "@/components/CustomWrapper/CustomWrapper";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Martian Paradise",
  description: "Application form for going into Mars",
};




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  
  return (
    <Providers>
      <html lang="en">
        <body
          className={` ${poppins.className} ${inter.className} min-h-screen flex flex-col justify-center items-center`}
        >
          <CustomWrapper session={session}><div className="container">{children}</div></CustomWrapper>
        </body>
      </html>
    </Providers>
  );
}
