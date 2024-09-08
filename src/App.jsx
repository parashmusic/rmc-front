import React from 'react'
import Header from './components/Header'; //this is navbar
import Footer from './components/Footer';
import "./index.css";
// import "./stylesheet.css";
import Home from './Pages/Home';
import Distribute from './Pages/Distribute';
import {Routes,Route, useLocation} from 'react-router-dom';
import Merch from './components/Merch';
import Account from './components/Account';
import Contact from './components/Contact';
import Serachbar from './components/Serachbar';
import Product from './Pages/Product';
import Login from './components/Login';
import Orders from './components/Orders';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
// import '../assets/fonts/stylesheet.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  
  return (
    <div>
      <ToastContainer/>
      <Header />
      <Serachbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/distribute' element={<Distribute/>} />
        <Route path='/merch' element={<Merch/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Account' element={<Account/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:productId' element={<Product/>} />
      </Routes>
       {/* <Home/> */}

      <Footer />
    </div>
  )
}

export default App
