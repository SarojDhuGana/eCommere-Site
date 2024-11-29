import React from 'react'
import ProductReviews from './ProductReviews'
import ProductCatageory from './ProductCatageory'
import Header from '../../Component/NavigationBar'
import Footer from '../../Component/Footer'

export default function Product() {
  return (
    <div className=''>
      <Header/>
        <ProductCatageory/>
      <Footer/>  
    </div>
    
  )
}
