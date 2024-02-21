
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Grid, TextField} from '@mui/material'
import React from 'react'
const GridGet = () => {
  return (
    <div style={{margin:'4%'}}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Common_Collared_Lizard.jpg/800px-Common_Collared_Lizard.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField variant="outlined" label="Item1"></TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField variant="outlined" label="Item2"></TextField>
            </Grid>
        </Grid>
    </div>
  )
}

export default GridGet