import axios from 'axios'
import { ChevronLeft } from 'lucide-react'
import React, { use } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductListView from '../components/ProductListView'
const CategoryProduct = () => {
  const navigate = useNavigate
  const [searchData, setSearchData] = useState([])
  const params = useParams()
  const category = params.category
  const getFilteredData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
      const data = res.data.products
      setSearchData(data)
    } catch (error) {

    }
  }
  useEffect(() => {
    getFilteredData()
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto mt-10 px-4 mb-10'>
            <button onClick={()=>navigate(`/`)} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md items-center cursor-pointer flex gap-1'> <ChevronLeft/> Back</button>
            {
              searchData.map((product, index) =>{
                return <ProductListView  key={index} product={product} />
              })
            }


          </div>
        ) : (
          <div className='flex items-center justify-center h-[400px]'></div>
        )
      }
    </div>
  )
}

export default CategoryProduct