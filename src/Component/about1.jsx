import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'

const icon = () => {
  Arrow: [
    {
      id: 1,
      name: 'rightarrow',
      icon: EastIcon
    },
    {
      id: 2,
      name: 'leftarrow',
      icon: WestIcon
    }
  ]
}

export default function About1() {
  return (
    <div className='mx-1 my-20'>
      <div className='text-center justify-center font-semibold text-3xl text-red-400 my-2'>
        <h1>About Us</h1>
        <div className="lg:px-52 py-2 my-1 text-xl font-extralight text-blue-400">
          <p className=' max-sm:text-sm max-sm:px-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, velit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi molestias vitae laudantium nostrum, delectus fugiat corrupti placeat sint modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quisquam.
          </p>
        </div>

        <div className='lg:px-5 items-center justify-center max-md:justify-center md:px-10 sm:px-14'>
          <video src="src/assets/kitchenVideo.mp4" className='sr-only'>kitchen video</video>
          <div className=' w-10/12 lg:mx-70 max-md:mx-14 py-10 mx-40 max-sm:mx-24 max-sm:px-10 max-sm:items-center ' >
            <img src="https://i.ytimg.com/vi/lDIpwv50Njs/maxresdefault.jpg"
              herf="https://www.youtube.com/watch?v=lDIpwv50Njs"
              className='w-10/12'
              alt=""
            />
          </div>
          <div className='-mt-10 flex justify-end pr-0 w-10/12 mb-2'>
            <div className='-pt-2 w-32 space-x-7'>
              <div className="relative flex">
               <button><WestIcon className='text-red-600'/></button>
               <button className='text-gray-300'>{<EastIcon/>}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
