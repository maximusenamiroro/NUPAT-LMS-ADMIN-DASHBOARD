import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Messageicon from "../Components/Assets/img/message.svg";
import { Typography } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "white" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Colleges = () => {
  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "40px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={6} xs={12}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  backgroundColor: "#131E47",
                  display: "flex",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img className="h-12 pl-8" src={Messageicon} alt="" />
                <span
                  className=" text-white
               font-medium
               text-2xl
              "
                >
                  College of Engineering
                </span>
              </Box>
              <div className="flex text-center justify-center py-4">
                <p className=" text-start text-lg font-medium w-11/12 self-center flex text-Nupatblack">
                  Add courses related to core programming and coding. Such as
                  Front - End Development, Back - End Development, Blockchain
                  Development, Full Stack, .Net e.t.c.
                </p>
              </div>
              <div className="pt-6 flex px-5 pb-7 justify-between">
                <button className="border-primary border-2 rounded-md text-lg py-2 px-4 text-primary">
                  Add New Course
                </button>
                <button className=" border-transparent border-2 rounded-md text-lg py-2 px-4 text-primary">
                  Veiw Courses
                </button>
              </div>
            </Item>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Item className="">
              <Box
                sx={{
                  backgroundColor: "#03CFD6",
                  display: "flex",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img className="h-12 pl-8" src={Messageicon} alt="" />
                <span
                  className=" text-white
               font-medium
               text-2xl
              "
                >
                  College of Design
                </span>
              </Box>
              <div className="border-2 border-t-0 border-primary">
                <div className="flex text-center justify-center py-4">
                  <p className=" text-start text-lg font-medium w-11/12 self-center flex text-Nupatblack">
                    Add courses related to core programming and coding. Such as
                    Front - End Development, Back - End Development, Blockchain
                    Development, Full Stack, .Net e.t.c.
                  </p>
                </div>
                <div className="pt-6 flex px-5 pb-7 justify-between">
                  <button className="border-primary border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Add New Course
                  </button>
                  <button className=" border-transparent border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Veiw Courses
                  </button>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Item className="">
              <Box
                sx={{
                  backgroundColor: "#219653",
                  display: "flex",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img className="h-12 pl-8" src={Messageicon} alt="" />
                <span
                  className=" text-white
               font-medium
               text-2xl
              "
                >
                  College of Data
                </span>
              </Box>
              <div className="border-2 border-t-0 border-primary">
                <div className="flex text-center justify-center py-4">
                  <p className=" text-start text-lg font-medium w-11/12 self-center flex text-Nupatblack">
                    Add courses related to core programming and coding. Such as
                    Front - End Development, Back - End Development, Blockchain
                    Development, Full Stack, .Net e.t.c.
                  </p>
                </div>
                <div className="pt-6 flex px-5 pb-7 justify-between">
                  <button className="border-primary border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Add New Course
                  </button>
                  <button className=" border-transparent border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Veiw Courses
                  </button>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Item className="">
              <Box
                sx={{
                  backgroundColor: "#F2C94C",
                  display: "flex",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img className="h-12 pl-8" src={Messageicon} alt="" />
                <span
                  className=" text-white
               font-medium
               text-2xl
              "
                >
                  College of Managements
                </span>
              </Box>
              <div className="border-2 border-t-0 border-primary">
                <div className="flex text-center justify-center py-4">
                  <p className=" text-start text-lg font-medium w-11/12 self-center flex text-Nupatblack">
                    Add courses related to core programming and coding. Such as
                    Front - End Development, Back - End Development, Blockchain
                    Development, Full Stack, .Net e.t.c.
                  </p>
                </div>
                <div className="pt-6 flex px-5 pb-7 justify-between">
                  <button className="border-primary border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Add New Course
                  </button>
                  <button className=" border-transparent border-2 rounded-md text-lg py-2 px-4 text-primary">
                    Veiw Courses
                  </button>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Outlet />
    </>
  );
};

export default Colleges;
