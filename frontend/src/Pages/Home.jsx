import Card from 'react-bootstrap/Card';
import Maqrquee from './Marquee'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaUsers, FaBoxOpen, FaStar, FaTruck } from 'react-icons/fa';
import React, { useState } from 'react';
import { Carousel, Card as BootstrapCard } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const Home = ({ cart, addToCart, removeFromCart }) => {



  const data = [
    { icon: <FaUsers size={40} />, title: '3K+', subtitle: 'Customers' },
    { icon: <FaBoxOpen size={40} />, title: '400+', subtitle: 'Products' },
    { icon: <FaStar size={40} />, title: '10+', subtitle: 'Brands' },
    { icon: <FaTruck size={40} />, title: 'Home', subtitle: 'Delivery' },
  ];

 

const Cracker = [
  { id: 1, img: 'src/assets/1.jpg', name: 'Atom Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 2, img: 'src/assets/2.jpg', name: 'Flower Pots', title: 'RS:50', text: 'RS:120' },
  { id: 3, img: 'src/assets/3.jpg', name: 'Sparklers', title: 'RS:50', text: 'RS:120' },
  { id: 4, img: 'src/assets/4.jpg', name: 'Ground Chakra', title: 'RS:50', text: 'RS:120' },
  { id: 5, img: 'src/assets/5.jpg', name: 'Rockets', title: 'RS:50', text: 'RS:120' },
  { id: 6, img: 'src/assets/1.jpg', name: 'Bijili Crackers', title: 'RS:50', text: 'RS:120' },
  { id: 7, img: 'src/assets/2.jpg', name: 'Deluxe Atom Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 8, img: 'src/assets/3.jpg', name: 'Colorful Sparklers', title: 'RS:50', text: 'RS:120' },
  { id: 9, img: 'src/assets/1.jpg', name: '7 Shots', title: 'RS:50', text: 'RS:120' },
  { id: 10, img: 'src/assets/1.jpg', name: 'Twinkling Star', title: 'RS:50', text: 'RS:120' },
];

const Cracker2 = [
  { id: 11, img: 'src/assets/1.jpg', name: 'Lakshmi Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 12, img: 'src/assets/2.jpg', name: 'Hydrogen Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 13, img: 'src/assets/3.jpg', name: 'Bullet Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 14, img: 'src/assets/4.jpg', name: 'Thunder Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 15, img: 'src/assets/5.jpg', name: 'Classic Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 16, img: 'src/assets/1.jpg', name: 'Garland Crackers', title: 'RS:50', text: 'RS:120' },
  { id: 17, img: 'src/assets/2.jpg', name: 'Big Chakkar', title: 'RS:50', text: 'RS:120' },
  { id: 18, img: 'src/assets/3.jpg', name: 'Small Chakkar', title: 'RS:50', text: 'RS:120' },
  { id: 19, img: 'src/assets/1.jpg', name: 'Single Shot', title: 'RS:50', text: 'RS:120' },
  { id: 20, img: 'src/assets/1.jpg', name: 'Sky Shot', title: 'RS:50', text: 'RS:120' },
];

const Cracker3 = [
  { id: 21, img: 'src/assets/1.jpg', name: 'Deluxe Garland', title: 'RS:50', text: 'RS:120' },
  { id: 22, img: 'src/assets/2.jpg', name: 'Hydro Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 23, img: 'src/assets/3.jpg', name: 'Color Matches', title: 'RS:50', text: 'RS:120' },
  { id: 24, img: 'src/assets/4.jpg', name: 'Deluxe Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 25, img: 'src/assets/5.jpg', name: 'Super Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 26, img: 'src/assets/1.jpg', name: 'Color Fountain', title: 'RS:50', text: 'RS:120' },
  { id: 27, img: 'src/assets/2.jpg', name: 'Magic Shots', title: 'RS:50', text: 'RS:120' },
  { id: 28, img: 'src/assets/3.jpg', name: 'Deluxe Bijili', title: 'RS:50', text: 'RS:120' },
  { id: 29, img: 'src/assets/1.jpg', name: 'Rocket Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 30, img: 'src/assets/1.jpg', name: 'Festival Crackers Pack', title: 'RS:50', text: 'RS:120' },
];

const Cracker4 = [
  { id: 31, img: 'src/assets/1.jpg', name: 'Fancy Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 32, img: 'src/assets/2.jpg', name: 'Deluxe Sky Shot', title: 'RS:50', text: 'RS:120' },
  { id: 33, img: 'src/assets/3.jpg', name: 'Kids Pop Pops', title: 'RS:50', text: 'RS:120' },
  { id: 34, img: 'src/assets/4.jpg', name: 'Electric Crackers', title: 'RS:50', text: 'RS:120' },
  { id: 35, img: 'src/assets/5.jpg', name: 'Peacock Fountain', title: 'RS:50', text: 'RS:120' },
  { id: 36, img: 'src/assets/1.jpg', name: 'Classic Garland', title: 'RS:50', text: 'RS:120' },
  { id: 37, img: 'src/assets/2.jpg', name: 'Deluxe Thunder Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 38, img: 'src/assets/3.jpg', name: 'Red Sparklers', title: 'RS:50', text: 'RS:120' },
  { id: 39, img: 'src/assets/1.jpg', name: 'Blue Sparklers', title: 'RS:50', text: 'RS:120' },
  { id: 40, img: 'src/assets/1.jpg', name: 'Green Sparklers', title: 'RS:50', text: 'RS:120' },
];

const Cracker5 = [
  { id: 41, img: 'src/assets/1.jpg', name: 'Mega Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 42, img: 'src/assets/2.jpg', name: 'Double Shots', title: 'RS:50', text: 'RS:120' },
  { id: 43, img: 'src/assets/3.jpg', name: 'Triple Shots', title: 'RS:50', text: 'RS:120' },
  { id: 44, img: 'src/assets/4.jpg', name: 'Whistling Rocket', title: 'RS:50', text: 'RS:120' },
  { id: 45, img: 'src/assets/5.jpg', name: 'Ground Flower', title: 'RS:50', text: 'RS:120' },
  { id: 46, img: 'src/assets/1.jpg', name: 'Disco Crackers', title: 'RS:50', text: 'RS:120' },
  { id: 47, img: 'src/assets/2.jpg', name: 'Color Bomb', title: 'RS:50', text: 'RS:120' },
  { id: 48, img: 'src/assets/3.jpg', name: 'Ganga Jamuna Fountain', title: 'RS:50', text: 'RS:120' },
  { id: 49, img: 'src/assets/1.jpg', name: 'Deluxe Peacock', title: 'RS:50', text: 'RS:120' },
  { id: 50, img: 'src/assets/1.jpg', name: 'Grand Finale Pack', title: 'RS:50', text: 'RS:120' },
];


  return (
    <div>
      <Maqrquee />

      <section className='main'>
        <div className='banner-section'>
          <Container className='py-5'><Row className='py-5 my-5'>
            <Col md={6} className="">
              <div className='banner'>
                <h1>LEO CRACKERS</h1>
                <h3>SPARK. SHINE. SMILE</h3>
                <p className='text-center'>Premier provider of Sivakasi's finest fireworks at unbeatable prices, sourced directly from reputable manufacturers. Enjoy factory prices with guaranteed quality.</p>
              </div></Col>
            <Col md={6} className="">
              <Row className='py-5 my-5'>
                {data.map((item, index) => (
                  <Col md={6} className="mb-4" key={index}>
                    <Card className="text-center text-white bg-none custom-card h-100">
                      <Card.Body>
                        <div className="mb-3">{item.icon}</div>
                        <Card.Title className="fw-bold fs-3">{item.title}</Card.Title>
                        <Card.Text>{item.subtitle}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          </Container></div>
      </section>





      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker2.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker3.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker4.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker5.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker5.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width="100%" className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  {cart[t.id] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(t.id)}
                      >
                        −
                      </button>
                      <span className="mx-3">{cart[t.id].quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(t)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(t)}>
                      Add to Cart
                    </button>
                  )}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

    </div>
  )
}

export default Home
