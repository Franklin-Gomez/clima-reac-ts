import { useState } from "react"
import { countries } from "../../db/data"
import style from './Formulario.module.css'

export default function Formulario() {


    const [ country , setCountry ] = useState( { 
        city : '',
        country : ''
    })

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>  ) => { 
        setCountry (
            {
                ...country,
                [e.target.name] :  e.target.value
            }
        )
    }


    return (
        <form className={style.container}>
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
