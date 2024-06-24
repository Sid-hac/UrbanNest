const About = () => {
  return (
    <div className=" relative flex max-md:flex-col lg:ml-16 lg:mr-16  md:pl-5  md:h-[100vh]  ">
      <div className="w-full md:w-[60%] h-[100vh] flex flex-col  overflow-y-scroll space-y-6 bg-[url('/bg3.jpg')] bg-cover bg-center opacity-15  -z-10">
        {/* <img
          src="/bg.jpg"
          alt="bg img"
          className="w-full  h-full object-cover  opacity-20"
        /> */}
      </div>
      <div className=" absolute top-0 w-full md:w-[60%] h-full overflow-y-scroll  z-10 flex flex-col justify-center items-start space-y-20">
        <div className=" flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center p-5 space-y-4">
            <h3 className="text-4xl font-semibold font-serif ml-5">
              Our Story
            </h3>
            <p>
              Welcome to UrbanNest. Founded in 2024 by sid, our journey began
              with a vision to revolutionize the real estate market by providing
              exceptional service and personalized experiences. From our humble
              beginnings in karad, we have grown into a trusted name, helping
              countless clients find their perfect homes and investment
              properties. Our dedicated team, driven by integrity, innovation,
              and a customer-first approach, works tirelessly to turn your real
              estate dreams into reality. Thank you for being part of our
              journey as we continue to shape the future of real estate. Welcome
              to our story
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-[170vh] md:h-full  md:w-[40%]">
        <div className="space-y-10 flex flex-col justify-center items-center ">
          <h3 className="text-2xl font-serif font-bold text-center ">Leads</h3>
          <div className="flex flex-col justify-center items-center space-y-7">
            <div className="flex flex-col justify-center items-center w-32 h-32  border border-black rounded-md">
              <img
                src="/profile.jpg"
                alt="profile"
                className="flex rounded-full w-14"
              />
              <h4 className="text-sm text-black ">Sid</h4>
              <p className="text-muted-foreground text-xs">Founder</p>
            </div>
            <div className="flex  justify-center items-center gap-6">
              <div className="flex flex-col justify-center items-center w-32 h-32  border border-black rounded-md">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="flex rounded-full w-14"
                />
                <h4 className="text-sm text-black ">Prasad</h4>
                <p className="text-muted-foreground text-xs">Co-founder</p>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-32  border border-black rounded-md">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="flex rounded-full w-14"
                />
                <h4 className="text-sm text-black ">Siddhesh</h4>
                <p className="text-muted-foreground text-xs">Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
