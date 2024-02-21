import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}align='left'variant='h6' >APP</Typography>
                <Button style={{color:"white"}}><Link to="/"style={{color:"white"}}>Login</Link></Button>
                <Button style={{color:"white"}}><Link to="/GridGet"style={{color:"white"}}>Grid</Link> </Button>
                <Button style={{color:"white"}}><Link to="/Grid2"style={{color:"white"}}>Grid2</Link> </Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar