import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';   


export default function HelperTextAligned() {
  return (
    <Box>
    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Number of Modules </InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="How many Modules is this course divided into" id="fullWidth" />
    </Box>

    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Number of Projects/ Tasks</InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="Enter total Number of Tasks " id="fullWidth" />
    </Box>

    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Course Syllable </InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="Add Course Syllabus" id="fullWidth" />
    </Box>

    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Amount </InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="How much is the  Fee for this course?" id="fullWidth" />
    </Box>

    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Amount </InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="How much is the  Fee for this course?" id="fullWidth" />
    </Box>

    <InputLabel sx={{
        marginLeft: "11px"
    }} htmlFor="formatted-text-mask-input">Amount </InputLabel>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        '& > :not(style)': { m: 1},
      }}
    >
         <TextField fullWidth label="How much is the  Fee for this course?" id="fullWidth" />
    </Box>

    </Box>

  );
}