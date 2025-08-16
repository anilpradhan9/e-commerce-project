import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const ProductListView = ({ product }) => {

  const navigate = useNavigate()
  const { addToCart } = useCart()
  return (
    <div className='space-y-4  mt-2 rounded-md'>
      <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
        <img src={product.image} alt={product.title} onClick={() => navigate(`/products/${product.id}`)} className=' md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer' />
        <div className='space-y-2'>
          <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px]'>{product.title}</h1>
          <p className='font-semibold flex items-center text-sm md:text-lg'>$<span className='md:text-4xl text-3xl'>{product.price}</span>({product.discount}% off)</p>
          <p className='text-sm'>Free Delivery Fri,<span className='font-semibold'>18 Apr</span>  <br />Or Fatest delivery Tomorrow ,<span className='font-semibold'>17 Apr</span></p>
          <button onClick={() => addToCart(product)} className='bg-red-500   text-white px-3 rounded-md  py-2'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView