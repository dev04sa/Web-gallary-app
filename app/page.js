import Hero from "@/components/Hero";
import { HomePage } from "@/components/HomePage";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div
        className=" top-0 left-0 w-full h-full md:h-screen bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(/images/thumbnail.png)` }}
      >
        <Navbar />
        <Info />
        <Hero />
      </div>
    </div>
  );
}
