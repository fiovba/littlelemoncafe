import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialDishes from './components/SpecialDishes';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SpecialDishes />
      <About />
      <Menu />
      <BookingPage />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}