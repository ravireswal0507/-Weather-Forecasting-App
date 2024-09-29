import { useState } from 'react'


import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import "./SearchBox.css";


export default function SearchBox(){
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "48ea2cda9af395d7b2abe4b8cf4903ab"; 

  // let getWeatherInfo = async ()=>{
  //   let response= await fetch(`${API_URL}?${city}&appid=${API_KEY}`);
  //   let jsonResponse =await response.json();
  //   console.log(jsonResponse);

  // };
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_Like,
        weather:jsonResponse.weather[0].description,

      };
      console.log(result);



    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error gracefully, e.g., show a message to the user
    }
  };

 


 let handleChange = (evt)=>{
  setCity(evt.target.value);
 };
 let handleSubmit =async (evt)=>{
  evt.preventDefault();
  console.log(city);
  setCity("");
 let info= await getWeatherInfo();
 updateInfo(newinfo)
 }




  return (
    <div className='SearchBox'>

      {/* <h1>Search for the weather</h1> */}
      <form onSubmit={handleSubmit}>
      <TextField
       id="city" 
       label="City Name"
        variant="outlined"
         required 
         value={city}
         onChange={handleChange}/>
      <br /> <br />

      <Button variant='contained' type='submit'className='SearchBox'>
        Search
        </Button>
       </form>
    </div>
  )
}

// export default  SearchBox
