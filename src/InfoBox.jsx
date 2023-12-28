import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './InfoBox.css'

export default function InfoBox({ info }) {

    const IMG_URL = 
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = 
        "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = 
        "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = 
        "https://plus.unsplash.com/premium_photo-1677410642801-725a73622e4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 25  
                            ? HOT_URL 
                            : COLD_URL }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <div>Humidity : {info.humidity}</div>
                            <div>Min Temperature : {info.tempMin} | Max Temperature : {info.tempMax}</div>
                            <div>It seems <i><b>{info.description}</b></i> & feels like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}