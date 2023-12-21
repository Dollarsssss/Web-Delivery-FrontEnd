import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function SignIn() {  

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://smoggy-deer-top-coat.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok && data.results ) {
        // Login successful
        // You can redirect the user or perform any other necessary actions here
        console.log(data.results );
        console.log("Login successful");
        window.location.href = '/';
      } else {
        // Login failed
        console.log("Login faild");
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h" align='center'  >
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:10 }} spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={9} >
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={handleUsernameChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={9} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="password"
                type = "password"
                onChange={handlePasswordChange}
              />
            </Grid>
            {errorMessage && (
            <Typography variant="h" color="error" align="center" style={{ marginTop: '10px' }}>
                {errorMessage}
            </Typography>
            )}
            <Grid item xs={9}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
               Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={{ margin: '20px 0px' }} >
                <Link href="http://localhost:5173/SignUp" variant="body1">
                Don't have an account? Sign Up
                </Link>
              </Grid>
             
            </Grid>
            </Grid>

          </Grid>
          </form>
      </div>
    </Container>
  );
}