import { useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Component/NavigationBar'
import Home from './sectionComponent/Home/Home'
import Product from './sectionComponent/Product/product'
import About from './sectionComponent/About/About'
import Contact from './sectionComponent/Contact/Contact'
import ProductReviews from './sectionComponent/Product/ProductReviews'


function App() {

  return (
    <>
    {/* <ProductReviews/> */}
      <Routes>
        <Route exact path="/"  element={<Home />}/>
          <Route  path='/product' element={<Product/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
      </Routes>
     
      

    </>
  )
}

export default App
