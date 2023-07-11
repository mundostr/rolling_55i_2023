/**
 * Generamos un nuevo componente utilizando la sintaxis function recomendada actualmente en React.
 * Podemos agregar el objeto props como argumento, contendrá todos los parámetros enviados al componente
 * desde el lugar donde se realiza la llamada. También podemos desestructurar como se ve en este caso.
 */

function Mensaje({ msj }) {
  return (
    <>
    <h2>{msj}</h2>
    </>
  )
}

export default Mensaje
