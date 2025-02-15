import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import TopBanner from "@/components/TopBanner";

// import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "500", "600"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Online Quran Academy",
  description: "Learn Quran Pak online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-full overflow-x-hidden`}
      >
        <ToastContainer />
        <TopBanner />
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <About />
        <Services />
        <Register />
        <Footer />
      </body>
    </html>
  );
}
