import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from "@mui/material";


export default function OrderUpdate() {
   

    const handleDateChange = (event) => {
      const selectedDate = event.target.value;
      setSelectedDate(selectedDate);
    };

    const { order_ID } = useParams();
    useEffect(() => {
        fetch("https://smoggy-deer-top-coat.cyclic.app/update")
            .then(res => res.json())
            .then(
                
                (result) => {
                    
                    setFname(result[0].fname)
                    setLname(result[0].lname)
                    setAddress(result[0].address)
                    setDate(result[0].date)
                    setShipper_Name(result[0].shipper_name)
                    setStatus(result[0].status)
                   
                }
                
            )
            
    }, [order_ID])



    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'order_ID': order_ID,
            'fname': fname,
            'lname': lname,
            'address': address,
            'date': selectedDate,
            'shipper_name': shipper_name,
            'status': status,
            'description': description,
            'weight': weight
            
        }
        fetch('https://smoggy-deer-top-coat.cyclic.app/update', {
            method: 'PUT',
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
                      window.location.href = '/orders';
                      
                  }
            )    
    }
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [shipper_name, setShipper_Name] = useState('');
    const [status, setStatus] = React.useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    return (
        <Container sx={{ p: 2 }} maxWidth="sm">
            <div>
                <Typography component="h1" variant="h5">
                    Order
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container sx={{ pt: 2 }} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                            variant="outlined"
                            required 
                            fullWidth 
                            type="date" 
                            id="date-select" 
                            value={selectedDate} 
                            onChange={handleDateChange} />
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select 
                                variant="outlined"
                                required
                                fullWidth
                                id="shipper_name"
                                label="Shipper_Name"
                                value={shipper_name}
                                onChange={(e) =>setShipper_Name(e.target.value)}
                            >
                            <MenuItem value={"Kerry"}>Kerry</MenuItem>
                            <MenuItem value={"Flash"}>Flash</MenuItem>
                            <MenuItem value={"J&T"}>J&T</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select 
                                variant="outlined"
                                required
                                fullWidth
                                id="status"
                                label="Status"
                                value={status}
                                onChange={(e) =>setStatus(e.target.value)}
                            >
                             <MenuItem value={"เตรียมจัดส่ง"}>เตรียมจัดส่ง</MenuItem>
                            <MenuItem value={"กำลังจัดส่ง"}>กำลังจัดส่ง</MenuItem>
                            <MenuItem value={"จัดส่งแล้ว"}>จัดส่งแล้ว</MenuItem>
                            </Select>
                        </Grid>
                    
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="descriptionct"
                            label="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="weight"
                            label="Weight"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <Button class="button-24"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}