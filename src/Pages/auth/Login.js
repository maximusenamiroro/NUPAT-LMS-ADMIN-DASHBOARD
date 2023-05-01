import React from "react";
import Signupbanner from "../../Components/Inputs/signup-banner/signupbanner";
import Emailinput from "../../Components/Inputs/Emailinput/Emailinput";
import { Link } from "react-router-dom";
import Passwordinput from "../../Components/Inputs/Password/Passwordinput";
import Signupbutton from "../../Components/Inputs/Signupbuttons/Signupbutton";


const Login = () => {
  return (
    <div className="w-full">
      <div className="h-full w-full flex xs:block">
        
        <div className=" h-10 grid grid-cols-1">
          <Signupbanner />
        </div>
        <div className=" top-0 right-0 w-full pl-14 xs:hidden">
          <div className="">
            <div className="pt-10  justify-center Start pl-24 xs:pl-10">
              <h1 className="text-3xl font-bold text-primary">Sign in</h1>
            </div>
            <div className="flex justify-center text-center">
              <div class="flex p-2 rounded-lg justify-center max-w m-0 w-10/12 flex-col">
                <form>
             

                  <Emailinput />

                 

                  <Passwordinput />

               

                  <div className="">
                    <p className="xs: text-start">
                      By signing up, you have agreed to
                      <Link to="/" style={{ color: "blue" }}>
                        {" "}
                        Terms of Services{" "}
                      </Link>{" "}
                      and{" "}
                      <Link to="/" style={{ color: "blue" }}>
                        {" "}
                        Privacy Polices
                      </Link>
                      . We will also subscribe you to our news letter.You can
                      unsubscribe at anyime
                    </p>
                  </div>

                  <Signupbutton />

                  <p class="text-gray-800 mt-6 text-center">
                    Already have an account?{" "}
                    <a
                      href=""
                      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      <Link to="/signin"> Sign in</Link>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

                                   {/* Mobile */}

            <div className=" hidden xs:block w-full mt-36 " >
          <div className="">
            <div className="pt-10  justify-center Start pl-24 xs:pl-10">
              <h1 className=" tex-xl font-normal">Sign up</h1>
            </div>
            <div className="flex justify-center text-center">
              <div class="flex p-2 rounded-lg justify-center max-w m-0 w-10/12 flex-col">
                <form>
                

                  <Emailinput />

                

                  <Passwordinput />

                 

                  <div className="">
                    <p className="xs: text-start">
                      By signing up, you have agreed to
                      <Link to="/" style={{ color: "blue" }}>
                        {" "}
                        Terms of Services{" "}
                      </Link>{" "}
                      and{" "}
                      <Link to="/" style={{ color: "blue" }}>
                        {" "}
                        Privacy Polices
                      </Link>
                      . We will also subscribe you to our news letter.You can
                      unsubscribe at anyime
                    </p>
                  </div>

                  <Signupbutton />

                  <p class="text-gray-800 mt-6 text-center">
                    Already have an account?{" "}
                    <a
                      href=""
                      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      <Link to="/signin"> Sign in</Link>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
