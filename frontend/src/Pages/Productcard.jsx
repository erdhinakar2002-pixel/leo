import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const crackerData = [
  { id: 1, name: "Atom Bomb", price: 100, image: "/src/assets/bomb/1.5-twinkling-star.png" },
  { id: 2, name: "Flower Pots", price: 80, image: "/images/2.png" },
  { id: 3, name: "Sparklers", price: 50, image: "/images/3.png" },
  { id: 4, name: "Ground Chakra", price: 120, image: "/images/4.png" },
  { id: 5, name: "Rockets", price: 150, image: "/images/5.png" },
  { id: 6, name: "Bijili Crackers", price: 60, image: "/images/6.png" },
  { id: 7, name: "Deluxe Atom Bomb", price: 140, image: "/images/7.png" },
  { id: 8, name: "Colorful Sparklers", price: 70, image: "/images/8.png" },
  { id: 9, name: "7 Short Atom Bomb", price: 95, image: "/images/9.png" },
];

const crackerFilters = [
  "Atom Bomb",
  "7 Short",
  "Flower Pots",
  "Sparklers",
  "Ground Chakra",
  "Rockets",
  "Bijili Crackers",
];

const Productcard = () => {
  const { state } = useLocation(); // 👈 receives data from Home
  const [sortByPrice, setSortByPrice] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (state?.productName) {
      setSelectedFilters([state.productName]); // auto apply filter
    }
  }, [state]);

  const handleFilterChange = (type) => {
    setSelectedFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handlePriceSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  const filteredProducts = crackerData
    .filter((product) =>
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortByPrice === "lowToHigh") return a.price - b.price;
      if (sortByPrice === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <section className="product-section mt-4">
      <Container>
        <Row>
          {/* Sidebar Filters */}
          <Col lg={3}>
            <h5 className="mb-3">Sort by Price</h5>
            <Form>
              <Form.Check
                type="radio"
                name="priceSort"
                label="Low to High"
                value="lowToHigh"
                onChange={handlePriceSortChange}
                checked={sortByPrice === "lowToHigh"}
              />
              <Form.Check
                type="radio"
                name="priceSort"
                label="High to Low"
                value="highToLow"
                onChange={handlePriceSortChange}
                checked={sortByPrice === "highToLow"}
              />
            </Form>

            <hr className="my-4" />

            <h5 className="mb-3">Filter by Cracker Type</h5>
            {crackerFilters.map((type) => (
              <Form.Check
                key={type}
                type="checkbox"
                label={type}
                onChange={() => handleFilterChange(type)}
                checked={selectedFilters.includes(type)}
              />
            ))}
          </Col>

          {/* Product Grid */}
          <Col lg={9}>
            <Row className="gy-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col key={product.id} lg={4} md={6}>
                    <Card className="h-100">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          <strong>Price:</strong> ₹{product.price}
                        </Card.Text>
                        <Button variant="success" size="sm" className="cta-button">
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <p>No products match your filters.</p>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Productcard;
