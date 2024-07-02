import { useState } from "react"
import { countries } from "../../db/data"
import style from './Formulario.module.css'
import { SearchType } from "../../Types"
import Error from "../Error/Error"

type FormularioProps = { 
    fetchWeather :  ( search: SearchType ) => void
}

export default function Formulario( { fetchWeather  } : FormularioProps ) {

    const [ search , setSearch ] = useState<SearchType>( { 
        city : '',
        country : ''
    })

    const [ error , setError ] = useState('')

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>  ) => { 
        setSearch (
            {
                ...search,
                [e.target.name] :  e.target.value
            }
        )
    }

    const handleSubmit = (  e : React.FormEvent<HTMLFormElement> ) => { 

        e.preventDefault()
        
        if( Object.values(search).includes('') ){ 
            setError('Rellene los Campos')
            return;
        }
        setError('')
        fetchWeather( search )
    }

    return (

        <form className={style.container} onSubmit={ handleSubmit }>

            { error && <Error> { error }</Error> }
            
            <div className={style.input}>
                <label htmlFor="">Ciudad : </label>
                <input 
                    type="text"  
                    name="city"
                    placeholder="Ciudad" 
                    className={style.campo}
                    onChange={ handleChange }    
                />
            </div>

            <div className={style.input}>
                <label>Pais : </label>
                <select 
                    name="country" 
                    id="" 
                    className={style.campo} 
                    onChange={ handleChange }
                >
                    <option value=""> -- Seleccione el Pais -- </option>

                    { countries.map ((country) => (
                        <option 
                            value={country.code}
                            key={country.code}
                        >{country.name}</option>
                    ))}

                </select>
            </div>

            <input type="submit" value='Buscar Clima' className={style.input3} />
        </form>
        
    )
}
