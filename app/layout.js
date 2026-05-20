import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-plus-jakarta-sans)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
