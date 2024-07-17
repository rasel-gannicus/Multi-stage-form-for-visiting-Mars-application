import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Hanken_Grotesk, Poppins, Ubuntu } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Let's Go to Mars",
  description: "Application form for going into Mars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={` ${poppins.className} ${inter.className} min-h-screen flex flex-col justify-center items-center`}
        >
          <div className="container">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
