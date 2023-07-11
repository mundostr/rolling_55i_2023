/**
 * Utilizar un componente en React es muy sencillo, basta con importarlo e invocarlo
 * mediante una sintaxis de markup en el JSX.
 * 
 * Vemos en este caso que el componente Mensaje es invocado 3 veces con distintos
 * valores para el argumento msj
 */


import Mensaje from './Mensaje.jsx'

import './App.css'

function App() {
  return (
    <>
    <div>
      <h1>Control Login</h1>
    </div>

    <div>
      <Mensaje msj='Primer mensaje del sistema' />
    </div>

    <div>
      <Mensaje msj='Este es el segundo mensaje del sistema' />
    </div>

    <div>
      <Mensaje msj='Este es el tercer mensaje del sistema' />
    </div>
    </>
  )
}

export default App
