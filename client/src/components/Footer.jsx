import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import UserContext from './Pages/UserContext';
import { MdFavorite, MdRestore } from "react-icons/md";
import Box from '@mui/material/Box';

function Footer() {
  const [value, setValue] = React.useState(0);
  const {user, setUser } = useContext(UserContext)

  return (
    <Box >
      
      {user ? 
      (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}
        justifyContent="center"
        alignItems="center" 
        >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction label="Requests" component={Link} to='/interested' icon={<MdRestore />} />
        <BottomNavigationAction label="Friends" component={Link} to='/friends' icon={<MdFavorite />} />
      </BottomNavigation>
      </Paper>
      ) : (""
      //   <Paper
      //   sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 200 }}
      //   elevation={2}
      //   justifyContent="center"
      //   alignItems="center" 
      //   >
      // <List>
      //   <ListItem>Contact Us</ListItem>
      // </List>
      //   </Paper>
      )}
      {/* <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction label="Requests" component={Link} to='/interested' icon={<RestoreIcon />} />
        <BottomNavigationAction label="Friends" component={Link} to='/friends' icon={<FavoriteIcon />} />
      </BottomNavigation> */}
      
    </Box>
  );
}

export default Footer