import React from 'react'
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
const Inputs = ({style,className,onChange1,onChange2,value1,value2}) => {
  // const [selectedRegion, setSelectedRegion] = useState("");
  // const [Data, setData] = useState([]);
  // const [countryName, setCountryName] = useState("");
  // const [background, setBackground] = useState("dark");
  const Region = ["Europe", "Asia", "Africa", "Oceania", "America"];

  // const handleChanges = (e) => {
  //   setSelectedRegion(e.target.value);
  // };
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setCountryName(e.target.value);
  // };

  // async function getAllCountries() {
  //   const response = await fetch(`https://restcountries.com/v3.1/all`);
  //   const data = await response.json();

  //   setData(data);
  // }
  // useEffect(() => {
  //   getAllCountries();
  // }, []);

  // async function getDataByRegion(region) {
  //   const response = await fetch(
  //     `https://restcountries.com/v3.1/region/${region}`
  //   );
  //   const data = await response.json();

  //   setData(data);
  // }
  // console.log(Data);
  // useEffect(() => {
  //   if (selectedRegion) {
  //     getDataByRegion(selectedRegion);
  //   }
  // }, [selectedRegion]);

  // async function getCountriesByName(name) {
  //   const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  //   const data = await response.json();

  //   setData(data);
  // }
  // console.log(Data);
  // useEffect(() => {
  //   if (countryName) {
  //     getCountriesByName(countryName);
  //   }
  // }, [countryName]);
  return (
    <div className={className}>
    <div>
      <input
        placeholder="Search for a country"
        type="text"
        className="input"
        onChange={onChange1}
        value={value1}
        name="searchInput"
        style={style}
        // style={{
        //   backgroundColor:
        //     background === "light" ? "rgb(33,46,45)" : "white",
        //   color: background === "light" ? "white" : "black",
        // }}
      />{" "}
    </div>
    <div>
      <select
        className="drop"
        type="text"
        name="selectInput"
        value={value2}
        onChange={onChange2}
        style={style}

      >
        <option value="">Filter by region</option>
        {Region.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>


</div>  )
}

export default Inputs