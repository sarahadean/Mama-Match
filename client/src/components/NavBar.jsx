import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import UserContext from './Pages/UserContext';
import { Button, Box, Grid, Toolbar, Avatar, IconButton, AppBar, Typography} from '@mui/material'
import { MdHome } from "react-icons/md"



function NavBar({navigate}) {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState("undefined")

  const home = <NavLink className="button" to="/home">Home</NavLink>
  const pending = <NavLink className="button" to="/interested">Requests</NavLink> 
  const friends = <NavLink className="button" to="/friends">Friends</NavLink> 
  const profile = <NavLink className="button" to="/profile">Profile</NavLink>
  const welcome = <NavLink className="button" to="/">Welcome</NavLink>

  function handleLogout() {
		fetch("/api/logout", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      }
    }).then((res) => {
			if (res.ok){
				setUser(null);
				navigate("/");
			}
		});
	}

  // const styles = {
  //   customizeToolbar: {
  //     height: 100
  //   }
  // };  

  return (
   <>
      <AppBar >
        <Toolbar>

      {user ? 
          (
          <>
          <IconButton>
          <Avatar sx={{ width: 56, height: 56 }} alt={user.name} src={user.profile_image} component={Link} to="/profile"></Avatar>
        </IconButton>

            <Grid sx={{placeItems: 'center', display: 'flex'}} container spacing={5}>

                <Grid item sx={1}>
                  <IconButton component={Link} to="/home" value="home">
                      <MdHome />
                  </IconButton >
                </Grid>

                <Grid item>
                <Box width={390}></Box>
                </Grid>

                <Grid item sx={1}>
                  {/* <Tabs 
                      indicatorColor="secondary" 
                      textColor="inherit" 
                      value={value} onChange={(e, val)=>setValue(val)}>
                    <Tab value="Requests" label="Requests" component={Link} to="/interested"/>
                    <Tab value="Friends" label="Friends"component={Link} to="/friends"/>
                  </Tabs> */}
                </Grid>
                <Grid item sx={6} align="center">
                  <Box width={800}>
                  <img src="https://raw.githubusercontent.com/sarahadean/Mama-Match/main/.github/images/UpdatedCover.png" width={350}/>
                  </Box>
                  
              </Grid>

                <Grid item sx={1}></Grid>
                <Grid item>
                {/* <Typography>Hi {user.name}!</Typography> */}
                <Box width={300}></Box>
                </Grid>
                

                <Grid item sx={1}>
                  <Box display="flex">
                    <Button sx={{marginLeft: 'auto'}} align="right" variant='contained'onClick={handleLogout}>Logout</Button>
                  </Box>
                </Grid>
                </Grid>
          </>
          ):(
          <>
            <Grid container sx={{placeItems: 'center'}} spacing={10}>
              <Grid item sx={1}>
                <Typography component={Link} to='/' indicatorColor="secondary" textColor="inherit" value={value} onChange={(e, val)=>setValue(val)}>
                  WELCOME
                </Typography>
              </Grid>
             
              <Grid item>
                <Box width={500}></Box>
              </Grid>
              <Grid item></Grid>
              <Grid item sx={1} >
                <img src="https://raw.githubusercontent.com/sarahadean/Mama-Match/main/.github/images/UpdatedCover.png" width={350}/>
              </Grid>
            </Grid>
          </>) }
        </Toolbar>
    </AppBar>
    </>
    
  )
}

export default NavBar