import "../styles/globals.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
