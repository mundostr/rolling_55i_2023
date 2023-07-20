// Importamos el hook useState() para manejar dinámicamente el campo cantidad
import { useState } from 'react';

// Desde react-bootstrap, importamos solo los componentes que necesitamos
import { Card, Form, Button } from 'react-bootstrap';

// Ver detalles de react-icons en https://react-icons.github.io/react-icons/
import { BsFillCartPlusFill } from "react-icons/bs";

function Producto({ datos, handleCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidad = (event) => {
    const cantidad = Number(event.target.value);
    if (cantidad > 0 && cantidad <= datos.stock) setCantidad(cantidad);
  }

  return (
    <>
      <Card className="mb-3" style={{width: '100%'}}>
        <Card.Body>
          <Card.Img variant="top" src={datos.imagen} style={{width: '200px', float: 'left', marginRight: '0.5em'}} />
          <Card.Title>{datos.nombre}</Card.Title>
          <Card.Text>
            <span>{datos.codigo}</span><br />
            <span><b>{`$ ${datos.precio.toFixed(2)}`}</b></span><br />
            <span>{datos.stock}</span> en stock
          </Card.Text>
          
          <Form.Control type="number" value={cantidad} onChange={handleCantidad} style={{float: 'left', width: '4em', marginRight: '0.5em'}} />
          
          <Button variant="success" onClick={() => handleCarrito(datos, cantidad)}>
            <BsFillCartPlusFill style={{marginRight: '0.5em'}} />
            Agregar
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Producto