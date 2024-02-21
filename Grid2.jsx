import { Grid } from '@mui/material';
import React,{ useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

const Grid2 = () => {
  var[product,setProduct]=useState([]);
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then((response)=>{
        console.log(response)
        setProduct(response.data);
      })
      .catch((error)=>console.log("error"))})
  return (
    <div style={{margin:'4%'}}>
      <Grid container spacing={2}>
        {
          product.map((val,i)=>{
            return(
              <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{height:140}}
          image={val.image}
          title={val.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {val.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

              </Grid>
            )
            })}
      </Grid>
    </div>
  )
}

export default Grid2