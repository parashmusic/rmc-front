// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title'
// import { assets } from '../assets/assets';
// const Cart = () => {
//   const {products,currency,cartItems,updateQuantity} = useContext(ShopContext);
// const [cartData,setCartData]= useState([]);

// useEffect(()=>{
//   const tempData = [];
//   for(const items in cartItems){
//     for(const item in cartItems[items]){
//       if (cartItems[items][item]>0) {
//         tempData.push({
//           _id:items,
//           size:item,
//           quantity : cartItems[items][item]
//         })
        
//       }
//     }
//   }
//   setCartData(tempData);
// },[cartItems])

//   return (
//     <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>
//     <div className='border-t pt-14' >
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'}/>
//       </div>
//     <div >
//       {
//         cartData.map((item,index) =>{
//           const productData = products.find((product)=> product._id === item._id);
//           return(
//             <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className='flex items-center gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                           <p>{currency}{productData.price}</p>
//                           <p className='px-2 sm:px-3 sm:py-1 border  bg-slate-50'>{item.size}</p>
//                       </div>                  
//                   </div>
//                 </div>
               
//                 <input onChange={(e)=> e.target.value ===  '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))}  type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
//                   <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />   
//             </div>
//           )
//         })
//       }
//     </div>

//     </div>

//     </div>
//   )
// }

// export default Cart


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { assets } from '../assets/assets';
import { toast } from 'react-toastify'; // Import toast
import CartTotal from './CartTotal';
import "./Cart.css";
const Cart = () => {
  const {products, currency, cartItems, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>
      <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div>
          {
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-center gap-6'>
                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{productData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border  bg-slate-50'>{item.size}</p>
                      </div>
                    </div>
                  </div>
                  {/* Input field for quantity */}
                  <input
                    onChange={(e) => {
                      const newQuantity = Number(e.target.value);
                      if (newQuantity <= 0) {
                        // Show toast error if quantity is less than 1
                        toast.error("Value must be greater than or equal to 1");
                      } else {
                        updateQuantity(item._id, item.size, newQuantity);
                      }
                    }}
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-4 mr-4 sm:w-5 cursor-pointer'
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })
          }
        </div>
          <div className='flex justify-end my-20'>
              <div className='w-full sm:w-[450px]'>
                <CartTotal/>
                <div className='w-full text-end'>
                  <button className='checkout-button my-8 mx-[-2px] '>CHECKOUT</button>
                </div>
              </div>
          </div>

      </div>





    </div>
  );
};

export default Cart;
