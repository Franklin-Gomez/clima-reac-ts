import { countries } from "../../db/db"
import styles from "./Form.module.css"

export default function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="city">Ciudad : </label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Pais : </label>

                <select name="country" id="country">

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
