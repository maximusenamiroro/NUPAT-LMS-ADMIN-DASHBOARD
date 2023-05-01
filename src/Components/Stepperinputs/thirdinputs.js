import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
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

    <Select
      placeholder="Select a pet…"
      indicator={<KeyboardArrowDown />}
      sx={{
        marginLeft: "10px",
        width: "98.3%",
        height: "60px",
        marginBottom: "27px",
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>


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

    </Box>


  );
}