import style from './App.module.css'
import Formulario from './Components/Form/Formulario'

function App() {

  return (
    <>
      <h1 className={style.title}> Clima Real Time </h1>

      <div className={style.container}>
        <Formulario/>
        <div> Clima </div>
      </div>
    </>
  )
}

export default App
