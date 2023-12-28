import { useState } from 'react';

import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "___",
        description: "....",
        feelsLike: "....",
        humidity: "..",
        temp: "....",
        tempMax: "...",
        tempMin: "..."
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <SearchBox updateInfo= {updateInfo } />
            <InfoBox info= {weatherInfo} />
        </div>
        
    );
}