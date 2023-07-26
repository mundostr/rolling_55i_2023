import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from "react-icons/bs";

function ProductoCarrito({ datos }) {
  const producto = datos.producto;
  const [cantidad, setCantidad] = useState(datos.cantidad);

  const handleCantidad = (event) => {
    const cantidad = Number(event.target.value);
    if (cantidad > 0 && cantidad <= producto.stock) setCantidad(cantidad);
  }

  return (
    <>
      <Card className="mb-3" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Img variant="top" src={producto.imagen} style={{ width: '64px', float: 'left', marginRight: '0.5em' }} />
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <span>{producto.codigo}</span> (<span><b>{`$ ${(producto.precio * datos.cantidad).toFixed(2)}`}</b></span>)
          </Card.Text>

          <Form.Control type="number" value={cantidad} onChange={handleCantidad} style={{ float: 'left', width: '4em', marginRight: '0.5em' }} />

          <Button variant="success" onClick={() => { }}><BsFillCartPlusFill style={{ marginRight: '0.5em' }} />Cambiar</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductoCarrito