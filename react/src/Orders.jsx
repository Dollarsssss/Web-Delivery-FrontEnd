import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";


export default function OrderList() {

  const [orders, setOrder] = useState([]);
  useEffect(() => {
    OrderGet()
  }, [])
  
  const OrderGet = () => {
    fetch("https://smoggy-deer-top-coat.cyclic.app/orders")
      .then(res => res.json())
      .then( 
        (result) => {
          setOrder(result)
          console.log (result)
        }
      )
      
  }



  const UpdateOrder = order_ID => {
    window.location = '/update/'+ order_ID
  }

  const OrderDelete = order_ID => {
    var data = {
      'order_ID': order_ID
    }
    fetch('https://smoggy-deer-top-coat.cyclic.app/orders', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        if (confirm("Do you want to Delete?")) {
          alert("Successfully");
          window.location.href = '/orders';
          OrderGet;
        } else {
          alert("Cancal");
        }
      }
    )
  }
  return (
   
    <Container sx={{ p:2 }} maxWidth="lg">    
      <Paper sx={{ p:2 }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Order Update
            </Typography>
          </Box>
          <Box>
            <Link to="/create">
              <Button variant="contained" color="primary" class="button-24">
                New Order
              </Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">FirstName</TableCell>
              <TableCell align="left">LastName</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">ProductCode</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.ID}>
                <TableCell align="left">{order.order_ID}</TableCell>
                <TableCell align="left">{order.fname}</TableCell>
                <TableCell align="left">{order.lname}</TableCell>
                <TableCell align="left">{order.address}</TableCell>
                <TableCell align="left">{order.date}</TableCell>
                <TableCell align="left">{order.shipper_name}</TableCell>
                <TableCell align="left">{order.status}</TableCell>
                <TableCell align="left">{order.productCode}</TableCell>
                <TableCell align="center">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => UpdateOrder(order.order_ID)}>Update All</Button>
                    <Button onClick={() => OrderDelete(order.order_ID)}>Delete</Button>   
                    <Button onClick={() => Update(order.order_ID)}>Update  </Button>
                    
                  </ButtonGroup>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
    
  );
}