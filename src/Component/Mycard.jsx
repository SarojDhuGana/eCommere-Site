import { FunctionsOutlined } from '@mui/icons-material'
import React from 'react'
const arrowicon={
    arrow:[
      {
        name:'arrow',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="red" d="M8.586 5.586a2 2 0 0 0 0 2.828L12.171 12l-3.585 3.586a2 2 
            0 1 0 2.828 2.828L17.829 12l-6.415-6.414a2 2 0 0 0-2.828 0"/>
          </svg>
        ),
      },
    ]
  }
function Mycard(props){
    return(
        <>
        {/*-------------------------- Card section--------------- */}
    <div1 className=" py-2 px-2 justify-center items-start w-56 ">
    <div2 className=''>
        <div className='border-2 border-blue-300 h-80 py-10 px-2'>
   <img src={props.imgSrc} alt="vaccum cleaner" className=' w-80 h-60' />
   </div>
   </div2>
     <div3 className="my-2">
    <h1 className='mt-2 mb-2 text-xl'>{props.Iname}</h1>
    <p className="text-gray-500 font-extralight">{props.fdetail}</p >
    <p className="text-gray-500 font-extralight">{props.sdetail}</p >
  {arrowicon.arrow.map((icon) => (
 <a key={icon.name} href={props.link} className="text-black flex mt-3 ">
 <h3 href={props.link} className='-my-1.5 text-red-500'>View details</h3>
 <icon.icon className=" "aria-hidden="true" />
 </a>
 ))} 
 </div3>
</div1>
{/* Card section end */}
</>
    )
}

export default Mycard