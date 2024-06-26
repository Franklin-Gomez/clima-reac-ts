import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWeather from "./Hooks/useWeather"


function App() {
  
  const { fetchWeather , weather  } = useWeather()

  return (
    <>
      <h1 className={styles.title}> Desde App.tsx </h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        <WeatherDetails
          weather={weather}
        />
      </div>
    </>
  )
}

export default App
