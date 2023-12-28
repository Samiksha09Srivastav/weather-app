import './SearchBox.css';

//components
import { useState } from 'react';
//mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "034e0a1fac216736ed43ac5d65fc19fe";
 
    let getWeatherInfo = async() => {
        try {
        
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) ;
            let jsonResponse = await response.json();
            let result = {
                city : city,
                temp: jsonResponse.main.temp,
                tempMax : jsonResponse.main.temp_max,
                tempMin : jsonResponse.main.temp_min,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                description : jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch(error) {
            throw(error);
        } 

    }
    
    let handleChange = (event) => {
        setCity(event.target.value);    
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(error) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <h1>Search for Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="city name" 
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <br/><br/>
                <Button variant="contained" endIcon={<SearchIcon />} type='submit' id='search'>Search</Button>
                {error && <p style={{color: 'red'}}>Sorry!! Data Not Found!</p>}
            </form>
        </div>
    );
}