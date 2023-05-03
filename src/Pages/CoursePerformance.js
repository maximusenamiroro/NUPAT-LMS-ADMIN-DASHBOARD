import React, { useState } from "react";
import BarChart from "../Components/BarChart";
import Sortt from "../Components/Assets/Icon/sortt.png";
import { Link } from "react-router-dom";
import { UserData } from "../Components/Data/Data";

const CoursePerformance = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Day),
    datasets: [
      {
        label: "Frontend",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(242, 201, 76, 1)"],
      },
      {
        label: "Back End Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#03CFD6"],
      },
      {
        label: "Full stack",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#131E47"],
      },
      {
        label: "Mobile Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#219653"],
      },
      {
        label: "Blockchain Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#D1D3D8"],
      },
      {
        label: ".NET",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#121212"],
      },
      {
        label: "Java",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#009C9C"],
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <>
      <div className="flex justify-between">
        <div className=" ">
          <h1 className="flex border-2 border-red-500">
            College Name <img src={Sortt} alt="" />
          </h1>
        </div>

        {/* search */}

        <div>
          <div className="filter">
            <form onsubmit="event.preventDefault();" role="search">
              <input id="search" type="search" placeholder="Search..." />
              <button type="submit">Go</button>
            </form>
          </div>
        </div>

        <div>
          <Link to="/NewCourse">
            <button className="py-2 px-4 bg-primary text-white font-semibold rounded-md">
              Add new course
            </button>
          </Link>
        </div>
      </div>
      <div className="  flex justify-center ">
        <div className=" border-2 border-primary mt-10 rounded-md">
          <BarChart chartData={userData} />
        </div>
      </div>
      {/* 
    <Outlet /> */}
    </>
  );
};

export default CoursePerformance;
