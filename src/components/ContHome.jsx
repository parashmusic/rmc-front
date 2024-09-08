import React from 'react'
import {assets} from '../assets/assets';
import './ContHome.css';
const MerchHero = () => {
  return (
    <>
    {/*-------------------- HOW TO START--------------- */}
    <div  className='flex flex-col sm:flex-row  border-gray-400 '>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center  py-10 sm:py-0'>
            <div className='text-[#414141]   max-w-lg text-center sm:text-left'>
                <div className='flex items-center gap-2'>
                
                </div>
                <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]  '>GETTING STARTED AS NEW USER</h1>
                <div className='flex  items-center gap-2'>
                    <p className='font-medium text-sm max-w-[500px] md:text-base '>Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.</p>
                    {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                </div>
                <button  className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
            </div>
            
        </div>
        
        
        <img className='hero-image w-full p-12 relative top-[-100px] sm:top-0 sm:w-1/2' src='src\assets\head1.png' alt="" />
    </div>

         {/*-------------------- DISTRIBUTE--------------- */}
    <div  className='flex flex-col sm:flex-row  border-gray-400 '>
    <img className='hero-image w-full p-12 relative top-[-100px] order-last sm:order-first sm:top-0  sm:w-1/2' src='src\assets\head2.png' alt="" />

        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center  py-10 sm:py-0'>
            <div className='text-[#414141]  max-w-lg text-center sm:text-left '>
                <div className='flex items-center gap-2'>
                
                </div>
                <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem] '>Get your music everywhere.</h1>
                <div className='flex  items-center gap-2'>
                    <p className='font-medium text-sm max-w-[500px] md:text-base '>We'll get your music into Spotify, Apple Music, TikTok, Pandora, Amazon, Instagram, YouTube, Tidal, iHeartRadio, Deezer, plus a ton of other stores & streaming services.provide the insights and transparency you need to take control of your music career.</p>
                    {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                </div>
                <button  className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
            </div>
            
        </div>
        
        
    </div>

             {/*--------------------MERCHADISE--------------- */}
    <div  className='flex flex-col sm:flex-row  border-gray-400 '>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center  py-10 sm:py-0'>
            <div className='text-[#414141]  max-w-lg text-center sm:text-left '>
                <div className='flex items-center gap-2'>
                
                </div>
                <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem] '>MERCHADISE</h1>
                <div className='flex  items-center gap-2'>
                    <p className='font-medium text-sm max-w-[500px] md:text-base '>Discover unique, artist-exclusive merchandise that lets you connect with your favorite creators in a whole new way. From limited-edition apparel to one-of-a-kind collectibles, our merch is designed to reflect the creativity and passion of the artists we support.</p>
                    {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                </div>
                <button  className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>LEARN MORE</button>
            </div>
            
        </div>
        
        
        <img className='hero-image w-full p-12 relative top-[-100px] sm:top-0  sm:w-1/2' src='src\assets\merch_t.png' alt="" />
    </div>
   


    {/*-------------------- ABOUT (Image below text for mobile) --------------- */}
    <div className='flex flex-col sm:flex-row border-gray-400'>
                <img className='hero-image w-full p-16 relative top-[-100px] sm:top-0 order-last sm:order-first sm:w-1/2 rounded-[50%] scale-75' src='src/assets/about.png' alt="About Us Image" />

        {/* Text content */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141] max-w-lg text-center sm:text-left'>
            <h1 className='font-bold text-3xl sm:py-3 leading-tight mb-[20px] lg:text-[2rem]'>
              ABOUT US
            </h1>
            <p className='font-medium text-sm max-w-[500px] md:text-base'>
              Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world.
            </p>
            <button className='bg-black text-white my-9 px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Image content, moves below text for small screens */}
      </div>
    </>
  )
}

export default MerchHero