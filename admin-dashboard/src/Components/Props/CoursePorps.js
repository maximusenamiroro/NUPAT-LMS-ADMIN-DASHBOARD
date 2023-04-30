import React from 'react'
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Messageicon from "../../Components/Assets/img/message.svg";
import Coursepic from "../../Components/Assets/img/coursepic.png";
import Moreicon from "../../Components/Assets/Icon/moreicon.png";
import Hierarchy from "../../Components/Assets/Icon/hierarchy.png";
import Module from "../../Components/Assets/Icon/Module.png";
import Add from "../../Components/Assets/Icon/Add.png";
import Clock from "../../Components/Assets/Icon/clock.png";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "white" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

function CoursePorps(props){
  return (
    <div> {props.CoursePorps}
        <Box sx={{ width: "100%", paddingBottom: "40px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>

            

          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>



          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>



          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>



          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>


          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>



          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>



          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>


          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>


          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Item className="border-primary border-2">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  gap: "2em",
                  height: "66px",
                  alignItems: "center",
                }}
              >
                <img src={Coursepic} alt="" />
                <img className="absolute pl-52 pb-12" src={Moreicon} alt="" />
              </Box>
              <div className="flex text-center mt-7">
                <img className=" pr-2 ml-3 w-8 h-5" src={Hierarchy} alt="" />
                <p className=" text-base font-semibold text-primary">
                  Product Management
                </p>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-4 mt-[2px]" src={Module} alt="" />
                  <p className="ml-1">Modules</p>
                </div>
                <div className="flex font-semibold text-sm text-Nupatblack">
                  <img className="h-3 mr-1 mt-1" src={Add} alt="" />
                  <p>2000 Students</p>
                </div>
              </div>
              <div className="flex px-2 mt-2 pb-10">
               <img src={Clock} alt=""/>
               <p className="ml-2">Duration</p>
              </div>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default CoursePorps