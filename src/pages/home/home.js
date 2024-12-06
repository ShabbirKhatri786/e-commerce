import React from 'react'
import './home.css'
import NavBar from '../../component/navbar/navbar'
import Carousel from '../../component/carousel/carousel'
import DealCards from '../../layout/dealCard/dealCard'
import ProductsLayout from '../../layout/product/cardData'
import { useSelector } from 'react-redux'

function Shop () {  
  const searchQuery = useSelector((state) => state.search.query);
  
  return (
    <div>
      <NavBar />
      {searchQuery === "" && (
        <>
          <Carousel />
          <DealCards />
        </>
      )}
      <ProductsLayout />
    </div>
  )
}

export default Shop
