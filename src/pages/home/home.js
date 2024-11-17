import React from 'react'
import './home.css'
import NavBar from '../../component/navbar/navbar'
import Carousel from '../../component/carousel/carousel'
import DealCards from '../../layout/dealCard/dealCard'
import ProductsLayout from '../../layout/product/cardData'

function Shop () {  
  return (
    <div>
      <NavBar />
      <Carousel />
      <DealCards />
   <ProductsLayout />
    </div>
  )
}

export default Shop