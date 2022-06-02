import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const CardComponent = ({item,background,onSelect}) => {
  return (
    <Card
      onClick={() => onSelect(item)}
      sx={{ maxWidth: 250 }}
      style={{
        backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
        color: background === "light" ? "white" : "black",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.flags.svg}
          alt="green iguana"
        />
        <CardContent
          style={{
            backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
            color: background === "light" ? "white" : "black",
          }}
        >
          <Typography gutterBottom variant="h7">
            Name: {item.name.common}
          </Typography>
          <Typography variant="body2">Population:{item.population}</Typography>
          <Typography variant="body2">Region: {item.region}</Typography>{" "}
          <Typography variant="body2">Capital:{item.capital}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
