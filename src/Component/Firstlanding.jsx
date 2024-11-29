import React from 'react'

export default function Firstlanding() {
  return (
    <>  
    <div1 className=' justify-start flex w-ful'>
        <div2 className=" mx-4 my-4 flex ">
           <div3 className="bg-red-50 mx-3 my-5 w-9/12">
           <div className='flex justify-center mx-9 '>
            <div className='h-20'>
              <img src="src/assets/kitchen.png" alt="Cooking appliences"  className=''/>
              </div>
              </div>
           </div3>
         <div4 className="mx-6 px-20 my-12">
           <h1 className='text-4xl py-4 font-medium text-red-700'>Appliences that ease your cooking </h1>
          <ul   className='list-disc mx-4'>
           <li className='text-blue-400 font-thin'>Lorem ipsum dolor sit.</li>
           <li className='text-blue-400 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
           <li className='text-blue-400 font-thin'>Lorem ipsum dolor sit amet consectetur</li>
           </ul>
           <button type="submit" className='py-1 mx-2 bg-red-500 px-2 my-6 text-white font-extralight rounded-md mb-4'>Explore Kitchen Appliences</button>
         </div4>
        </div2>
    </div1>
    {/* <Firstlanding/> */}
    </>
  )
}
