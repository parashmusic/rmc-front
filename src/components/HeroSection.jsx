import React from 'react';
import './HeroSection.css';
import againstFontWoff2 from '../assets/fonts/against-Regular.woff2';
import againstFontWoff from '../assets/fonts/against-Regular.woff';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <style jsx global>{`
        @font-face {
          font-family: 'against';
          src: url(${againstFontWoff2}) format('woff2'),
               url(${againstFontWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        

        .hero-section {
          font-family: 'against', sans-serif;
        }
      `}</style>
      <div className="text-wrapper-6">Amplifying Authentic Sounds</div>
      <div className="frame">
        <div className="text-wrapper-7">Regional Music Centre</div>
        <p className="p">Amplifying the Authentic Sound of Regional Heritage, Connecting Cultures Worldwide.</p>
        <div className="button-start">
          <div className="text-wrapper-8">Explore</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
