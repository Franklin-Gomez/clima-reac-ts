import { Weather } from "../../Hooks/useWeather"

type weatherDetailsProps = { 
    weather : Weather
}


export default function WeatherDetails( {weather} : weatherDetailsProps) {
    return (
        <div>
            Desde  WeatherDetails
        </div>
    )
}
