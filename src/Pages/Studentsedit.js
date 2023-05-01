import React from "react";
import "./Style.css";
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import {Grid} from "@mui/material"
import Box from "@mui/material/Box";
import Close from "../Components/Assets/Icon/close.png"
import Profilepic from "../Components/Assets/img/Profilepic.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#131E47' ? '#131E47' : '#131E47',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Studentsedit = () => {
  return (


    <>
      <div className="grid" >
<div className="form">
            <div className="filter">
            <form onsubmit="event.preventDefault();" role="search">
  <input id="search" type="search" placeholder="Search..." />
  <button type="submit">Go</button>    
</form>
            </div>
            {/* TABLE */}

            <table className=" w-12/12 border-2 border-red-500">
              <tr className="bg-primary text-white text-xl h-14">
                <th className="font-light">S/N</th>
                <th className="font-light">Student’s Name</th>
                <th className="font-light">Email</th>
                <th className="font-light">Course </th>
                <th className="font-light">Gender</th>
              </tr>

              {/* LIST OF ALL THE DATA */}

              <tr className=" bg-transparent h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className=" bg-slate-300 h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className=" h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300  h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className=" h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300  h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300 h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300 h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300  h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300 h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>

              <tr className="bg-slate-300 h-14">
                <td>01</td>
                <td>Student’s Name</td>
                <td>anuoluwapoadedeji33..</td>
                <td>UIUX Design</td>
                <td>F</td>
              </tr>
            </table>
          

            </div>
                                     {/* SIDE NAV */}
<div className="w-[20%] h-[100vh] mt-[-14px] mr-[-29.5px] fixed flex justify-end ml-[50em]">
 
        <Box>
        <Grid>
  
  <Grid item xs={12} md={12}>
    <Item>


        <Box sx={{
          marginLeft: "16em",
          marginBottom: "2em"
        }}>
            <img  src={Close} alt="Close" />
        </Box>

                  {/* PROFILEPIC */}

     <Box sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     }}>
      <Box sx={{
      }}>
        <img src={Profilepic} alt=""/>
      </Box>
      </Box>
    
      <Box sx={{
        marginTop: "10px",
        
      }}>
        <p className=" font-semibold text-2xl pt-4 text-white pr-14">Anuoluwapo Adedeji</p>
        <p className=" font-semibold text-base pt-4 text-white justify-start pr-8">anuoluwapoadedeji33@gmail.com</p>
        <p className=" font-semibold text-base pt-4 text-white pr-[8em]">Course: UIUX Design</p>
        <p className=" font-semibold text-base pt-4 text-white pr-[10.8em]">Gender: Female</p>
        <p className=" font-semibold text-base pt-4 text-white pr-[9.9em]">ID: Nupat ch1000</p>
      </Box>
     
    <Box sx={{
      marginTop: "32px",
      marginBottom: "5em",
      marginRight: "8.5em"
    }}>
      <button className=" px-8 py-3 rounded-lg bg-white text-Nupatblack font-medium ">Send a message</button>
    </Box>

    </Item>
  </Grid>

</Grid>
        </Box>

        </div>

      </div>
    </>
  );
};

export default Studentsedit;
