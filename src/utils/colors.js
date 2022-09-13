import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: '#b71c1c',
    },
  },
});


export default theme;