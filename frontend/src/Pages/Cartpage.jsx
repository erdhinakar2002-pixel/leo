import React from "react";
import { Container, Row, Col, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, addToCart, removeFromCart }) => {
  const cartItems = Object.values(cart);
const navigate = useNavigate();
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <Table responsive bordered hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <Image src={item.img} alt={item.name} fluid rounded />
                      </Col>
                      <Col xs={9} md={10}>
                        <span className="fw-semibold">{item.name}</span>
                      </Col>
                    </Row>
                  </td>
                  <td className="text-center">₹{item.price}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        −
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="text-center fw-bold">
                    ₹{item.price * item.quantity}
                  </td>
                  <td className="text-center">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <h4 className="fw-bold">Total: ₹{getTotalPrice()}</h4>
          </div>
          <div className="d-flex justify-content-end mt-3">
           
<Button
  variant="success"
  size="lg"
  onClick={() =>
    navigate("/checkout", {
      state: { cartItems, total: getTotalPrice() }
    })
  }
>
  Proceed to Checkout
</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
