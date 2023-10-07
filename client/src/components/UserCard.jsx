import { useContext, useState } from 'react'
import UserContext from './Pages/UserContext';
import CardMedia from '@mui/material/CardMedia'
import { MdOutlineFavoriteBorder, MdOutlineClear } from "react-icons/md";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'

//need new status = Not interested??
//pressing X will create friendship with status "hide", 
//clicking yes will create friendship with status "pending"
//add conditional to hide buttons
function UserCard({ friend, friends, updateFriend }) {
  const {id, name, profile_image, location, about, mom_life, interests} = friend
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null)
  // console.log(friend)
  // console.log(friendship)

  function handleSubmit(e, value){
    console.log(value)
    fetch('/user_friendships', {
      method: "POST",
      headers: {
      "content-type": "application/json"
      },
      body: JSON.stringify({
        requesting_user_id: user.id,
        receiving_user_id: id,
        status: value
      })
      })
      .then(res => {
        console.log(res)
      if (res.ok) {
      res.json().then(data=> {
        console.log(data)
        updateFriend(data)

      })
      } else {
      res.json().then(error => setError(error.message));
      }
      })
      }

  return (
    <>
      <Card variant='outlined' sx={{ maxHeight: 800}}>
        <CardMedia 
        component="img"
        image={profile_image}
        height={350}/>
        <CardContent sx={{height:150}}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant='overline'>{location}</Typography>
          <Typography variant="body1">{about}</Typography>
        </CardContent>
        <hr></hr>
        <CardActions>
          <Grid container
          justifyContent="center"
          alignItems="center" 
          spacing={20}>
            <Grid item sx={6}>
            <IconButton onClick={(e) => handleSubmit(e, "PENDING")} sx={{background:"#81c784"}} >
            <MdOutlineFavoriteBorder />
          </IconButton>
            </Grid>
            <Grid item sx={6}>
            <IconButton onClick={(e) => handleSubmit(e, "HIDDEN")}sx={{background:"#e57373"}}>
            <MdOutlineClear/>
          </IconButton>
            </Grid>
          </Grid>
      
          
         
          
    

          

        </CardActions>
      </Card>

    {/* <div className='card'>

    
      {friendship ? (
        ""
        ) : (
      <div>
        
          <img src={profile_image}></img>
          <h3>{name}</h3>
          <ul>
          <li>{mom_life}</li>
          <li>{location}</li>
          <li>{about}</li>
          <li>{interests}</li>
        </ul>
        <button onClick={(e) => handleSubmit(e, "PENDING")}>Yes</button>
        <button onClick={(e) => handleSubmit(e, "HIDDEN")}>No</button>
      </div>
      )}
      

    </div> */}
    
    </>
  )
}

export default UserCard