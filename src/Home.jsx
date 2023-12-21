import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


let firstName = "";
let lastname = "";
let date = "";
let description = "";
let company = "";
let status = "";
let weight = "";

export default function PricingContent(){
 
  const [productCode, setProductCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [correctMessage, setCorrecte] = useState('');

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  
      const response = await fetch('https://smoggy-deer-top-coat.cyclic.app/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productCode})
      });

      const data = await response.json();

      if (response.ok && data.results) {
        // ProductsCode found
        // You can redirect the user or perform any other necessary actions here
        console.log("ProductsCode found");
        console.log(data.results);
        console.log(data.results[0]);
        console.log(data.results[0].fname);
        console.log(data.results[0].lname);
        console.log(data.results[0].date);
        console.log(data.results[0].description);
        console.log(data.results[0].shipper_name);
        console.log(data.results[0].status);
        console.log(data.results[0].weight);

        firstName = data.results[0].fname;
        lastname = data.results[0].lname;
        date = data.results[0].date;
        description = data.results[0].description;
        company = data.results[0].shipper_name;
        status = data.results[0].status;
        weight = data.results[0].weight;
      
        setCorrecte("Find track number in the system");
      } else {
        // No ProductsCode found
        console.log("No ProductsCode found");
        setErrorMessage("There is no track number in the system");
      }
    } 
  

  return (
   
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Keeler Express
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="http://localhost:5173/" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
  
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Check Track Number
        </Typography>
        <form onSubmit={handleSubmit}>
       <TextField 
       required
       margin="normal" 
       fullWidth 
       label="TrackNumber" 
       onChange={handleProductCodeChange}
       >
       </TextField> 
       <Button  variant="outlined" sx={{ my: 1, mx: 0 }} type="submit" class="button-24" >
            Follow
          </Button>
          {correctMessage && !errorMessage && (
            <Typography variant="h" color="error" align="center" style={{ marginTop: '10px', marginLeft: '272px' }}>
              {correctMessage} 
              <p style={{ marginTop: '50px' , fontSize: '20px', color: 'black' }} >Product details</p>
              <TableHead>
            <TableRow>
              <TableCell align="left" style={{ width: '100px', height: '50px' }}>ชื่อ</TableCell>
              <TableCell align="left" style={{ width: '100px', height: '50px' }}>สกุล</TableCell>
              <TableCell align="left" style={{ width: '120px', height: '50px' }}>วันที่จัดส่ง</TableCell>
              <TableCell align="left" style={{ width: '120px', height: '50px' }}>รายละเอียด</TableCell>
              <TableCell align="left" style={{ width: '80px', height: '50px' }}>บริษัท</TableCell>
              <TableCell align="left" style={{ width: '100px', height: '50px' }}>สถานะ</TableCell>
              <TableCell align="left" style={{ width: '100px', height: '50px' }}>น้ำหนัก</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="left">{firstName}</TableCell>
              <TableCell align="left">{lastname}</TableCell>
              <TableCell align="left">{date}</TableCell>
              <TableCell align="left">{description}</TableCell>
              <TableCell align="left">{company}</TableCell>
              <TableCell align="left">{status}</TableCell>
              <TableCell align="left">{weight}</TableCell>
            </TableRow>
          </TableHead>
            </Typography>
          )}  
          { errorMessage && (
            <Typography variant="h" color="error" align="center" style={{ marginTop: '10px',  marginLeft: '220px' }}>
                {errorMessage}
            </Typography>)}


          </form>
      </Container>
    </React.Fragment>
  );
}
    
