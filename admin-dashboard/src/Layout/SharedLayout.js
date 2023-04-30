import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import DashboardNavbar from "../Components/Dashboard/DashboardNavbar";

const SharedLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DashboardNavbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { lg: "90%", md: "90%", sm: "100%", xs: "100%" },
            
          }}
        >
          <DashboardHeader />
          <Box sx={{ mx: "auto", ml:{lg:"18rem", sm:"0%",}, pl:{sm:"20px"}, width: {lg:"85%",sm: "0%",}, marginTop: {lg:14, md:14, sm:12, xs:10}, }}   >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SharedLayout;