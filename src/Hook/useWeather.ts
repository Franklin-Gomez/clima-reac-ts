import { SearchType } from "../Types"
import axios from "axios"
import { set, z } from 'zod'
import { useState , useMemo } from "react"


// schema
const mySchema = z.object( { 

    name : z.string(),
    main : z.object ({ 
        temp : z.number(),
        temp_max : z.number(),
        temp_min : z.number()
    })

})

const initialState = { 
    name : '',
    main : { 
        temp : 0,
        temp_max : 0,
        temp_min : 0
    }
}

export type weather = z.infer<typeof mySchema>

// Custom Hook
export default function useWeather () { 

    const [ weater , setWeather ] = useState<weather>( initialState )

    const [ notfound , setnotFound] = useState(false)

    const [ loading , setLoading ] = useState( false )

    const fetchWeather = async (  search : SearchType  ) => { 

        // reiniciar las alertas
        setLoading(true)
        setWeather( initialState )
        setnotFound(false) 
        
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${'5e13f47a14d9e3a1a3a6f7db87fe5c03'}` 

        try {
            const resultado = await axios( url )

            if( !resultado.data[0] ) { 
                setnotFound( true );
                return;
            }

            const lon = resultado.data[0].lon
            const lat = resultado.data[0].lat

            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'5e13f47a14d9e3a1a3a6f7db87fe5c03'}`

            const { data } = await axios (url2 )

            // add type to respond
            const weatherData = mySchema.safeParse( data )
            
            if( weatherData.success ) { 
                setWeather( weatherData.data )
            }
            
        } catch (error) {

            console.log ( error )

        } finally { 
            setLoading(false)
        }


    }

    const hasWeatherData = useMemo(() => weater.name , [weater])

    return { 
        weater,
        hasWeatherData,
        notfound,
        loading,
        fetchWeather
    }

}