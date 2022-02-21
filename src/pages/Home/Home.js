import React from 'react';
import './Home.scss';
import HomeCenter from '../../components/HomeCenter/HomeCenter';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
  return(
    <div className="home-page">
      <HomeCenter/>
      <Footer/>
    </div>
  );
}

export default Home;