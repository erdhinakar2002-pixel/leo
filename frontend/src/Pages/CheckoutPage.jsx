import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, total } = location.state || { cartItems: [], total: 0 };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    district: "",
  });

  const [errors, setErrors] = useState({});

  // Check if cart is empty and redirect if necessary
  useEffect(() => {
    if (!cartItems || cartItems.length === 0 || total <= 0) {
      alert("❌ Your cart is empty! Please add items to your cart first.");
      navigate("/cart"); // Redirect to cart page
      return;
    }
  }, [cartItems, total, navigate]);

  // If cart is empty, don't render the form
  if (!cartItems || cartItems.length === 0 || total <= 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="warning">
          <h4>🛒 Cart is Empty</h4>
          <p>You need to add items to your cart before checkout.</p>
          <Button variant="primary" onClick={() => navigate("/cart")}>
            Go to Cart
          </Button>
        </Alert>
      </Container>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim() || !/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name (only letters, min 2 chars).";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.district.trim() || formData.district.length < 2) {
      newErrors.district = "District must have at least 2 characters.";
    }

    if (!formData.address.trim() || formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Double-check cart items before submitting
    if (!cartItems || cartItems.length === 0 || total <= 0) {
      alert("❌ Your cart is empty! Please add items to your cart first.");
      navigate("/cart");
      return;
    }

    try {
      console.log("📦 Sending order data:", { ...formData, items: cartItems, total });
      
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, items: cartItems, total }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Navigate to thank-you page and pass order details
        navigate("/thank-you", { state: { name: formData.name, cartItems, total } });
      } else {
        // Show specific error message from API
        alert(`❌ ${data.message || "Failed to place order. Try again."}`);
        if (data.received) {
          console.log("API received fields:", data.received);
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("❌ Network error. Please check if the server is running and try again.");
    }
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Checkout</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                isInvalid={!!errors.mobile}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                isInvalid={!!errors.district}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mt-4">🛍️ Your Order</h5>
        
        {/* Debug info - remove this in production */}
        <div className="mb-3 p-3 bg-light border rounded">
          <small className="text-muted">
            <strong>Debug Info:</strong> Cart Items: {cartItems.length}, Total: ₹{total}
          </small>
        </div>
        
        {cartItems.length > 0 ? (
          <ul className="list-unstyled">
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2 p-2 bg-light border rounded">
                <strong>{item.name}</strong> (x{item.quantity}) - ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <Alert variant="danger">
            ❌ No items in cart! Please add items to your cart first.
          </Alert>
        )}

        <h4 className="fw-bold mt-3">Total: ₹{total}</h4>

        <Button variant="primary" type="submit" className="mt-4">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
