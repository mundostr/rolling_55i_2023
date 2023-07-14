// Importamos el hook useState, para activar el refresco automático del DOM ante cambios
// en determinadas variables que configuremos
import { useState } from 'react';
import Noticia from './Noticia.jsx'

import './App.css'

function App() {
  // let visitantes = 0;
  // Ya no definimos la variables de manera habitual, sino mediante useState
  // useState retorna un array con 2 elementos: el primero es el valor monitoreado, y el segundo la función para cambiarlo
  // por eso utilizamos la sintaxis de desestructuración
  const [visitantes, setVisitantes] = useState(0);

  // Este es un simple array de noticias de prueba, para poder testear el uso de un componente Noticia
  const noticias = [
    { id: 1, titulo: 'La primer noticia', anticipo: 'El anticipo de la primer noticia', likes: 0, foto: 'https://wildcard.codestuff.io/dog/250/250?pepe=1' },
    { id: 2, titulo: 'La segunda noticia', anticipo: 'El anticipo de la segunda noticia', likes: 5, foto: 'https://wildcard.codestuff.io/dog/250/250?pepe=2' },
    { id: 3, titulo: 'La tercer noticia', anticipo: 'El anticipo de la tercer noticia', likes: 0, foto: 'https://wildcard.codestuff.io/dog/250/250?rnd=3' },
    { id: 4, titulo: 'La cuarta noticia', anticipo: 'El anticipo de la cuarta noticia', likes: 0, foto: 'https://wildcard.codestuff.io/dog/250/250?rndp=4' },
    { id: 5, titulo: 'La quinta noticia', anticipo: 'El anticipo de la quinta noticia', likes: 3, foto: 'https://wildcard.codestuff.io/dog/250/250?rnd=5' }
  ]

  // Observar que utilizamos el llamado a setVisitantes para alterar la variable, no lo hacemos de forma directa.
  // De esta manera React llevará un control de los cambios y actualizará el DOM según corresponda.
  // Pasar siempre un callback a la función de seteo, y dentro actualizar la variable
  const agregarVisitante = () => setVisitantes(current => current + 1)
  const quitarVisitante = () => setVisitantes(current => current > 0 ? current - 1 : current)

  return (
    <>
      <h1>Portada de noticias</h1>
      <h2>Visitantes online: {visitantes}</h2>

      {/*
      Para mejor práctica, invocaremos siempre la función pasándola mediante callback
    */}
      <button onClick={() => agregarVisitante()}>Ingresar</button>
      <button onClick={() => quitarVisitante()}>Salir</button>

      {
        /*
          Un simple map nos permite recorrer el array de noticias, invocando el
          componente Noticia para cada una, y pasándole el contenido que debe mostrar
          React colocará todos los atributos pasados al componente en un objeto de propiedades (props)
        */
        noticias.map(noticia => <Noticia key={noticia.id} contenido={noticia} />)
      }

      {/* <Noticia contenido={noticias[0]} />
    <Noticia contenido={noticias[1]} />
    <Noticia contenido={noticias[2]} /> */}
    </>
  )
}

export default App
