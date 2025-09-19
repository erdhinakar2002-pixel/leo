import React from "react";
import { Container, Card } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";


const ThankYouPage = () => {
  const location = useLocation();
  const { width, height } = useWindowSize();
  const { name, cartItems, total } = location.state || { name: "", cartItems: [], total: 0 };

  return (
    <Container className="text-center py-5">
      {/* 🎆 Firecracker Confetti Effect */}
      <Confetti width={width} height={height} />

      <Card className="p-5 shadow-lg rounded-4">
        <h1 className="fw-bold text-success">🎉 Thank You, {name}!</h1>
        <p className="mt-3 fs-5">Your order has been placed successfully.</p>

        <h4 className="mt-4">🛍️ Order Summary</h4>
        <ul className="list-unstyled">
          {cartItems.map((item, idx) => (
            <li key={idx}>
              {item.name} (x{item.quantity}) - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <h3 className="fw-bold mt-3">Total: ₹{total}</h3>

       <div className=''>
         <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
       </div>
      </Card>
    </Container>
  );
};

export default ThankYouPage;
