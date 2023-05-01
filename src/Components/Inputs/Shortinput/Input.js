import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const grey = {
  50: '#131E47',
  100: '#131E47',
  200: '#131E47',
  300: '#131E47',
  400: '#131E47',
  500: '#131E47',
  600: '#131E47',
  700: '#131E47',
  800: '#131E47',
  900: '#131E47',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 3px solid ${theme.palette.mode === 'dark' ? grey[300] : grey[100]};
//   box-shadow: 0px 0px 0px 1px ${theme.palette.mode === 'dark' ? grey[300] : grey[100]};

  &:hover {
    border-color: ${grey[400]};
  }

  &:focus {
    border-color: ${grey[400]};
    box-shadow: 0 0 0 1px ${theme.palette.mode === 'dark' ? grey[300] : grey[100]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function UnstyledInputBasic() {
  return <CustomInput aria-label="Subject matter" placeholder="" />;
}
