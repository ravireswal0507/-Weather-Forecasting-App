import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";




export default function InfoBox( info ){
    const INIT_URL =
    "https://images.unsplash.com/photo-1509409347569-27f88c82131c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2FldGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    // let info = {
    //     city: "mumbai",
    //     feelsLike: 24.84,
    //     temp: 37.28,
    //     tempMin: 31.58,
    //     tempmax: 32.28,
    //     humidity:16,
    //     weather:"haze"
    // }
    return(
         <div className="infoBox" >
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature= {info.temp} &deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}</p>
        <p>max Temp ={info.tempmax}</p>
        <p>The waether feels Like= {info.feelsLike}&deg;C</p>

        <p>The waether can be describe as ${info.weather}</p> and feels like{""} {info.feelslike}&deg; C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>
    )
 

}