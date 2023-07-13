/*
    Un ejemplo básico de componente, definido mediante la sintaxis function recomendada actualmente    
*/

import './Noticia.css'

// Como React coloca todos los atributos enviados al componente en un objeto (props), lo desestructuramos
// para obtener el atributo contenido, en el cual recibimos a su vez el objeto con todos los datos de la noticia
// Si no deseamos desestructurar, podemos utilizar directamente el acceso al objeto por notación de puntos.
// Ejemplo: si al parámetro de la función le damos el nombre props, el título de la noticia sería
// props.contenido.titulo
function Noticia({ contenido }) {
  return (
    <>
      <div style={{ border: '1px solid #333', borderRadius: '0.5em', padding: '0.5em', marginBottom: '0.5em' }}>
        <h3>{contenido.anticipo}</h3>
        <img src={contenido.foto} alt="Foto" style={{ width: '200px' }} />
        <h2 className="titulo">[{contenido.id}] {contenido.titulo} ({contenido.likes})</h2>
      </div>
    </>
  )
}

export default Noticia
