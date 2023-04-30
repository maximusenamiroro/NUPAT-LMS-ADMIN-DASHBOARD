import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, IconButton, List, Button, ListItemButton, ListItemText, ListItemIcon, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ClassIcon from "@mui/icons-material/Class";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleIcon from '@mui/icons-material/People';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FeedbackIcon from '@mui/icons-material/Feedback';
import QuizIcon from '@mui/icons-material/Quiz';
import logo from "../Assets/img/logo.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import Dashboard from "@mui/icons-material/Dashboard";


let Body = createTheme({
  palette: {
    primary: {
      main: "#131E47",
    },
    secondary: {
      main: "#edf2ff",
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





const Drawers = () => {
  const router = useLocation()
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <ThemeProvider theme={Body}>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{
            background: "#131E47",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt:"10px",
            backgroundColor: "transparent",
          }}
        >
          {/* <Link to="/">
          <Avatar
          src={logo}
          sx={{ bgcolor: "white", width: "85px", height: "85px", mb: 5 }}
        />
          </Link> */}
          <Box
        sx={{
          width: "290px",
          bgcolor: "#131E47",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       
        <Box sx={{
        pt:6,
        }}>
          <Avatar sx={{width:"9rem", height:"9rem"}} />
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography sx={{ ml: 5, color: "#fff" }} variant="caption">
            MENU
          </Typography>

          <List >
          
   <Link to="/dashboard" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
  borderRadius: "0px 40px 40px 0px",
   bgcolor:'#03CFD6',
   borderLeft:'4px solid #03CFD6'
},
'&:active, 	&.Mui-selected':{
  borderRadius: "0px 40px 40px 0px",
   bgcolor:'#03CFD6',
   borderLeft:'4px solid #03CFD6'
},
   }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <Dashboard/>
     </ListItemIcon>
     <ListItemText>Dashboard</ListItemText>
   </ListItemButton>
   </Link>

   <Link to="/classroom" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <ClassIcon />
     </ListItemIcon>
     <ListItemText>Classroom</ListItemText>
   </ListItemButton>
   </Link>

   <Link to="/task" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <AssignmentTurnedInIcon/>
     </ListItemIcon>
     <ListItemText>Task</ListItemText>
   </ListItemButton>
   </Link>


   <Link to="/community" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <PeopleIcon/>
     </ListItemIcon>
     <ListItemText>Community</ListItemText>
   </ListItemButton>
   </Link>  


   <Link to="/help" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <HelpCenterIcon/>
     </ListItemIcon>
     <ListItemText>Help</ListItemText>
   </ListItemButton>
   </Link>

   <Link to="/feedback" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <FeedbackIcon/>
     </ListItemIcon>
     <ListItemText>Feedback</ListItemText>
   </ListItemButton>
   </Link>

   <Link to="/faq" >
   <ListItemButton   sx={{ color: "white", pl: 5,
'&:hover, 	&.Mui-selected':{
   bgcolor:'rgba(217, 217, 217, 0.1)',
   borderLeft:'4px solid #fff'
} }}>

     <ListItemIcon sx={{color:'#fff'}}>
     <QuizIcon/>
     </ListItemIcon>
     <ListItemText>FAQ</ListItemText>
   </ListItemButton>
   </Link>

          </List>
        </Box>
        {/* <Button variant="contained">Parent Dashboard</Button> */}
        <Box sx={{mt: 4}}>
                  <Button
                    variant=""
                    sx={{ color: "#fff", fontFamily: "Gilroy-regular", marginRight:"50px" }}
                  >
                    <ArrowBackIcon sx={{ mr: 1 }} /> Back to My Course
                  </Button>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant=""
                    sx={{ color: "#fff", fontFamily: "Gilroy-regular", marginRight:"120px" }}
                  >
                    <LogoutIcon sx={{ mr: 2 }} /> Logout
                  </Button>
                </Box>
      </Box>
    
             
        
        </List>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 5,
          pb: 3,
          px: 4,
        }}
      >
        <Link to="/Editprofile">
        <Avatar>S</Avatar>
        </Link>
     

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "15%",
          }}
        >
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon />
          </Badge>
          <IconButton
            sx={{ color: "#000" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>

          {/* <MenuIcon style={{ fontSize: "25px", cursor:'pointer' }} /> */}
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
};

export default Drawers;
