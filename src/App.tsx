import style from './App.module.css'
import Error from './Components/Error/Error'
import Formulario from './Components/Form/Formulario'
import Temp from './Components/Temp/Temp'
import useWeather from './Hook/useWeather'
import Spining from './Spining/Spining'

function App() {

  const {  weater , hasWeatherData  , fetchWeather , notfound , loading } = useWeather()
  
  return (
    <>
      <h1 className={style.title}> Clima Real Time </h1>

      <div className={style.container}>
        <Formulario
          fetchWeather={fetchWeather}
        />

        { loading && <Spining/> }

        {  hasWeatherData  && 

          <Temp 
            weather={weater}
          />

        }

        { notfound && <Error> Ciudad no Encontrada </Error>}

      </div>
    </>
  )
}

export default App
