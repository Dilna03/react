import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData]= useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
  return (
    <div>
        <Typography variant='h4'>SignUp</Typography>
        <TextField variant="standard" label="Username" name="username" onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant="standard" label="password" name="pwd" onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant="standard" label="Email" name="email" onChange={inputHandler}></TextField>
        <br /><br />
        <Button variant="contained" color="error">Submit</Button>
    </div>
  )
}

export default Signup