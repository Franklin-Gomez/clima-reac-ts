import axios from "axios"
import { SearchType } from "../types"
import { z } from 'zod'


// Type Guards
// function ConfirmType( weather : unknown ) : weather is Weather { 
//     return (
//         Boolean( weather ) && 
//         typeof weather === 'object' &&
//         typeof ( weather as Weather).name === 'string' &&
//         typeof ( weather as Weather).main.temp === 'number' &&
//         typeof ( weather as Weather).main.temp_min === 'number' &&
//         typeof ( weather as Weather).main.temp_max === 'number' 

//     )
// }

// ZOD 
const Weather = z.object({
    name  : z.string(),
    main : z.object({
        temp : z.number(),
        temp_max : z.number(),
        temp_min : z.number()
    })
})

type Weather = z.infer<typeof Weather>


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

            // Castear el type - Asignar Type
            // const {data : weatherResult } = await axios<weather>( weatherUrl , { method : 'get'});
            // console.log(weatherResult.main.temp)
            // console.log(weatherResult.name)

            // Type Guards
            // const {data : weatherResult } = await axios( weatherUrl , { method : 'get'});
            // const resultado = ConfirmType( weatherResult )
            
            // if( resultado ) { 
            //     console.log( weatherResult.name)
            // } else { 
            //     console.log('la respuesta esta mal formulada')
            // }

            // Zod 
            const {data : weatherResult } = await axios( weatherUrl , { method : 'get'});
            const resultado = Weather.safeParse( weatherResult )
            console.log( resultado )

            if( resultado.success) { 
                console.log( resultado.data.name)
            } else { 
                console.log( 'respuesta mal formada ')
            }

        } catch (error) {
            console.log( error)
        }


    }

    return { 
        fetchWeather
    }

}