// import React from 'react'
// import {assets} from '../assets/assets';
// import {NavLink} from 'react-router-dom';
// const Merch = () => {
//   return (
//     <div className='flex items-center gap-6'>
//       <img className='w-5 cursor-pointer' src={assets.search_icon} alt='search'/>

//       <div className='group relative'>
//         <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='search'/>
//         <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//             <div className='flex-flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                 <p className='cursor-pointer hover:text-black'>My profile</p>
//                 <p className='cursor-pointer hover:text-black'>Orders</p>
//                 <p className='cursor-pointer hover:text-black'>Log out</p>
//             </div>
//         </div>
//       </div>
//       <Link typeof='/' className='relative'>
//       <img src={assets.cart_icon} className='w-5 min-w-5' alt=""/>
//       <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
//       </Link>
//     </div>
//   )
// }

// export default Merch
import React,{useContext} from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import LatestCollection from './LatestCollection';
import MerchHero from './MerchHero';
import OurCollection from './OurCollection';


const Merch = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>

   
    <MerchHero/>
    <OurCollection/>
    </div>
    </>
  );
}

export default Merch;
