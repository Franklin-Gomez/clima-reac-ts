import axios from "axios"
import { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => { 
        
        const appid = import.meta.env.VITE_API_KEY;

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&&appid=${appid}`
            
            // get es default pero por ilustracion lo pondremoos
            const {data} = await axios ( url , { method : 'get'})
            

        } catch (error) {
            console.log( error)
        }


    }

    return { 
        fetchWeather
    }

}