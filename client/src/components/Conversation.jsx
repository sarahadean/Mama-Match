import React, { useEffect, useState, useContext} from 'react'
import { Formik, Field, ErrorMessage} from "formik";
import { useParams } from "react-router-dom";
import UserContext from './Pages/UserContext';
import Message from './Message';
import { Container, TextField, Divider, Typography, List } from '@mui/material';

//fetch all of the messages for a single conversation
//map through fetch for message component
function Conversation() {
  const { user, setUser } = useContext(UserContext);
  const {id, name} = useParams()
  console.log(name)
  // const {receiving_user_name, requesting_user_name, receiving_user_id, requesting_user_id } = convo

  const [messages, setMessages] = useState([])
  const [error, setError] = useState(null);


useEffect(() => {
  fetch(`/api/messages/${user.id}/${id}`)
  .then(res => {
    console.log(res)
    if (res.ok) {
      return res.json()
    } else if (res.status == 404){
      return []
    } else {
      throw new Error("Error fetching address details")
    }
  })
  .then(messages => setMessages(messages))
}, [user])

console.log(messages)
  return (
    <>

        <Container>
          <Typography align="center" variant="h5" className="header-message">
            Chat with {name} :
          </Typography>

          
          <List style={{overflowY: 'auto'}}>
            {[...messages].map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </List> 
          

 
      <Divider />
      <Formik
        initialValues={{
          content: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          fetch(`/api/messages/${user.id}/${id}`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((res) => {
              console.log(res);
              if (res.ok) {
                res.json().then((message) => {
                  setMessages([...messages, message]);
                  actions.resetForm();
                });
              } else {
                res.json().then((data) => {
                  if (data && data.message) {
                    setError(data.message);
                  } else {
                    setError('An error occurred during signup.');
                  }
                });
              }
            })
            .catch((error) => {
              setError('An error occurred during signup.');
              console.error(error);
            });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>
              Send Message:
              <Field
                as={TextField}
                type="text"
                name="content"
                id="outlined-basic-email"
                fullWidth
              />
              <ErrorMessage name="content" component="h3" />
            </label>
            <input type="submit" value="Send" />
          </form>
        )}
      </Formik>
      </Container>
    </>
  )
}

export default Conversation