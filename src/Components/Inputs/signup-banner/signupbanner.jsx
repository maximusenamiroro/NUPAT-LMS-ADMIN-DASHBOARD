import React from "react";
import logo from "../../Assets/img/logo.svg";
import banner from "../../Assets/img/Bannerimg.png";

const Signupbanner = () => {
  return (
    <>
      <div className=" sm: mt-2  xs:mt-[-1rem]">
        <div className="bg-primary w-[135%] h-[97vh] rounded-xl xs:hidden ">
          <div>
            <img src={logo} alt="" />
          </div>

          {/* text  */}
          <div className=" xs:flex">
            <div className="ml-16 mt-4 text-white">
              <div className="text-2xl font-medium w-64 xs:hidden">
                <p>Learn a Tech Skill With Nupat Technologies</p>
              </div>
              <div className=" mt-4 xs:hidden">
                <p>Start Your Tech journey with us </p>
              </div>
            </div>
            <div className="hidden xs:block w-44">
              <div className="ml-[-3rem] hidden xs:block">
                <p>Learn a Tech Skill With Nupat Technologies</p>
              </div>
              <div className="ml-[-3rem] hidden xs:block">
                <p>Start Your Tech journey with us </p>
              </div>
            </div>

            <div className="">
              <img className="rounded-full h-64 mt-20 ml-8 xs:hidden" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="">
        <div className="bg-primary h-full rounded-xl hidden xs:block rounded-t-none">
          <div>
            <img src={logo} alt="" />
          </div>

          {/* text  */}
          <div className=" xs:flex pb-2 justify-center items-center">
            <div className="hidden xs:block">
              <div className=" hidden xs:block">
                <p className="text-white text-lg font-bold">
                  Learn a Tech Skill With <br /> Nupat Technologies
                </p>
              </div>
              <div className=" w-60 hidden xs:block">
                <p className="text-white text-lg font-light">Start Your Tech journey with us </p>
              </div>
            </div>

            <div className="">
              <img className="rounded-full xs:block pr-1" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupbanner;
