import React, { useState } from "react";

import BarCharts from "../Components/BarCharts";
import BarChartss from "../Components/BarChartss";
import Sortt from "../Components/Assets/Icon/sortt.png";
import { Link, } from "react-router-dom";
import { UserData } from "../Components/Data/Data";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pana from "../Components/Assets/img/pana.png"
import Panamobile from "../Components/Assets/img/panamobile.png"
import Dashbox from "../Components/Assets/Icon/Dashbox.png"
import Notifiblue from "../Components/Assets/Icon/Notifiblue.png"
import Notifigreen from  "../Components/Assets/Icon/Notifigreen.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#fff' ? '#fff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Day),
    datasets: [
      {
        label: "Frontend",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(242, 201, 76, 1)",
          
        ],
    
        
      },
      {
        label: "Back End Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          '#03CFD6',
          
          
        ],
       
        
      },
      {
        label: "Full stack",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#131E47",
        ],
       
        
      },
      {
        label: "Mobile Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          
          '#219653',         
        ],
        
        
      },
      {
        label: "Blockchain Dev",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#D1D3D8",
        ],
     
        
      },
      {
        label: ".NET",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#121212"
        ],
        
      },
      {
        label: "Java",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#009C9C",
          
        ],
        
      },  
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
<>
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  <Grid item xs={12} md={12} lg={8}>
    <Item>
      <Box sx={{
        display: 'flex',
         
      }}>
       <Box sx={{
        marginTop: "40px",
       }}>
        <h1 className=" text-[28px] text-primary xs:w-10em">Welcome Admin</h1>
        <p className=" text-[14px] text-primary w-[20em] xs:w-[17em] ">Here you would Organize students and courses information</p>
       </Box>
       <Box>
       <img className="ml-[7em] xs:hidden" src={Pana } alt=""/>
       <img className="hidden xs:block w-[30em] mt-8" src={Panamobile} alt=""/>
       </Box>
      </Box></Item>
  </Grid>
  <Grid item xs={12} md={4} lg={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={6} md={4} lg={4}>
    <Item>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: "1em",
        height: "80px"
      }}>
        <Box sx={{
          marginLeft: "0.6em",
        }}>
          <img src={Dashbox} alt=""/>
        </Box>
        <Box>
          <p className="text-[2em] mr-6">500,000,000</p>
          <p>Students</p>
        </Box>
      </Box>
    </Item>
  </Grid>
  <Grid item xs={6} md={4} lg={4}>
    <Item><Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: "1em",
        height: "80px"
      }}>
        <Box sx={{
          marginLeft: "0.6em",
        }}>
          <img src={Dashbox} alt=""/>
        </Box>
        <Box sx={{
          marginRight: "6em",
          marginTop: "0.8em",
        }}>
          <p className="text-[2em]">15</p>
          <p>Courses</p>
        </Box>
      </Box></Item>
  </Grid>
   <Grid  item xs={12} md={4} lg={4} sx={{
    height: "10px",
    
   }}> 
   <Box className=" xs:mt-[32.5rem]" sx={{
    border: "2px solid  #131E47",
    paddingX: "10px",
    paddingY: "10px",
    borderRadius: "10px"
   }}>
    <Box>
      <Box>
        <p className="text-xl">Notifications</p>
      </Box>
      <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifiblue} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em"
        }}>
          <h1 className="text-xl mr-28">Admission</h1>
          <h1>A new student for Design Course</h1>
        </Box>
      </Box>
    </Box>

    <Box>
      <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifigreen} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}>
          <h1 className="text-xl">Support</h1>
          <h1>Support needed</h1>
        </Box>
      </Box>
    </Box>

    <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifiblue} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em"
        }}>
          <h1 className="text-xl mr-28">Admission</h1>
          <h1>A new student for Design Course</h1>
        </Box>
      </Box>
   

    <Box>
      <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifigreen} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}>
          <h1 className="text-xl">Support</h1>
          <h1>Support needed</h1>
        </Box>
      </Box>
    </Box>

    <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifiblue} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em"
        }}>
          <h1 className="text-xl mr-28">Admission</h1>
          <h1>A new student for Design Course</h1>
        </Box>
      </Box>
   

    <Box>
      <Box sx={{
        display: 'flex',
        paddingTop: '20px'
      }}>
        <Box>
          <img src={Notifigreen} alt=""/>
        </Box>
        <Box sx={{
          marginLeft: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}>
          <h1 className="text-xl">Support</h1>
          <h1>Support needed</h1>
        </Box>
      </Box>
    </Box>
    </Box> 
  </Grid>
   <Grid item xs={6} md={4} lg={4} sx={{
  }}>
    <Item><Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: "1em"
      }}>
        <Box sx={{
          marginLeft: "0.6em",
        }}>
          <img src={Dashbox} alt=""/>
        </Box>
        <Box sx={{
          marginRight: "6em",
          marginTop: "0.8em",
        }}>
          <p className="text-[2em]">15</p>
          <p>Courses</p>
        </Box>
      </Box></Item>
  </Grid>
   <Grid item xs={6} md={4} lg={4}>
    <Item><Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: "1em"
      }}>
        <Box sx={{
          marginLeft: "0.6em",
        }}>
          <img src={Dashbox} alt=""/>
        </Box>
        <Box>
          <p className="text-[2em] mr-6">350,200,000</p>
          <p className="xs:pb-3">Certificates</p>
        </Box>
      </Box></Item>
  </Grid> <Grid item xs={12} md={8} lg={8}>
    
        <div className=" border-2 border-primary  rounded-md mt-4 xs:hidden">
          <div className=" flex justify-between">
            <h1 className="text-2xl text-primary">Course Performance</h1>
            <div className="">
              <select className="border-1 border-primary text-lg">
                <option value="" selected disabled hidden>Choose here</option>
                <option value="1"></option>
              </select>
              <select>
                <option value="1">Last Week</option>
                <option value="2">Last Month</option>
                <option value="3">Last Year</option>
              </select>
            </div>
          </div>
          <BarCharts chartData={userData} />
        </div>

      
       
  </Grid>
</Grid>
</Box>
</>
  );
}

export default Dashboard; 