import { countries } from "../../db/data"
import style from './Formulario.module.css'

export default function Formulario() {
  return (
    <form className={style.container}>
        <div className={style.input}>
            <label htmlFor="">Ciudad : </label>
            <input type="text"  placeholder="Ciudad" className={style.campo}/>
        </div>

        <div className={style.input}>
            <label>Pais : </label>
            <select name="" id="" className={style.campo}>
                <option value=""> -- Seleccione el Pais -- </option>

                { countries.map ((country) => (
                    <option value={country.code}>{country.name}</option>
                ))}

            </select>
        </div>

        <input type="submit" value='Buscar Clima' className={style.input3} />
    </form>
    
  )
}
