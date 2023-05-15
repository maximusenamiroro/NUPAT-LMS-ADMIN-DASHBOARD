import {
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../Assets/img/logo.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FeedbackIcon from '@mui/icons-material/Feedback';
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Dropdown.css";
import "./Dropdown.js"
import { useState } from "react";

let Body = createTheme({
  palette: {
    primary: {
      main: "#131E47",
    },
    secondary: {
      main: "#03CFD6",
    },
  },
  typography: {
    fontFamily: "Gilroy-Regular",
    h1: {
      fontFamily: "Gilroy-Bold",
      fontSize: "52px",
    },
  },
});

const DashboardNavbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <>
      {isMatch ? (
        <Box></Box>
      ) : (
        <ThemeProvider theme={Body}>
          <Box
            sx={{
              width: "21%",
              bgcolor: "#131E47",
              display: "flex",
              flexDirection: "column",
              pt: 5,
              height: "100vh",
              position: "fixed",
            }}
          >
            <Avatar
              src={logo}
              sx={{
                width: "125px",
                height: "85px",
                mb: 2,
                border: "none",
              }}
            />

            <Box sx={{ width: "100%", mt: 2, mb: 3 }}>

              <List>
                <Link to="dashboard">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItemButton>
                </Link>
                <List >
                <Link to="/college">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Colleges</ListItemText>
                  </ListItemButton>
                </Link>
                </List>
                <Link to="/Course">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText>Course</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Task">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText>Task</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Courseperformance">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText>Course Performance</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Certificate">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <FeedbackIcon />
                    </ListItemIcon>
                    <ListItemText>Certificate</ListItemText>
                  </ListItemButton>
                </Link>
               
              </List>
            </Box>
            <Box
            sx={{
                mt: -1
            }}
            >
                <Link to="/">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <LogoutIcon  />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                </Link> 
            </Box>
          </Box>
        </ThemeProvider>
      )}
    </>
  );
};

export default DashboardNavbar;

export const getMatchPath = (pathname = "", link = "") => {
  let links = pathname.split("/");

  return link.length === 2 ? links[1] === link : links[2] === link;
};
