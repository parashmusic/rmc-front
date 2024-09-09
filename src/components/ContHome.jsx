import React from 'react';
import { useLocation } from 'react-router-dom';
import './ContHome.css';

// Importing assets directly
import head1 from '../assets/head1.png';
import head2 from '../assets/head2.png';
import merch from '../assets/merch_t.png';
import about from '../assets/about.png';

const MerchHero = () => {
  const location = useLocation();

  return (
    <>
      {/*-------------------- HOW TO START--------------- */}
      <div className='flex flex-col sm:flex-row  border-gray-400 '>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center  py-10 sm:py-0'>
          <div className='text-[#414141] max-w-lg text-center sm:text-left'>
            <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]'>
              GETTING STARTED AS NEW USER
            </h1>
            <p className='font-medium text-sm max-w-[500px] md:text-base'>
              Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.
            </p>
            <button className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
          </div>
        </div>
        <img className='hero-image w-full p-12 relative top-[-100px] sm:top-0 sm:w-1/2' src={head1} alt="Hero 1" />
      </div>

      {/*-------------------- DISTRIBUTE--------------- */}
      <div className='flex flex-col sm:flex-row  border-gray-400 '>
        <img className='hero-image w-full p-12 relative top-[-100px] order-last sm:order-first sm:top-0 sm:w-1/2' src={head2} alt="Hero 2" />
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141] max-w-lg text-center sm:text-left'>
            <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]'>Get your music everywhere.</h1>
            <p className='font-medium text-sm max-w-[500px] md:text-base'>
              We'll get your music into Spotify, Apple Music, TikTok, Pandora, Amazon, Instagram, YouTube, Tidal, iHeartRadio, Deezer, plus a ton of other stores & streaming services.
            </p>
            <button className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
          </div>
        </div>
      </div>

      {/*-------------------- MERCHANDISE--------------- */}
      <div className='flex flex-col sm:flex-row  border-gray-400 '>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141] max-w-lg text-center sm:text-left'>
            <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]'>MERCHANDISE</h1>
            <p className='font-medium text-sm max-w-[500px] md:text-base'>
              Discover unique, artist-exclusive merchandise that lets you connect with your favorite creators in a whole new way.
            </p>
            <button className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
          </div>
        </div>
        <img className='hero-image w-full p-12 relative top-[-100px] sm:top-0 sm:w-1/2' src={merch} alt="Merchandise" />
      </div>

      {/*-------------------- ABOUT --------------- */}
      <div className='flex flex-col sm:flex-row border-gray-400'>
        <img className='hero-image w-full p-16 relative top-[-100px] sm:top-0 order-last sm:order-first sm:w-1/2 rounded-[50%] scale-75' src={about} alt="About Us" />
        {/* Text content */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141] max-w-lg text-center sm:text-left'>
            <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]'>ABOUT US</h1>
            <p className='font-medium text-sm max-w-[500px] md:text-base'>
              Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world.
            </p>
            <button className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchHero;
