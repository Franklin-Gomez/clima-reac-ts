import axios from "axios"
import { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => { 
        
        const appid = import.meta.env.VITE_API_KEY;
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&&appid=${appid}`
            
            // get es default pero por ilustracion lo pondremoos
            const {data} = await axios ( geoUrl , { method : 'get'})

            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
            
            // asignamos la variable data el nombre de weatherResult
            const {data : weatherResult } = await axios( weatherUrl , { method : 'get'});


        } catch (error) {
            console.log( error)
        }


    }

    return { 
        fetchWeather
    }

}