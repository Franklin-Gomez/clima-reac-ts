import style from './App.module.css'
import Formulario from './Components/Form/Formulario'
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
        
      </div>
    </>
  )
}

export default App
