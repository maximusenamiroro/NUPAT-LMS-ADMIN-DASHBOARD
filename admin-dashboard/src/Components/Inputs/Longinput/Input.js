import { Grid, IconButton, Typography, TextField, createTheme, ThemeProvider } from "@mui/material";
import React from 'react'

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

const Input = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
         <TextField
   multiline
   rows={12}
  fullWidth
  border="none" 
             
              sx={{
                    border: "2px solid #131E47",
                    borderRadius: "10px"

              }}
            />
            </ThemeProvider>

    </>
  )
}

export default Input