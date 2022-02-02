import "./App.css";
import { useState, useEffect, React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Typography from "@mui/material/Typography";

const Region = ["Europe", "Asia", "Africa", "Oceania", "America"];
function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [Data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [background, setBackground] = useState("dark");
  const [screenChange, setScreenChange] = useState("");
   const handleScreenChange = (i) => {
    console.log("qwswqeq", i);
    setScreenChange(i);
   
  };
  const handleThemeChange = () => {
    if (background === "light") {
      setBackground("dark");
    } else {
      setBackground("light");
    }
  };
  const handleChanges = (e) => {
    setSelectedRegion(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
  };

  async function getAllCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    setData(data);
  }
  useEffect(() => {
    getAllCountries();
  }, []);

  async function getDataByRegion(region) {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();

    setData(data);
  }
  console.log(Data);
  useEffect(() => {
    if (selectedRegion) {
      getDataByRegion(selectedRegion);
    }
  }, [selectedRegion]);

  async function getCountriesByName(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();

    setData(data);
  }
  console.log(Data);
  useEffect(() => {
    if (countryName) {
      getCountriesByName(countryName);
    }
  }, [countryName]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: background === "light" ? "rgb(33,46,45)" : "#FAFAFA",
        color: background === "light" ? "Black" : "White",
      }}
    >
      <div
        className="navbar"
        style={{
          backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
          color: background === "light" ? "white" : "black",
        }}
      >
        <div>
          <h4>What is in the world ?</h4>
        </div>
        <div style={{ alignItems: "center", display: "flex" }}>
          <Brightness3Icon onClick={handleThemeChange} />
          <h4> DarkMode</h4>
        </div>
      </div>
      {screenChange === "" && (
        <div className="form">
          <div>
            <input
              placeholder="Search for a country"
              type="text"
              className="input"
              onChange={handleChange}
              value={countryName}
              name="searchInput"
              style={{
                backgroundColor:
                  background === "light" ? "rgb(33,46,45)" : "white",
                color: background === "light" ? "white" : "black",
              }}
            />{" "}
          </div>
          <div>
            <select
              className="drop"
              type="text"
              name="selectInput"
              value={selectedRegion}
              onChange={handleChanges}
              style={{
                backgroundColor:
                  background === "light" ? "rgb(33,46,45)" : "white",
                color: background === "light" ? "white" : "black",
              }}
            >
              <option value="">Filter by region</option>
              {Region.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {screenChange === "" && (
        <Grid container spacing={2} style={{ padding: "30px" }}>
          {Data.map((item) => (
            <Grid item xs={12} sm={4} md={3} key={item.name.common}>
              <Card
                onClick={() => handleScreenChange("cardProfile")}
                sx={{ maxWidth: 250 }}
                style={{
                  backgroundColor:
                    background === "light" ? "rgb(33,46,45)" : "white",
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
                      backgroundColor:
                        background === "light" ? "rgb(33,46,45)" : "white",
                      color: background === "light" ? "white" : "black",
                    }}
                  >
                    <Typography gutterBottom variant="h7">
                      Name: {item.name.common}
                    </Typography>
                    <Typography variant="body2">
                      Population:{item.population}
                    </Typography>
                    <Typography variant="body2">
                      Region: {item.region}
                    </Typography>{" "}
                    <Typography variant="body2">
                      Capital:{item.capital}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {screenChange === "cardProfile" && (
        <Grid container spacing={0} style={{ color: "red",marginTop:"8rem" }} >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ maxWidth: 250 }}
              style={{
                backgroundColor:
                  background === "light" ? "rgb(33,46,45)" : "white",
                color: background === "light" ? "white" : "black",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                // image={item.flags.svg}
                alt="green iguana"
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={0} style={{ color: "red" }}>
          <Grid item xs={12} sm={12} md={12} style={{ color: "red",  }}>
            bat{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            bat{" "}
          </Grid><Grid item xs={12} sm={12} md={6}>
            bat{" "}
          </Grid>
          </Grid>
          </Grid>

        </Grid>
      )}
    </div>
  );
}

export default App;
