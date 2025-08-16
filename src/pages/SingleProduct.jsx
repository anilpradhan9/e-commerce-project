import axios from 'axios'
import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Breadcrums from '../components/Breadcrums'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/CartContext.jsx'


const SingleProduct = () => {
  const params = useParams()
  const [SingleProduct, setSingleProduct] = useState("")
  const {addToCart} = useCart()
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
      const product = res.data.product;
      setSingleProduct(product)
      console.log(product)


    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))

  return (
    <>
      {
        SingleProduct ? <div className='px-4 pb-4 md:px-0'>
          <Breadcrums title={SingleProduct.title} />
          <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='w-full'>
              {/* Images Details */}
              <img src={SingleProduct.image} alt={SingleProduct.title}
                className='rounded-2xl w-full object-cover' />
            </div>
            {/* Product details */}
            <div className='flex flex-col gap-6'>
              <h1 className='md:text-3xl text-xl font-bold text-gray-800 '>{SingleProduct.title}</h1>
              <div className='text-gray-700'>{SingleProduct.brand?.toUpperCase()} / {SingleProduct.category?.toUpperCase()} / {SingleProduct.model} </div>
              <p className='text-xl text-red-500 font-bold'>${SingleProduct.price} <span className='line-through text-gray-700 '>${OriginalPrice}</span> <span className='bg-red-500 text-white p-2 rounded-full'>{SingleProduct.discount}% Discount</span> </p>
              <p className='text-gray-600'>{SingleProduct.description}</p>
              {/* quantity */}
              <div className='flex items-center gap-4'>
                <label htmlFor="" className='text-sm font-medium text-gray-700 '>Quantity</label>
                <input type="number"  min={1} value={1} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500' />
              </div>
              <div className='flex gap-4 mt-4'>
                <button onClick={()=>addToCart(SingleProduct)} className='px-6 flex gap-2 py-2 text-lg text-white rounded-md bg-red-500'> <IoCartOutline className='w-6 h-6' />Add to Cart </button>
              </div>
            </div>
          </div>
        </div> : <div></div>
      }
    </>
  )
}

export default SingleProduct