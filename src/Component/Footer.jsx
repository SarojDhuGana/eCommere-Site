//------------ creating objects for footer content
const navigation = {
  Explore: [
    { name: 'media gallery', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Register prodcut', href: '#' },
    { name: 'policies', href: '#' },
  ],
  Products: [
    { name: 'Home appliances', href: '#' },
    { name: 'kitchen', href: '#' },
    { name: 'Personal grooming', href: '#' },
  ],
  Certification: [
  {img:'logo',src:'https://ibb.co/QDKyW31'},
  ],

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

const icons={
  iconic:[
    {
      name: '+977-9844223344',
      href: '#',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      ),
    },
    {
      name: 'Example@gmail.com' ,
      href: '#',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
      ),
    },
  ]
}
export default function Footer() {
  return (
  // footer main section
    <footer className="bg-gray-200 grid grid-cols-1 md:col-span-1 md:pl-2 lg:justify-center md:px-10 sm:-pl-10 sm:grid-cols-1" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {/*---------------- first footer Div---------- */}
      <div className=" grid grid-flow-row max-w-7xl lg:pt-20 pb-2 max-lg:w-full sm:px-1 ">
        <div className="max-w-auto mx-auto">
          <div className="max-w-auto mx-auto my-auto max-md:grid md:grid-flow-col">
        <div className="xl:grid xl:grid-cols-3 xl:gap-2 xl:-mt-16">
          <div className="float-start gap-4 px-2 mr-1">
            <img
              className="h-7"
              src=""
              alt="Company name"

            />
           {/* --------For social media icons with company info---------*/}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-black py-4 ">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8 py-1 ring-white border-spacing-2 hover:ring bg-gray rounded-full" aria-hidden="true" />
                </a>
              ))} 
            </div>

             <div className="-ml-3">
              {icons.iconic.map((icon) =>(
                <a key={icon.name} href={icon.href} className="flex py-2 px-2">
                  <icon.icon className="w-8 h-5 ml-2"/>
                  <span className="px-2 -mt-1">{icon.name}</span>
                  <span className="flex flex-col">{icon.name1}</span>
                </a>
              ))}
             </div>
          </div>


          {/*---------------------- Explore container-------------- */}
          <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:pb-10">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="">
                <h3 className="text-sm font-semibold  text-red-700">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Explore.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-black hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>


              {/* ----------------------------Product container------------ */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-red-700">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Products.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 black hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            {/* --------------Certificatation Container----------------- */}
            <div className="md:grid md:grid-cols-1 md:gap-8 max-lg:my-2 max-sm:grid-cols-">
              
                <div className="">
                <h3 className="text-sm font-semibold leading-6 text-red-700">Certification</h3>
                <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                  <img src="" alt="img1" className="border-2 w-40 px-2" />
                  <img src="" alt="img2" className="border-2 w-40" />
                  <img src="" alt="img3" className="border-2 w-40"/>
                  <img src="" alt="img3" className="border-2 w-40"/>
                  </div>


             {/*------------------- Newsletter container inside certification container-----------*/}
        <div className="lg:mt-2 sm:py-2 grid grid-cols-1 sm:justify-evenly">
            <h3 className="text-sm font-semibold leading-6 text-red-700">Newsletter</h3>
            <form className="mt-2 md:flex md:max-w-md px-2 border-0 lg:max-w-full sm:justify-center">
              <label htmlFor="email-address" className="sr-only ">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="min-w-0 appearance-none rounded-md border-0 border-gray-300 bg-gray-200 px-3 py-1 text-base text-black shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 xl:w-96"
                placeholder="Enter your email"
              />
              <div className=" sm:ml-4 sm:mt-0 sm:flex-shrink-0 max-sm:grid-cols-2 ">
                 <button
                  type="submit"
                  className="flex items-center justify-center rounded-md w-20 bg-red-600 py-2 z-10 lg:-ml-20 font-sm font-semibold text-white sm:w-34"
                 >
                 sign up
                </button>
                </div>
               </form>
           </div>
           </div>
              </div>
           </div>
           </div>

           {/*-------------------Copyright section------------- */}
         <div className="mt-16 border-t border-gray-400 pt-4 sm:mt-20 lg:mt-24">
          <p className="text-l leading-5 text-black text-center">Copyright 2021 &copy; Baltra.com</p>
         </div>
         </div>
        </div>
    </div>
  </footer>
  )
}


