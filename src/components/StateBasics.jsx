import { Button, TextField,Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setfname]=useState("POOKI");
    var[val,setval]=useState();
    const handledInput=(e)=>{
      //console.log(e.target.value);
      setval(e.target.value);

    }
    const submitHandler=()=>{
      console.log("clicked");
      setfname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome{fname}</Typography>
        <br /><br />
        <TextField variant='outlined' onChange={handledInput}label="Type your name"></TextField>
        <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics