import { weather } from "../../Hook/useWeather"
import styles from "./Temp.module.css"

type TempProps = { 
  weather : weather
}

export default function Temp( {weather} : TempProps  ) {

  
  const centigradosTemp =  weather.main.temp - 273.15  
  const centigradosTempmax =  weather.main.temp_max - 273.15  
  const centigradosTempmin =  weather.main.temp_min - 273.15  


  return (

    <div className={styles.container} >
      
      <h1>Clima de : <span> { weather.name } </span> </h1>

      <p className={ styles.temp } >{ centigradosTemp.toFixed(1) }&deg;C</p>  

      <div className={ styles.container_temp }> 
        <p> Max : <span className={ styles.span }> {centigradosTempmax.toFixed(1)} &deg;C </span> </p>
        <p> Min : <span className={ styles.span }> {centigradosTempmin.toFixed(1)} &deg;C </span></p>
      </div>
      
    </div>
  )
}
