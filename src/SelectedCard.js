import React from 'react'
// import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
// import Brightness3Icon from "@mui/icons-material/Brightness3";
// import Typography from "@mui/material/Typography";

const SelectedCard = ({style,selectedCountry,background}) => {
    
  return (
<Grid container spacing={8}  style={{
        backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
        color: background === "light" ? "white" : "black",
        marginTop:"5rem"

      }} >
          <Grid item xs={12} sm={6} md={4}>
          <img src={selectedCountry.flags.png} alt="country" width={600} />

           
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={0} >
          <Grid item xs={12} sm={12} md={12} >
            <h1>{selectedCountry.name.common}</h1>  
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
              <h3>Native Name:`` </h3>
              <h3>Population: {selectedCountry.population}</h3>
              <h3>Region: {selectedCountry.region}</h3>
              <h3>SubRegion: {selectedCountry.subregion}</h3>
              <h3>Capital: {selectedCountry.capital}</h3>

          </Grid><Grid item xs={12} sm={12} md={6}>
<h3>Top Level Domain:{selectedCountry.currencies.name}</h3>   
<h3>Currencies: {selectedCountry.currencies.name}</h3>
  <h3>Languages:{selectedCountry.languages.eng}</h3>   
      </Grid>
      <Grid item xs={12} sm={12} md={12} >
            <h4>Border Countries:{selectedCountry.name.common}</h4>  
          </Grid>
          </Grid>
          </Grid>

        </Grid>  )
}

export default SelectedCard