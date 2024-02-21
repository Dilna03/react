import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
    var[count,setCount]=useState(0);
    const submitHandler=()=>{
         setCount(count+1);
    }
    const submitHandler1=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <Typography variant="h3">Count:{count}</Typography>
        <br/>
        <Button variant="contained" onClick={submitHandler} color="success">+</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={submitHandler1} color="error">-</Button>
    </div>
  )
}

export default Counter