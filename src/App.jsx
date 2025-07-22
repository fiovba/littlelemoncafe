import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialDishes from './components/SpecialDishes';
import About from './components/About';
import Menu from './components/Menu';
import BookingForm from './components/Reservation';
import Testimonials from './components/Testimonials';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SpecialDishes />
      <About />
      <Menu />
      <BookingForm />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
