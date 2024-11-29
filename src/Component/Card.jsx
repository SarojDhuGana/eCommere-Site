import { FunctionsOutlined } from '@mui/icons-material'
import { Tab } from '@headlessui/react'
import{ React,Fragment} from 'react'
import Mycard from './Mycard'
import Data from './Data'
 
export default function Card() {
  return (
    <div className=' mx-1 m-1 my-16'>
    <h1 className='capitalize text-center text-2xl  text-red-700' >news & noteworthy </h1>
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}/>
        <div className='text-center  top-1 space-x-5 space-y-7'>
      <button className='font-semibold border-b-2 text-red-500 border-red-400'>Just Lunched</button>
      <button className='font-semibold hover:text-red-500 hover:border-b-2 hover:border-red-400'> Feature product</button>
     </div>
    </Tab.List>
    </Tab.Group> 

    <div className=" flex space-x-5 justify-center py-6 h-auto  ">
    <Mycard 
    imgSrc= {Data[0].image}
    Iname={Data[0].title}
    fdetail={Data[0].detail}
    sdetail={Data[0].detailS}
    link={Data[0].link}
    />
      <Mycard 
    imgSrc= {Data[0].image}
    Iname={Data[0].title}
    fdetail={Data[0].detail}
    sdetail={Data[0].detailS}
    link={Data[0].link}
    />
      <Mycard 
    imgSrc= {Data[1].image}
    Iname={Data[1].title}
    fdetail={Data[1].detail}
    sdetail={Data[1].detailS}
    link={Data[1].link}
    />
      <Mycard 
    imgSrc= {Data[2].image}
    Iname={Data[2].title}
    fdetail={Data[2].detail}
    sdetail={Data[2].detailS}
    link={Data[2].link}
    />

   
 
   
    </div>
  </div>
  )
}
