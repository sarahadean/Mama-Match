import React, { useContext} from 'react'
import Paper from '@mui/material/Paper';
import UserContext from './Pages/UserContext';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'

function Message({message}) {
  const { user, setUser } = useContext(UserContext);

    //recipient={convo.receiving_user_name} messages={convo.messages}
  return (
    <>
    <ListItem>
      
      {message.author === user.name ? 
      (<Grid container>
      <Grid item lg={6}></Grid>
      <Grid item lg={6} component={Paper} backgroundColor="#fbc0ba" >
        <ListItemText align="right" primary={message.content}></ListItemText>
      </Grid>
      <Grid item lg={6}></Grid>
      <Grid item lg={6}>
        <ListItemText align="right" secondary={message.author}></ListItemText>
      </Grid>
      </Grid>
      ) : (
        <Grid container>
        <Grid item lg={6} component={Paper} backgroundColor="#ECECEC">
          <ListItemText align="left" primary={message.content}></ListItemText>
        </Grid>
        <Grid item lg={6}></Grid>
        <ListItemText align="left" secondary={message.author}></ListItemText>
        <Grid item lg={6}></Grid>
        <Grid item lg={6}>
          
        </Grid>
      </Grid>
      )}
      
    </ListItem>

      
          {/* <h5>{message.author}:</h5>
          <p>{message.content}</p> */}
    </>
    
  )
}

export default Message