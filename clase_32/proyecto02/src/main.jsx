import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Como lo indica su nombre, ReactDOM se encarga de gestionar la salida hacia el DOM
 * Podemos ver como se crea un elemento base utilizando el root definido en el index,
 * para renderizar todo allí.
 * 
 * React utiliza el concepto de componentes, App por ejemplo es nuestra aplicación
 * propiamente dicha, un pequeño y único componente en este caso, que por supuesto
 * podría contener otros.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
