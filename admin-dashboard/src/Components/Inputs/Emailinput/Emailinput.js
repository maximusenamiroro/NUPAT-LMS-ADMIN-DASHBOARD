import React from "react";
import "../../../Signup.css";

const Emailinput = () => {
  return (
    <>
      <div class="form-group mb-2">
        <input
          type="email"
          required
          class="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          placeholder="Email"
          style={{ border: "1px solid black" }}
        />
      </div>
    </>
  );
};

export default Emailinput;
