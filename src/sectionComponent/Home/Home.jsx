import React from 'react'
import Header from '../../Component/NavigationBar'
import Footer from '../../Component/Footer'
import Card from '../../Component/Card'
import About1 from '../../Component/about1'
import Banner from '../../Component/HeroBanner'
import FirstLanding from '../../Component/Firstlanding'
import Landing from '../../Component/Landing'


export default function Home() {
  return (
    <>
  
        <Header />
         <Banner/>
         <FirstLanding/>
         <Landing/>
         <FirstLanding/>
         <Landing/>
         <About1/> 
        <Footer/>
       </>
  )
}
