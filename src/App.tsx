import style from './App.module.css'
import Formulario from './Components/Form/Formulario'
import Temp from './Components/Temp/Temp'
import useWeather from './Hook/useWeather'

function App() {

  const { fetchWeather , weater } = useWeather()
  
  return (
    <>
      <h1 className={style.title}> Clima Real Time </h1>

      <div className={style.container}>
        <Formulario
          fetchWeather={fetchWeather}
        />

        {/* { error &&   } */}

        {  weater.name ? 

          <Temp 
            weather={weater}
          />
          
          :

          <h1> Busca tu Ciudad </h1>

        };

      </div>
    </>
  )
}

export default App
