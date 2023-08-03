import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { giftcards_data } from '../helpers/data.js'

const GiftCards = () => {
  const activeUser = JSON.parse(localStorage.getItem('cart_user')) || null

  const [giftCards, setGiftCards] = useState([])
  const [userCart, setUserCart] = useState(null)

  useEffect(() => {
    (async () => {
      setGiftCards(giftcards_data)
    })();

    return () => { }
  }, []); // Array vació, se ejecuta SOLO al montar

  const addCart = (card) => {
    setUserCart({ idUser: activeUser.id, product: card });
  };

  return (
    <>
      <Container className="col col-md-4 offset-md-4 mt-4 mb-4 p-4 bg-light container-blocks">
        <Row>
          <Col>
            <h1>GiftCards</h1>

            { activeUser &&
              <Button variant="warning">
                <i className="fa fa-shopping-cart fa-2x"></i>
                <span className="badge bg-secondary ms-2">{userCart ? userCart.length : '0'}</span>
              </Button>
            }
            <hr />
          </Col>
        </Row>
        
        <Row>
          { giftCards && giftCards.map(card => {
            return (
                <div key={card.id} className="card h-100 mb-3 p-3">
                  <img src={card.image} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h3 className="card-text text-end">${card.price}</h3>
                    <div className="d-grid gap-2">
                      {activeUser && ( <button className="btn btn-warning" onClick={() => {addCart(card);}}>Agregar</button> )}
                    </div>
                  </div>
                </div>
            )
            })
          }
        </Row>
      </Container>
    </>
  );
};

export default GiftCards;
