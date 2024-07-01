import { SearchType } from "../Types"
import axios from "axios"
import { z } from 'zod'


// schema
const mySchema = z.object( { 

    name : z.string(),
    main : z.object ({ 
        temp : z.number(),
        temp_max : z.number(),
        temp_min : z.number()
    })

})

export type weather = z.infer<typeof mySchema>


export default function useWeather () { 


    const fetchWeather = async (  search : SearchType  ) => { 
        
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${'5e13f47a14d9e3a1a3a6f7db87fe5c03'}` 

        try {

            const resultado = await axios( url)

            const lon = resultado.data[0].lon
            const lat = resultado.data[0].lat

            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'5e13f47a14d9e3a1a3a6f7db87fe5c03'}`

            const { data } = await axios (url2 )

            // add type
            const resultado2 = mySchema.safeParse( data )
            
            
        } catch (error) {
            console.log ( error )
        }


    }


    return { 
        fetchWeather
    }

}