import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Short description or mission statement.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@example.com<br />Phone: +123 456 7890</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Your Company</p>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
