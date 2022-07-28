import './App.css'
import Autocompleta from './Autocompletar'
import ValidarE from './ValidarE'
import Formulario from './Formulario'
import ValidarP from './ValidarP'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ValidarE />
      <ValidarP />
      <Formulario />
      <Autocompleta />
    </>
  )
}

export default App
