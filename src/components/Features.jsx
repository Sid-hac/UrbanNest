import {
  ArrowRight,
  BrainCog,
  CheckCircle,
  CrosshairIcon,
  GitGraph,
  MessageCircle,
  PhoneCall,
  Shield,
  VideoIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className=" relative mt-10 mb-10 z-10">
      <div className="flex max-sm:flex-col  justify-around items-start gap-x-10 gap-y-6 w-full">
        <div className="w-96  bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 rounded-t-full sm:m-4">
          <img
            src="/value.png"
            alt="show"
            className=" rounded-t-full rounded-b-lg shadow-2xl ring-1 ring-gray-900/10 "
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-3  space-y-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-orange-400 text-2xl font-semibold">
              Our Value
            </h3>
            <h3 className="text-violet-950 text-4xl font-bold">
              Value We Give to You
            </h3>
            <p className="text-sm">
              We always ready to help by providijng the best services for you.
              We beleive
              <br /> a good blace to live can make your life better
            </p>
          </div>
          <div className="flex w-full flex-col justify-start items-center bg-slate-50 border shadow-xl rounded-sm  hover:rotate-2 ">
            <div className="flex w-full justify-between items-center p-3 gap-3  ">
              <span className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-lg ">
                <Shield className="w-4 h-4 text-blue-500 " />
              </span>
              <p className="text-xl font-bold text-violet-950">
                Best interest rates on the market
              </p>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </div>
          <div className="flex w-full flex-col justify-start items-center bg-slate-50 border shadow-xl rounded-sm  hover:rotate-2 ">
            <div className="flex w-full justify-between items-center p-3 gap-3  ">
              <span className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-lg ">
                <CrosshairIcon className="w-4 h-4 text-blue-500 " />
              </span>
              <p className="text-xl font-bold text-violet-950">
                Prevent unstable prices
              </p>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </div>
          <div className="flex w-full flex-col justify-start items-center bg-slate-50 border shadow-xl rounded-sm  hover:rotate-2 ">
            <div className="flex w-full justify-between items-center p-3 gap-3  ">
              <span className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-lg ">
                <GitGraph className="w-4 h-4 text-blue-500 " />
              </span>
              <p className="text-xl font-bold text-violet-950">
                Best price on the market
              </p>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </div>
          <div>
            <Button
              className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-700 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 h-14 "
              varient="ghost"
            >
              <Link
                to="/login"
                className="flex gap-3 justify-center items-center"
              >
                Start Invest
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex max-sm:flex-col  justify-around items-start gap-x-10 gap-y-6 w-full">
        <div className="flex flex-col justify-start items-start gap-3  space-y-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-orange-400 text-2xl font-semibold">
              Our Contact
            </h3>
            <h3 className="text-violet-950 text-4xl font-bold">
            Easy to contact us
            </h3>
            <p className="text-sm">
            We always ready to help by providijng the best services for you. 
              <br /> We beleive a good blace to live can make your life better
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="bg-slate-50 p-4 flex flex-col gap-2 border shadow-2xl hover:scale-105 rounded-lg">
              <div className=" flex justify-center items-center  gap-6">
                <span className="w-12 h-12 flex justify-center items-center  bg-violet-200 rounded-md ">
                  <PhoneCall className="w-5 h-5 text-blue-500 " />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Call</p>
                  <p>0123456789</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-violet-200 text-blue-500  w-full rounded-md h-10 font-bold">
                  Call Now
                </button>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex flex-col gap-2 border shadow-2xl hover:scale-105  rounded-lg">
              <div className=" flex justify-center items-center  gap-6">
                <span className="w-12 h-12 flex justify-center items-center  bg-violet-200 rounded-md ">
                  <MessageCircle className="w-5 h-5 text-blue-500 " />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Chat</p>
                  <p>@sidasdfgh</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-violet-200 text-blue-500 w-full rounded-md h-10 font-bold">
                  Chat Now
                </button>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex flex-col gap-2 border shadow-2xl hover:scale-105  rounded-lg">
              <div className=" flex justify-center items-center  gap-6">
                <span className="w-12 h-12 flex justify-center items-center  bg-violet-200 rounded-md ">
                  <VideoIcon className="w-5 h-5 text-blue-500 " />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Video Call</p>
                  <p>0123456789</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-violet-200  text-blue-500 w-full rounded-md h-10 font-bold">
                  Video Call Now
                </button>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex flex-col gap-2 border shadow-2xl hover:scale-105  rounded-lg">
              <div className=" flex justify-center items-center  gap-6">
                <span className="w-12 h-12 flex justify-center items-center  bg-violet-200 rounded-md ">
                  <BrainCog className="w-5 h-5 text-blue-500 " />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Agent</p>
                  <p>0123456789</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-violet-200  w-full rounded-md h-10 font-bold text-blue-500">
                  Call Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <Button
              className="gradient-button flex gap-2 items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-700 to-cyan-500 px-7 md:py-4 py-3 text-white mx-auto rounded-full font-bold text-lg md:text-xl hover:scale-105 h-14 "
              varient="ghost"
            >
              <Link
                to="/login"
                className="flex gap-3 justify-center items-center"
              >
                Start Invest
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-96  bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 rounded-t-full sm:m-4">
          <img
            src="/value.png"
            alt="show"
            className=" rounded-t-full rounded-b-lg shadow-2xl ring-1 ring-gray-900/10 "
          />
        </div>
      </div>

      <div className="absolute -z-[1] right-0 top-0 w-[50%] h-[50%] rounded-full blue__gradient " />
      <div className="absolute -z-[1] left-0 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
    </section>
  );
};

export default Features;
