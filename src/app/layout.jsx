import Header from "@/components/Header";
import "../styles/globals.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} overflow-x-hidden`}>
        <div className="w-full flex justify-center">
        {/* <Header/> */}
        </div>
        {children}
      </body>
    </html>
  );
}
