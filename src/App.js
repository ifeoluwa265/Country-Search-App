import "./App.css";
import { useState, useEffect, React } from "react";

import Grid from "@mui/material/Grid";
import SelectedCard from "./SelectedCard";
import Navbar from "./Navbar";
import Inputs from "./inputs";
import CardComponent from "./CardComponent";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [Data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [background, setBackground] = useState("dark");
  const [page, setPage] = useState(2);
const [selectedCountry,setSelectedCountry] = useState(null);
  // const selectedCountry = Data.find((value) => value.countryName === selected)
 
  const onSelectCountry= (item) => {
setSelectedCountry(item)
  };
  console.log(selectedCountry)

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
  console.log(Data.slice(50*(page-1),50*page));

  console.log(Data.slice(50,100));
  useEffect(() => {
    if (countryName) {
      getCountriesByName(countryName);
    }
  }, [countryName]);

  return (
    <Grid
      container
      spacing={0}
      className="container"
      style={{
        backgroundColor: background === "light" ? "rgb(33,46,45)" : "#FAFAFA",
        color: background === "light" ? "Black" : "White",
      }}
    >
      <Navbar
        onClick={handleThemeChange}
        style={{
          backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
          color: background === "light" ? "white" : "black",
        }}
      />

      {!selectedCountry  && (
        <Grid item xs={12} md={12} sx={{paddingLeft:"5rem",paddingRight:"5rem"}}>
           <Inputs
           onChange1={handleChange}
           onChange2={handleChanges}
           value1={countryName}
           value2={selectedRegion}
          style={{
            backgroundColor: background === "light" ? "rgb(33,46,45)" : "white",
            color: background === "light" ? "white" : "black",
          }}
          className="form"
        />
              <Grid container spacing={2} >
              {Data.slice(50*(page-1),50*page).map((item) => (
                      <Grid item xs={12} sm={6} md={3} key={item.name.common}>
                        <CardComponent item={item} background={background} onSelect={onSelectCountry}/>
 </Grid> 
    ))}

              </Grid>
              {/* <div className="w-full flex justify-around">
         {
          Data.map((pageNum, index) => (
             <span key={index} className={pageNum === this.state.currentPage ? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 text-white" : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full"} onClick={() => {setPage(pageNum)}}>
               {pageNum}
             </span>
           ))
         }
       </div> */}
        </Grid>
        
       
      )}


      {selectedCountry && (
        <SelectedCard
        // image={item.flag.svg}
        selectedCountry={selectedCountry}
        background={background}
         
        />
      )}
          </Grid>
 
  );
}

export default App;
