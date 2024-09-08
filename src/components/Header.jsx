
// import React, { useContext, useState } from "react";
// import './Header.css';
// import logo from '../assets/ellipse-279.svg';
// import { NavLink, useLocation } from "react-router-dom";
// import { assets } from '../assets/assets';
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation(); // Get the current route
//   const {setShowSearch} = useContext(ShopContext);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenu = () => {
//     setShowMenu(false);
//   };

//   return (
//     <>
//       <header className="header">
//         {/* <div className="logo-bar">
//           <img src={logo} alt="Logo" className="logo-icon" />
//           <span className="logo-text">RMC</span>
//         </div> */}
//         <div className={`logo-bar ${location.pathname === '/merch'  ? 'hide-logo' : ''}`}>
//           <img src={logo} alt="Logo" className="logo-icon" />
//           <span className="logo-text">RMC</span>
//         </div>
//         <nav className="nav">
//           <ul>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/distribute">Distribute</NavLink></li>
//             <li><NavLink to="/merch">Merch</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//             <li><NavLink to="/account">Account</NavLink></li>
//           </ul>
//         </nav>

//         {location.pathname !== '/merch' && (
//           <div className="auth">
//             <button className="login">Log in</button>
//             <button className="signup">Sign up</button>
//           </div>
//         )}

//         {location.pathname === '/merch' && (
//           <div className='flex items-center gap-[1.5rem] md:gap-[3.5rem] justify-end'>
//             <img className='w-5 cursor-pointer ' onClick={()=> setShowSearch(true)} src={assets.search_icon} alt='search' />

//             <div className='group relative'>
//               <img className='w-5 cursor-pointer min-w-5' src={assets.profile_icon} alt='profile' />
//               <div className='group-hover:block hidden absolute right-0 pt-4'>
//                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
//                   <p className='cursor-pointer hover:text-black '>My profile</p>
//                   <p className='cursor-pointer hover:text-black'>Orders</p>
//                   <p className='cursor-pointer hover:text-black'>Log out</p>
//                 </div>
//               </div>
//             </div>

//             <NavLink to='/' className='relative'>
//               <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
//               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
//             </NavLink>
//           </div>
//         )}
        

//         <button className="hamburger" onClick={toggleMenu}>
//           &#9776;
//         </button>
//       </header>

//       {/* Sidebar for mobile view */}
//       <div className={`sidebar ${showMenu ? "show" : ""}`}>
//         <button className="close-sidebar" onClick={closeMenu}>
//           &times;
//         </button>
//         <div className="sidebar-content">
//           <ul>
//             <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
//             <li><NavLink to="/distribute" onClick={closeMenu}>Distribute</NavLink></li>
//             <li><NavLink to="/merch" onClick={closeMenu}>Merch</NavLink></li>
//             <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
//             <li><NavLink to="/account" onClick={closeMenu}>Account</NavLink></li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay for closing sidebar */}
//       {showMenu && <div className="overlay" onClick={closeMenu}></div>}
//     </>
//   );
// }

// export default Header;


// import React, { useContext, useState } from "react";
// import './Header.css';
// import logo from '../assets/ellipse-279.svg';
// import { NavLink, useLocation } from "react-router-dom";
// import { assets } from '../assets/assets';
// import { ShopContext } from "../context/ShopContext";


// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation(); // Get the current route
//   const { setShowSearch , getCartCount} = useContext(ShopContext);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenu = () => {
//     setShowMenu(false);
//   };

//   // Apply 'black-header' class for the contact page
//   const isContactPage = location.pathname === '/contact';

//   return (
//     <>
//       <header className={`header ${isContactPage ? 'black-header' : ''}`}>
//         <div className={`logo-bar ${location.pathname === '/merch' ? 'hide-logo' : ''}`}>
//           <img src={logo} alt="Logo" className="logo-icon" />
//           <span className="logo-text">RMC</span>
//         </div>
//         <nav className="nav">
//           <ul>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/distribute">Distribute</NavLink></li>
//             <li><NavLink to="/merch">Merch</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//             <li><NavLink to="/account">Account</NavLink></li>
//           </ul>
//         </nav>

//         {location.pathname !== '/merch'  && (
//           <div className="auth">
//             <button className="login">Log in</button>
//             <button className="signup">Sign up</button>
//           </div>
//         )}

//         {location.pathname === '/merch'  &&(
//           <div className='flex items-center gap-[1.5rem] md:gap-[3.5rem] justify-end'>
//             <img className='w-5 cursor-pointer ' onClick={() => setShowSearch(true)} src={assets.search_icon} alt='search' />

//             <div className='group relative'>
//               <img className='w-5 cursor-pointer min-w-5' src={assets.profile_icon} alt='profile' />
//               <div className='group-hover:block hidden absolute right-0 pt-4'>
//                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
//                   <p className='cursor-pointer hover:text-black '>My profile</p>
//                   <p className='cursor-pointer hover:text-black'>Orders</p>
//                   <p className='cursor-pointer hover:text-black'>Log out</p>
//                 </div>
//               </div>
//             </div>

//             <NavLink to='/' className='relative'>
//               <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
//               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </NavLink>
//           </div>
//         )}

//         <button className="hamburger" onClick={toggleMenu}>
//           &#9776;
//         </button>
//       </header>

//       {/* Sidebar for mobile view */}
//       <div className={`sidebar ${showMenu ? "show" : ""}`}>
//         <button className="close-sidebar" onClick={closeMenu}>
//           &times;
//         </button>
//         <div className="sidebar-content">
//           <ul>
//             <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
//             <li><NavLink to="/distribute" onClick={closeMenu}>Distribute</NavLink></li>
//             <li><NavLink to="/merch" onClick={closeMenu}>Merch</NavLink></li>
//             <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
//             <li><NavLink to="/account" onClick={closeMenu}>Account</NavLink></li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay for closing sidebar */}
//       {showMenu && <div className="overlay" onClick={closeMenu}></div>}
//     </>
//   );
// }

// export default Header;

import React, { useContext, useState } from "react";
import './Header.css';
import logo from '../assets/ellipse-279.svg';
import { NavLink, useLocation, useParams } from "react-router-dom";
import { assets } from '../assets/assets';
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get the current route
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const { productId } = useParams(); // To get the product ID from the URL if on a product page

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Apply 'black-header' class for the contact page
  const isContactPage = location.pathname === '/contact';
  const isCartPage = location.pathname === '/cart';
  const isProductPage = location.pathname.startsWith('/product');

  return (
    <>
      <header className={`header ${isContactPage  ? 'black-header' : ''}`}>
        <div className={`logo-bar ${location.pathname === '/merch' ? 'hide-logo' : ''}`}>
          <img src={logo} alt="Logo" className="logo-icon" />
          <span className="logo-text">
            {/* <img className="w-20" src="src\assets\RMC_logo.png" alt="" /> */}
            RMC
          </span>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/distribute">Distribute</NavLink></li>
            <li><NavLink to="/merch">Merch</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/account">Account</NavLink></li>
          </ul>
        </nav>

        {location.pathname !== '/merch' && !isProductPage && !isCartPage && (
          <div className="auth">
            <button className="login">Log in</button>
            <button className="signup">Sign up</button>
          </div>
        )}

        {(location.pathname === '/merch' || isProductPage || isCartPage) && (
          <div className='flex items-center gap-[1.5rem] md:gap-[3.5rem] justify-end'>
            <img className='w-5 cursor-pointer' onClick={() => setShowSearch(true)} src={assets.search_icon} alt='search' />

            <div className='group relative'>
              <img className='w-5 cursor-pointer min-w-5' src={assets.profile_icon} alt='profile' />
              <div className='group-hover:block hidden absolute right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black'>My profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Log out</p>
                </div>
              </div>
            </div>

            <NavLink to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </NavLink>
          </div>
        )}

        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${showMenu ? "show" : ""}`}>
        <button className="close-sidebar" onClick={closeMenu}>
          &times;
        </button>
        <div className="sidebar-content">
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/distribute" onClick={closeMenu}>Distribute</NavLink></li>
            <li><NavLink to="/merch" onClick={closeMenu}>Merch</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            <li><NavLink to="/account" onClick={closeMenu}>Account</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Overlay for closing sidebar */}
      {showMenu && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
