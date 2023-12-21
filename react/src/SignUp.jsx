import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Test() {  

  const handleSubmit = event => {
  
    event.preventDefault();
    var data = {
      'fname': fname,
      'lname': lname,
      'username': username,
      'password': password
    }
    fetch('https://smoggy-deer-top-coat.cyclic.app/users', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert("Successfully")
          window.location.href = '/';
      }
    )

  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
 
  return (
    
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h" align='center'  >
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:10 }} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                fullWidth
                required
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type = "password"
                label="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </Grid>
    
            <Grid item xs={12}>
              <Button class="button-24"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                SIGN UP
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={{ margin: '20px 0px' }} >
                <Link href="http://localhost:5173/" variant="body1">
                  Already have an account? Sign in
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