import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
const LatestCollection = () => {
    const {product} = useContext(ShopContext);
  return (
   <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'OUR'} text2={'COLLECTIONS'}/>
    </div>
   </div>
  )
}

export default LatestCollection