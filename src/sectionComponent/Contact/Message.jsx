
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Message() {
  return (
    <div className="relative isolate bg-white mx-1 lg:my-1 sm:-my-4 lg:-mt-14">
      <div className="mx-2 lg:py-8 grid max-w-7xl my-2 grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 my-3 w-full border-blue-800 pb-20 sm:pt-44 lg:static lg:px-10">
        <img src="https://w0.peakpx.com/wallpaper/821/876/HD-wallpaper-old-phone-telephone-dial-telephone-purple-background-call-center-concepts-support-concepts.jpg" alt="Message table is here" className=' w-full h-96 lg:-mt-9   '/>
        </div>
        {/*----------- message form---------- */}
        <form action="#" method="POST" className="px-6 sm:pb-32 lg:px-8 lg:py-2 md:-mt-14 lg:-mt-4">
          <div className="max-w-full lg:mr-0 lg:max-w-full mt-14 md:justify-center lg:pt-24">
          <h1 className='lg:-pb-10 capitalize text-3xl text-red-700 text-center pt-2 max:sm-my-2'>Message us for any queries</h1>
            <div className="grid grid-cols-4 gap-x-4  gap-y-2 sm:grid-cols-2 w-full py-4 px-1 pb-10  max-sm:grid-cols-1 max-sm:-px-10 max-sm:-mx-9">
              <div className='mx-2 '>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='Hari thapa'
                    autoComplete="Full_name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='mx-2 '>
                <label htmlFor="last-name" className="block text-sm pb-2 font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='abc@gmail.com'
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className='mx-2'>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone_number"
                    id="phone_number"
                    placeholder='978812932'
                    autoComplete="given-numberr"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='mx-2 '>
                <label htmlFor="last-name" className="block text-sm pb-2 font-semibold leading-6 text-gray-900">
                  Enquiry Type
                
                </label>
                <div className=" flex">
                    <select name="" id="" defaultValue="select" className='-ml-1 block text-gray-900 shadow-sm  ring-1 ring-inset ring-gray-300  rounded-md z-10 w-screen focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-0 py-2.5 px-3.5'>
                    <option value="">----Select------</option>
                    <option value="">product</option>
                    <option value="">Home alliances</option>
                    <option value="">kitchne alliances</option>
                   </select>
                </div>
              </div>


              <div className="sm:col-span-2 mx-2 max-sm:px-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5 ">
                  <textarea
                    name="message"
                    id="message"
                    rows={2}
                    placeholder='I would like.....'
                    className="lg:block w-96 h-24 rounded-md border-0 px-3.5 py-3  text-gray-900 shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:w-auto"
                    defaultValue={''}
                  />
                </div>
              </div>
           <div className='lg:w-96 lg:space-x-28 lg:mt-2 lg:mx-10'>
              <button
                type="submit"
                className="rounded-md bg-red-600 px-3.5 py-2.5 overflow-hidden  float-end text-md font-semibold text-white shadow-sm lg:mx-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Send message
              </button>
              </div>
            </div>
           
          </div>
        </form>
      </div>
    </div>
  )
}
