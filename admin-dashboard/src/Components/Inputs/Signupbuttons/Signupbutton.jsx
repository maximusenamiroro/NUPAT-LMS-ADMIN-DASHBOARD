import React from "react";
import { Link } from "react-router-dom";

const Signupbuttons = () => {
  return (
    <>
      <div class="block space-y-4 mt-5 xs:hidden">
        <button
          type="submit"
          class="
      w-full
       p-6
      py-4
      text-white
      font-xl
      text-md
      leading-tight
      uppercase
      rounded-lg
      shadow-md
      bg-primary
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign up
        </button>

        <button
          type="submit"
          class="
      w-full
       p-6
      py-8
       bg-none
      text-black
      font-xl
      text-md
      leading-tight
      rounded-lg
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          style={{ background: "none", border: "1px solid #131E47" }}
        >
          Sign up with google
        </button>
      </div>

      <div class="block space-y-4 mt-5 hidden">
      <a href="/dashboard">
        <button
          type="submit"
          class="
      w-full
       p-6
      py-2.5
      text-white
      font-xl
      text-md
      leading-tight
      uppercase
      rounded-lg
      shadow-md
      bg-primary
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign IN
        </button>
        </a>
        <button
          type="submit"
          class="
      w-full
       p-6
      py-2.5
       bg-none
      text-black
      font-xl
      text-md
      leading-tight
      rounded-lg
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          style={{ background: "none", border: "1px solid #131E47" }}
        >
          Sign up with google
        </button>
       
      </div>
    </>
  );
};

export default Signupbuttons;
