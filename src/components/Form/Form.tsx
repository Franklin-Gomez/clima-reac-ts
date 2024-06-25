import { useState } from "react"
import { countries } from "../../db/db"
import styles from "./Form.module.css"
import { SearchType } from "../../types"
import Alert from "../Alert/Alert"

export default function Form() {

    const [ search , setSearch ] = useState<SearchType>({
        city : '',
        country : ''
    })

    const [ alert , setAlert ] = useState('')

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => { 
        setSearch ({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => { 

        e.preventDefault();

        if( Object.values(search).includes('') ) { 
            setAlert('Todos los Campos son necesarios')
            return;
        }
    }


    return (
        <form className={styles.form} onSubmit={ handleSubmit }>    

            { alert && <Alert> { alert }</Alert> }

            <div className={styles.field}>
                <label htmlFor="city">Ciudad : </label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={ e => handleChange(e)}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Pais : </label>

                <select name="country" id="country" value={search.country} onChange={ (e) =>  handleChange(e) }>

                    <option value=""> -- Seleccione un Pais -- </option>

                    {countries.map((country) => (
                        <option 
                            id={country.code}
                            key={country.code}
                            value={country.code}
                        > {country.name}</option>
                    ))}

                </select>

            </div>

            <input type="submit" className={styles.submit} value="Consultar Clima"/>

        </form>
    )
}
