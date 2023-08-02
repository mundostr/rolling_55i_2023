// De react-router-dom importamos 3 elementos
// BrowserRouter (con el alias de Router): objeto principal para el manejo de rutas
// Routes: objeto para la lista de rutas
// Route: objeto para la ruta individual

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu.jsx';
import Home from './Home.jsx';
import Pagina2 from './Pagina2.jsx';

import './App.css'

// Esta es una estructura básica de react-router-dom
// Podemos ver que el componente Menu se encuentra dentro del Router general,
// con ello tendremos opción de utilizar elementos de rutas como Navlink,
// y dentro de Routes creamos los Route necesarios para renderizar las distintas páginas
// Por supuesto podemos retornar otros elementos por fuera del bloque Router, que serán renderizados
// siempre, sin importar cuál sea el Route actual
function App() {
  return (
    <>
      <Router>
        <Menu />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina2" element={<Pagina2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
