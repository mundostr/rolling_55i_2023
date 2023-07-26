import { useState, useEffect } from 'react';
import { Button, Container, Badge, Form } from 'react-bootstrap';
import { BsFillCartCheckFill } from "react-icons/bs"; // https://react-icons.github.io/react-icons/
import Producto from './Producto.jsx';

import './App.css'

function App() {
  const URL_API = 'http://pad19.com:3050/productos';

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState({ productos: [], totalItems: 0, totalImporte: 0 });
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);

  const handleCarrito = (producto, cantidad) => {
    const nuevoProducto = { producto: producto, cantidad: cantidad };
    setCarrito({
      productos: [ ...carrito.productos, nuevoProducto ],
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

  const handleEmail = (event) => {
    const email = event.target.value;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    setEmail(email);
    setEmailValido(emailRegex.test(email));
  }

  useEffect(() => {
    const recuperarProductos = async () => {
      const resultado = await fetch(URL_API)
      const resultadoJson = await resultado.json();
      setProductos(resultadoJson);
    }

    recuperarProductos();

    return () => { }
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', top: '1em', right: '1em', zIndex: 1000 }}>
        <Button variant="success" onClick={handleCheckOut} style={{ float: 'right', fontSize: '150%' }}>
          <BsFillCartCheckFill style={{ fontSize: '150%', marginBottom: '0.25em' }} /><br />
          <Badge bg="danger" style={{ marginRight: '0.5em' }}>{carrito.totalItems}</Badge>
          ${carrito.totalImporte}
        </Button>
      </div>

      <Container className="p-3">
        <Container className="p-3 mb-3 text-white bg-dark rounded-3">
          <img src="/rc_blanco_isotipo.png" style={{ width: '120px' }} />
          <h1>Rolling Compras</h1>
        </Container>

        <p>
          <Form.Control style={{border: emailValido ? '2px solid green': '2px solid red'}} type="text" value={email} onChange={() => { handleEmail(event) }} />
        </p>

        <h3>ELECTRODOMESTICOS</h3>

        {
          productos.map(producto => <Producto key={producto._id} datos={producto} handleCarrito={handleCarrito} /> )
        }
      </Container>
    </>
  )
}

export default App
