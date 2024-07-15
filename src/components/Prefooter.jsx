import {Link} from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";


const PreFooter = () => {
  return (
    <section className="mt-20 py-8 flex flex-col justify-center items-center w-full h-fit bg-slate-100 border-t border-gray-300 bg-[url('/bg3.svg')] z-10 space-y-10">
      <div className="flex flex-col gap-6 justify-center items-center mt-10">
        <h1 className="text-6xl font-bold text-center tracking-tight">
        Connecting You to Your <br /> Ideal Home.{" "}
          <span className="text-6xl font-bold text-blue-700">UrbanNest</span>{" "}
        </h1>
        <p className="text-lg font-semibold">
        Personalized Service for Your Perfect Match.
        </p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img
          src="/image-94.png"
          alt="users"
          className="w-32"
        />
        <div>
          <img
            src="/star.svg"
            alt="stars"
          />
          <p className="text-sm ">Loved by 40,000 users</p>
        </div>
      </div>
      <div className="w-fit">
        <Link to="/login">
          <Button className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-700 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 h-14 ">
            Get Started
            <ArrowRight className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PreFooter;
