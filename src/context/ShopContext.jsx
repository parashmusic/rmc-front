import { createContext, useState,useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();


const ShopContextProvider = (props) => {

    const currency ='₹';
    const delivery_fee = 50;
    const [search,setSearch]= useState('');
    const [showSearch,setShowSearch] = useState(false);
    const  [cartItems,setCartItems]= useState({});

    const addToCart = async (itemId,size) =>{
      if(!size){
        toast.error('Select product size')
        return
      }

      let cartData = structuredClone(cartItems);
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
          }
          else{cartData[itemId][size]=1;}
      }
      else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
      }
      setCartItems(cartData);
    }

    const getCartCount = () => {
let totalCount = 0;
for(const items in  cartItems){
  for(const size in cartItems[items]){
    try {
      if(cartItems[items][size] > 0){
        totalCount += cartItems[items][size];
      }
    } catch (error) {
      
    }
  }
}
return totalCount;
    }

    useEffect(() => {
    
    }, [cartItems])
    

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
      }

      const getCartAmount = () =>{
        let totalAmount =0;
        for(const items in cartItems){
          let itemInfo = products.find((product)=> product._id === items);
          for(const item in cartItems[items]){
            try {
              if (cartItems[items][item] > 0) {
                totalAmount += itemInfo.price * cartItems[items][item];
              }
            } catch (error) {
              
            }
          }
          
        }
        return totalAmount;
      }



    const value ={
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,updateQuantity,getCartAmount
    }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;


// import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "₹";
//   const delivery_fee = 10;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error("Select product size");
//       return;
//     }

//     let cartData = structuredClone(cartItems);
    
//     // Ensure item and size exist in cartData before updating
//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1; // Corrected the increment operation
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = { [size]: 1 };
//     }
    
//     setCartItems(cartData);
//   };

//   const getCartCount = () => {
//     let totalCount = 0;
//     for (const items in cartItems) {
//       for (const size in cartItems[items]) {
//         try {
//           if (cartItems[items][size] > 0) {
//             totalCount += cartItems[items][size];
//           }
//         } catch (error) {
//           console.error("Error counting cart items:", error);
//         }
//       }
//     }
//     return totalCount;
//   };

//   useEffect(() => {}, [cartItems]);

//   const updateQuantity = async (itemId, size, quantity) => {
//     let cartData = structuredClone(cartItems);
    
//     // Handle removing item if quantity is 0
//     if (quantity === 0) {
//       if (cartData[itemId] && cartData[itemId][size]) {
//         delete cartData[itemId][size]; // Remove the size from the cart
        
//         // If no other sizes are left for this item, remove the item itself
//         if (Object.keys(cartData[itemId]).length === 0) {
//           delete cartData[itemId];
//         }
//       }
//     } else {
//       // Update quantity if quantity > 0
//       if (!cartData[itemId]) {
//         cartData[itemId] = {};
//       }
//       cartData[itemId][size] = quantity;
//     }
    
//     setCartItems(cartData);
//   };

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
