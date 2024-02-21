import { TextField, Typography,Button} from '@mui/material'
import React,{useState} from 'react'

const List = () => {
  var[inp,setInp]= useState(["Name"])
  var[data,setData]=useState("");

  const inputHandler=(e)=>{
    console.log("on")
    setData(e.target.value)
    console.log("inp",data)
  }
  const add =()=>{
    console.log("c")
    setInp([...inp,data]);
    console.log("sub",inp);
    setData("");

  }
    
  return (
    <div style={{marginTop:'50px'}}>
      <Typography variant='h1'>List</Typography>
        <TextField variant="outlined" label="Enter your name" value={data} onChange={inputHandler} value={data}></TextField>
        <br /><br />
        <Button variant="contained" onClick={add}>Submit</Button>
        <br /><br />
        <ul>
          {inp.map((v,i)=>
          {
            return <li key={i}>{v}</li>
          })}
        </ul>
    </div>
  )
}

export default List