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

  // Estas dos funciones son invocadas por botones en el DOM
  // La primera aumenta la variable visitantes, la segunda la decrementa.
  // Observar que utilizamos la función setVisitantes para alterar la variable, no lo hacemos de forma directa.
  // De esta manera React llevará un control de los cambios y actualizará el DOM según corresponda.
  const ingresar = () => {
    setVisitantes(visitantes + 1);
    // visitantes++;
    // console.log(visitantes);
  }

  const salir = () => {
    if (visitantes > 0) setVisitantes(visitantes - 1);
    // if (visitantes > 0) visitantes--;
    // console.log(visitantes);
  }

  return (
    <>
      <h1>Portada de noticias</h1>

      <h2>Visitantes online: {visitantes}</h2>

      {/*
      Importante!: no debemos invocar funciones en los eventos inline en React,
      solo pasar el nombre como referencia, por eso no utilizamos ()
    */}
      <button onClick={ingresar}>Ingresar</button>
      <button onClick={salir}>Salir</button>

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
