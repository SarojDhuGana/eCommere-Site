import React from 'react'
import Message from './Message'

const contactnavigate = {
        // For social Media icon
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
  
      {
        name: 'twiter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
      {
        name: 'linkdin',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" className="" viewBox="0 0 50 50" version="1.1" {...props} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="" fill-rule="evenodd">
          <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#000000"></path>
      </g>
      </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }

  const contacticon={
    AddressIcon:[
      {
        id:'0',
        address: 'Koteshwor',
        sub_address: 'Kathmandu,Nepal',
        href: '#',
        icon: (props) => (
          <svg fill="#7f7676" version="1.1" id="Capa_1" 
          xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" {...props} viewBox="0 0 395.71 395.71" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z
          "></path> </g> </g></svg>
        ),
      },
    ],

    Phoneicon:[
      {
        id:'1',
        name: '+977-9844223344',
        href: '#',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        ),
      },
    ],

    emailIcon:[
      {
        id:'2',
        name: 'Example@gmail.com' ,
        href: '#',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
        ),
      },
    ],
  
    ShareIcon:[
      {
          id:'3',
        icon: (props) => (
          <svg viewBox="0 0 24 24" 
          fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" 
          fill="#1C274C"></path> </g></svg>
        ),
      },
    ],

  }
  

export default function ContactUs() {
  return (
    <>
      <div className="mx-1 my-10 px-2 max-sm:w-98 ">
      <div className='mx-auto max-w-auto justify-center  '>
        <div className='mx-auto max-w-auto justify-center items-center '>
        <div className=" mx-1 my-2">
        <h1 className='text-center text-2xl text-red-800'>Contact Us</h1>
        <p className='lg:px-52 md:px-32 sm:px-4 max-sm:text-sm  py-5 text-blue-400 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cum, ex dolor consequuntur distinctio odit! Autem sint soluta itaque nam sed, libero aut error in cupiditate inventore ad a voluptates?</p>
        </div>
        <div className="mx-1 mt-4 lg:h-48 mb-2 bg-red-50 grid max-w-full gap-10 py-10 lg:px-9  text-base leading-7 sm:grid-cols-2 sm:gap-y-16 md:grid-rows-2  lg:mx-2  lg:max-w-none lg:grid-cols-4">
         {/* --------Address--------- */}
          <div className="px-4">
            <h3 className="pl-7 font-semibold text-gray-900">Address</h3>
            <div className="-ml-3">
            {contacticon.AddressIcon.map((icon) =>(
                <a key={icon.id} href={icon.href} className="py-3 px-2">
                  <icon.icon className="w-8 h-5 top-1 mb-5 ml-1 -mt-14"/>
                  <span className="px-5 mx-2" >{icon.address}</span><br />
                  <span className="px-2 mx-5">{icon.sub_address}</span>
                </a>
              ))}
             </div>
             <a href="#" className='mx-4 font-mono text-bold text-red-700 underline '>view on map</a>
          </div>

{/* Phone---- */}
          <div className='px-4'>
          <h3 className="pl-8 font-semibold text-gray-900">Phone</h3>
            <div className="-ml-3">
              {contacticon.Phoneicon.map((icon) =>(
                <a key={icon.id} href={icon.href} className="flex py-2 px-2">
                  <icon.icon className="w-8 h-5 top-1 -mt-8 "/>
                  <span className="px-2 -mt-1">{icon.name}</span>
                </a>
              ))}
             </div>
          </div>
    {/* Email----------------- */}
          <div className='px-4'>
            <h3 className="pl-8 font-semibold text-gray-900">Email</h3>
            <div className="-ml-3">
              {contacticon.emailIcon.map((icon) =>(
                <a key={icon.id} href={icon.href} className="flex py-2 px-2">
                  <icon.icon className="w-8 h-5 top-1 -mt-8 "/>
                  <span className="px-2 -mt-1">{icon.name}</span>
                </a>
              ))}
             </div>
          </div>
     {/* Share------------------- */}
          <div className='px-4'>
            <h3 className=" pl-6 font-semibold text-gray-900">Share</h3>
            <div className="-ml-3">
              {contacticon.ShareIcon.map((icon) =>(
                <a key={icon.id} href={icon.href} className="flex px-2">
                  <icon.icon className="w-8 h-5 top-1 -mt-6 "/>
                </a>
              ))}
             </div>
            <div className="flex space-x-2 mx-4">
              {contactnavigate.social.map((item) => (
                <a key={item.name} href={item.href} className="text-black py-2 ">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-7 w-7 border-2 py-1 ring-white border-spacing-2 hover:ring bg-gray border-black rounded-full" aria-hidden="true" />
                </a>
              ))} 
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      {/*------- Message Form Component------------  */}
      {/* <Message/> */}
    </>
  )
}
