import React from 'react';
import './ArtText.css';

// Importing image assets directly
import heroImage from '../assets/Hero_image_1.png';

const MerchHero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>RMC DROPS</p>
          </div>
          <h1 className='art_text prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Artist Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Replace direct path with imported image */}
      <img className='w-full sm:w-1/2' src={heroImage} alt="Hero" />
    </div>
  );
};

export default MerchHero;
