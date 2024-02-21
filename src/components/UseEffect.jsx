import { Button,Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    var[x,setx]= useState();
    const inpt=()=>{
        setx("React");

    }
    const inpt1=()=>{
        setx("Angular");
    }
    const inpt2=()=>{
        setx("Next");
    }
    useEffect(()=>{
        inpt1();},
        [])
    
  return (
    <div>
    <Typography variant="h4">WELCOME TO {x}</Typography>
        <br /><br />
        <Button variant="contained"color="primary" onClick={inpt}>React</Button>&nbsp;
        <Button variant="contained"color="primary" onClick={inpt1}>Angular</Button>&nbsp;
        <Button variant="contained"color="primary"onClick={inpt2}>Next</Button>&nbsp;
    </div>
  )
}

export default UseEffect