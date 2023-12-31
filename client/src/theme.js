import { createTheme } from '@mui/material/styles'


const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#fbc0ba',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#eae017',
    },
  }

});
export default theme;