// import React from 'react';
import NavBar from '../components/header';
import Hero from '../components/Home/Hero';
import Cards from '../components/Home/Cards';
import Mission from '../components/Home/Mission';
import OurProject from '../components/Home/OurProject';
import Empowerment from '../components/Home/Empowerment';
import Cta from '../components/Home/Cta';
import Faq from '../components/Home/Faq';
import Footer from '../components/footer';




const Home = () => {
  return (
    <div className="relative font-urbanist">
      <NavBar />
      <Hero />
      <Cards />
      <Mission />
      <OurProject />
      <Empowerment />
      <Cta />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
