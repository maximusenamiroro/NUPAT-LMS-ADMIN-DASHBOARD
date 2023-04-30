import React from 'react'
import { Button, TextField, createTheme, ThemeProvider, } from "@mui/material";
import "../App.css"
import Avatar from "@mui/material/Avatar";
import { Box } from '@mui/system'
import EditIcon from '../Components/Assets/Icon/Editprofile.svg';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FlagIcon from '@mui/icons-material/Flag';


const nupat ={
  700: '#131E47'
}; 

const theme = createTheme({
palette: {
  primary: {
    main: nupat[700]
  }
}
})

const Editprofile = () => {
  return (

    <>
    <ThemeProvider theme={theme}>
    <Box sx={{paddingY:{xs:"15px"}}}>

    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Avatar sx={{
        width: "140px",
        height: "140px",
        border: "2px solid #131E47"
      }}/>
      <img src={EditIcon} alt="edit" style={{position: 'absolute', marginTop: '8rem', marginLeft: "6rem"}}/>
    </Box>

    <Box>

    <TextField
    fullWidth
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Full Name"
          margin='normal'
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        /> 
 
                                  {/* Email */}

    <TextField
    fullWidth
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Email"
          margin='normal'
          required
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
  
                                  {/* Phone number */}

                                  <TextField
    fullWidth
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Phone Number"
          margin='normal'
          required
          type="tel"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
                 ),
                }}
              />      

              {/* Country */}

             
<TextField
    fullWidth
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Country"
          margin='normal'
          required
          type="Text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FlagIcon />
              </InputAdornment>
                 ),
                }}
              />      

<Box sx={{
          display: 'flex',
          justifyContent: 'end',
          }}>
        <Button 
        sx={{
          color:'#fff',
          backgroundColor:"#131E47",
          fontSize:'16px',
          fontWeight:'500',
          mt:'10px',
          marginX:{xs:"10px"}
        }}>
  Save Changes
</Button>
        </Box>
    </Box>

    </Box>
    </ThemeProvider>
    </>
  )
}

export default Editprofile 