import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWeather from "./Hooks/useWeather"
import Spinner from "./components/Spinner/Spinner"
import Alert from "./components/Alert/Alert"


function App() {
  
  const { weather , loading , notfound , hasWeatherData , fetchWeather  } = useWeather()

  return (
    <>
      <h1 className={styles.title}> Desde App.tsx </h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        { loading && <Spinner/>}
        
        { hasWeatherData && 
          <WeatherDetails
            weather={weather}
          /> 
        }

        { notfound && <Alert> Ciudad No Encontrada</Alert>}

      </div>
    </>
  )
}

export default App
