import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-gray-900 mt-10 mx-1">
      <div className="h-96 bg-contain bg-no-repeat bg-left top-2" style={{ backgroundImage: 'url("./src/assets/hero.jpg")', backgroundSize: "1380px 450px", }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black  to- opacity-50"></div>
        <div className='absolute top-24 mx-16  from-transparent '>
          <h1 className='text-4xl py-3 px-2 font-mono text-white'>Complete Range of Home</h1>
          <span className='text-4xl px-2 text-white'>Appliances</span>
          <p className='text-white text-sm pt-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='text-white text-sm pb-4 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {/*-----------------div for botton---------------------- */}
          <div className='cursor-context-none space-x-5  '>
            <button type="submit" className='text-center border-2 mx-2 bg-transparent text-white font-mono bg-gray-300 px-3 py-2 text-xl rounded-md hover:bg-red-700 hover:border-0  border-red-700'>Explore</button>
            <button type="submit" className='text-center px-4 py-2 text-xl rounded-md text-white  font-mono hover:bg-transparent hover:border-red-700 hover:border-2 bg-red-700'>Enquiry now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
