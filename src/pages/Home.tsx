// import React from 'react';
import NavBar from '../components/header';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Feature from '../components/Home/Feature';
import Service from '../components/Home/Service';
import Cta from '../components/Home/Cta';
import Faq from '../components/Home/Faq';
import Footer from '../components/footer';




const Home = () => {
  return (
    <div className="relative font-urbanist">
      <NavBar />
      <Hero />
      <About />
      <Feature />
      <Service />
      <Cta />
      <Faq />
      <Footer />
      
      
      
      
      
    </div>
  );
};

export default Home;
