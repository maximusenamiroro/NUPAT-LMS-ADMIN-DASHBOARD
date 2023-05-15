import React from "react";
import logo from "../../Assets/img/logo.svg";
import banner from "../../Assets/img/Bannerimg.png";

const Signupbanner = () => {
  return (
    <>
    <div className=" sm: mt-2  xs:mt-[-1rem]">
        <div className="bg-primary w-[135%] h-[97vh] rounded-xl xs:hidden md:hidden ">
          <div>
            <img src={logo} alt="" />
          </div>

          {/* text  */}
          <div className=" xs:flex">
            <div className="ml-14 mt-4 text-white">
              <div className="text-2xl font-medium w-64 xs:hidden">
                <p>Learn a Tech Skill With Nupat Technologies</p>
              </div>
              <div className=" mt-4 xs:hidden">
                <p>Start Your Tech journey with us </p>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-full h-64 mt-20 ml-14 xs:hidden"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
       </div>
                         

                               {/* mobile */}


        <div className="hidden md:hidden xs:block rounded-t-none bg-primary h-full rounded-xl w-[100%] pb-[14rem]">
          <div>
            <img className="h-20" src={logo} alt="" />
          </div>

          {/* text  */}
          <div className="hidden md:hidden xs:flex pb-2 justify-between items-center mt-[-14px] px-3">
            <div className="hidden xs:block">
              <div className=" hidden xs:block">
                <p className="text-white text-lg font-bold">
                  Learn a Tech Skill With <br /> Nupat Technologies
                </p>
              </div>
              <div className=" w-60 hidden xs:block">
                <p className="text-white text-lg font-light">
                  Start Your Tech journey with us{" "}
                </p>
              </div>
            </div>

            <div className="">
              <img className="rounded-full xs:block pr-1 h-[8em]" src={banner} alt="" />
            </div>
          </div>
        </div>
  

      {/* Tablet */}

      <div className="hidden xs:hidden md:block rounded-t-none bg-primary h-full rounded-xl w-[100%] pb-[22rem]">
        <div className=" xs:hidden md:block rounded-t-none bg-primary h-full rounded-xl lg:hidden ">
          <div>
            <img style={{
              height: "9em"
            }} src={logo} alt="" />
          </div>

          {/* text  */}
          <div className=" xs:hidden md:flex  pb-2 justify-between items-center mt-[-3rem] px-4">
            <div className="hidden xs:hidden md:block pt-10 ">
              <div className=" hidden xs:hidden md:block">
                <p className="text-white text-[2.5rem] font-bold">
                  Learn a Tech Skill With <br /> Nupat Technologies
                </p>
              </div>
              <div className=" w-60 hidden xs:hidden md:block">
                <p className="text-white text-3xl font-light w-[20em]">
                  Start Your Tech journey with us
                </p>
              </div>
            </div>

            <div className="">
              <img className="rounded-full xs:hidden md:h-[15rem]" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Signupbanner;
