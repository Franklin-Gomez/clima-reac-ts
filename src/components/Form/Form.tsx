import { countries } from "../../db/db"

export default function Form() {
    return (
        <form>
            <div>
                <label htmlFor="city">Ciudad : </label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                />
            </div>

            <div>
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

            <input type="submit" value="Consultar Clima"/>

        </form>
    )
}
