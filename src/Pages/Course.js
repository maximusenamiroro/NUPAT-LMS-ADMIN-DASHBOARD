import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Sortt from "../Components/Assets/Icon/sortt.png";
import CoursePorps from "../Components/Props/CoursePorps";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "white" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Course = () => {
  return (
    <>
      <Box>
        <div className="flex justify-between">
          <div className=" ">
            <h1 className="flex border-2 border-red-500">
              College Name <img src={Sortt} alt="" />
            </h1>
          </div>

          {/* search */}

          <div className="xs:hidden">
            <div className="filter">
              <form onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Search..." />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>

          <div>
            <Link to="/NewCourse">
              <button className="py-2 px-4 bg-primary text-white font-semibold rounded-md xs:py-1 mb-1">
                Add new course
              </button>
            </Link>
          </div>
        </div>

      <CoursePorps />
      </Box>

      <Outlet />
    </>
  );
};

export default Course;
