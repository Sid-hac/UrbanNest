import { default as Searchbar } from "./Searchbar";

const Hero = () => {
  return (
    <section className=" relative flex flex-col lg:ml-16 lg:mr-16 pl-5 h-fit">
      <div className="flex">
        <div className="w-[60%] flex flex-col mt-20 space-y-10  max-sm:flex-1 max-md:flex-1  max-sm:mt-10">
          <h1 className="text-4xl font-bold font-sans ">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Discover your dream home with our intuitive real estate app,
            offering seamless property searches, personalized recommendations,
            and detailed listings. Experience hassle-free buying, selling, and
            renting with advanced filters and real-time updates.
          </p>

          <div className="w-full   ">
            <Searchbar />
          </div>
          <div className="flex justify-around max-sm:justify-between items-center p-2 ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold  ">16+</h1>
              <p className="text-muted-foreground text-sm ">
                Years Of Experience
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold  ">200+</h1>
              <p className="text-muted-foreground text-sm ">Awards Gain</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold  ">1500+</h1>
              <p className="text-muted-foreground text-sm ">Property Ready</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex bg-[#fcf5f3] w-[40%] ">
          <img src="./bg.png" alt="bg" className="object-contain" />
        </div>
      </div>

      {/* <div className="absolute z-[4] w-[40%] h-[40%] right-0 bottom-0 rounded-full blue__gradient" /> */}
    </section>
  );
};

export default Hero;
