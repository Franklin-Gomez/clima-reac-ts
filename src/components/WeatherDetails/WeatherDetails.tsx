import { Weather } from "../../Hooks/useWeather"
import { KelvinToCelsius } from "../../ultils"
import styles from './WeatherDetails.module.css'

type weatherDetailsProps = { 
    weather : Weather
}


export default function WeatherDetails( {weather} : weatherDetailsProps) {
    return (
        <div className={styles.container}>
            <h2> Clima de : { weather.name }</h2>
            <p> temperatura : { KelvinToCelsius( weather.main.temp )}&deg;C</p>

            <div>
                <p>Max : <span>{ KelvinToCelsius( weather.main.temp_max )}&deg;C</span></p>
                <p>Min : <span>{ KelvinToCelsius( weather.main.temp_min )}&deg;C</span></p>
            </div>
        </div>
    )
}
