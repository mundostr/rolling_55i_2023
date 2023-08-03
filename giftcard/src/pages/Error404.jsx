import { Container, Row, Col } from 'react-bootstrap'
import error404 from '../img/error.gif'

const Error404 = () => {
  return (
    <>
      <Container className="container-fluid container-home">
        <Row>
          <Col className="col-md-8 col-home">
            <Row>
              <h1>Epa!: error 404</h1>
              <h3>No se encuentra el contenido solicitado</h3>
            </Row>
          </Col>
          
          <Col className="col-md-4 col-home">
            <img id="error404" src={error404} alt="Error 404" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error404;
