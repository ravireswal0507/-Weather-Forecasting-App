import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 24.84,
        temp: 37.28,
        tempMin: 31.58,
        tempmax: 32.28,
        humidity:16,
        weather:"haze"
    });
    let updateInfo = (newinfo)=>{
        setWeatherInfo(result);
    }

    
    
    return(
         <div style={{textAlign: "center"}}>
         <h2>  Weather App by Ravi </h2>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
        </div>)
}