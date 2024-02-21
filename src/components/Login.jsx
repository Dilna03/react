import { Button, TextField,Typography } from '@mui/material'
import React from 'react'
const Login = () => {
  return (
    <div>
        <h1>Login page</h1>
     <input placeholder='Username'/>
     <br/>
     <input placeholder='password'/>
     <br />
     <button>Submit</button>
     <br /><br /><br /><br />
     <Typography variant='h1'>Login Page</Typography>
     <TextField id="outlined-basic" label="Username" variant="outlined" />
     <br/>
<TextField id="filled-basic" label="Password" variant="filled" />
<br/>
<Button variant="text">Submit</Button>
<br />
<Button variant="contained">Submit</Button>
<br />
<Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Login