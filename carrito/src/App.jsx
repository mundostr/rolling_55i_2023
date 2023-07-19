// Importamos el hook useState() para manejar dinámicamente el campo cantidad
// y el hook useEffect() para poder recuperar automáticamente los productos con fetch al cargar el componente
import { useState, useEffect } from 'react';

// Importamos el componente hijo a utilizar
import Producto from './Producto.jsx';

// Desde react-bootstrap, importamos solo los componentes que necesitamos
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

// Ver detalles de react-icons en https://react-icons.github.io/react-icons/
import { BsFillCartPlusFill } from "react-icons/bs";

function App() {
  const URL_API = 'http://pad19.com:3050/productos';

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState({ productos: [], totalItems: 0, totalImporte: 0 });

  const handleCarrito = (producto, cantidad) => {
    const nuevoProducto = { producto: producto, cantidad: cantidad };
    setCarrito({
      productos: [
        ...carrito.productos,
        nuevoProducto
      ],
      totalItems: carrito.totalItems + cantidad,
      totalImporte: carrito.totalImporte + producto.precio * cantidad
    });
  }

  const handleCheckOut = () => {
    if (carrito.productos.length === 0) {
      alert('Nada en el carrito!');
    } else {
      console.log(carrito);
    }
  }

  useEffect(() => {
    const recuperarProductos = async () => {
      const resultado = await fetch(URL_API)
      const resultadoJson = await resultado.json();
      setProductos(resultadoJson);
    }

    recuperarProductos();

    return () => {}
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', top: '1em', right: '1em', zIndex: 1000 }}>
        <Button variant="success" onClick={handleCheckOut} style={{ float: 'right', fontSize: '150%' }}>
          <BsFillCartPlusFill style={{ fontSize: '150%', marginBottom: '0.25em' }} /><br/>
          <Badge bg="danger" style={{ marginRight: '0.5em' }}>{carrito.totalItems}</Badge>
          ${carrito.totalImporte}
        </Button>
      </div>

      <Container className="p-3">
        <Container className="p-3 mb-3 text-white bg-dark rounded-3">
          <h1>Rolling Compras</h1>
        </Container>

        <h3>ELECTRODOMESTICOS</h3>

        {
          productos.map(producto =>
            <Producto key={producto._id} datos={producto} handleCarrito={handleCarrito} />
          )
        }
      </Container>
    </>
  )
}

export default App
