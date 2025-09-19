import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './layouts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Pricelist from './Pricelist';
import Giftbox from './Pages/Giftbox';
import Productcard from './Pages/Productcard';
import { useState } from 'react';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ThankYouPage from './Pages/ThankYouPage';

function App() {
  // Cart is an object mapping product id to product info including quantity
  const [cart, setCart] = useState({});

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const key = product.id || product.sNo; // support both id & sNo
      if (prevCart[key]) {
        return {
          ...prevCart,
          [key]: {
            ...prevCart[key],
            quantity: prevCart[key].quantity + 1,
          },
        };
      } else {
        return {
          ...prevCart,
          [key]: {
            ...product,
            price: product.price || parseInt(product.title?.replace('RS:', '')),
            quantity: 1,
          },
        };
      }
    });
  };

  // Remove a product from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => {
      if (!prevCart[productId]) return prevCart;
      if (prevCart[productId].quantity > 1) {
        return {
          ...prevCart,
          [productId]: {
            ...prevCart[productId],
            quantity: prevCart[productId].quantity - 1,
          },
        };
      } else {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
    });
  };

  // ✅ Calculate total count of items in cart
  const cartCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartCount={cartCount}   // pass count to Layout/Header
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartCount={cartCount}   // pass count to Home if needed
              />
            }
          />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route
            path="/price"
            element={
              <Pricelist
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartCount={cartCount}   // pass count to Price page too
              />
            }
          />
          <Route path="/giftbox" element={<Giftbox />} />
          <Route path="/product" element={<Productcard />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartCount={cartCount}
              />
            }
          />

          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='thank-you' element={<ThankYouPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
