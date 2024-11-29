
import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'

const product = {
  name: 'Application UI Icon Pack',
  version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
  price: '$220',
  detail:
    'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
  highlights: [
    '200+ SVG icons in 3 unique styles',
    'Compatible with Figma, Sketch, and Adobe XD',
    'Drawn on 24 x 24 pixel grid',
  ],
  imageSrc: 'src/assets/file.png',
  imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}

const reviews = {
  average: 4,

  featured: [
    {
      id: 1,
      rating: 4,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 4.3,
      content: `<p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

const specification = [
  {
    text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate corporis modi, animi voluptates est. Nostrum odio culpa fuga officiis et magnam, id sequi, obcaecati laborum suscipit corrupti tenetur! Doloremque.`
      
  },
  {
   
    text:
     `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est quasi cum minus sunt cupiditate hic tempore, in error quam impedit enim eius, facilis, saepe corporis. Ut accusantium beatae sint?`
  },
  // More FAQs...
]

const description = {
  href: '#',
  summary:
    'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
  
  <p class="pb-2">
  For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.
  For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.
  </p> 

  <p class="pb-2" >
  <span> Available colors: Red,Blue,Black </span>
  <p/>
    
  <span class="font-semibold pb-2">Dimensions: 1400cm X 500cm</span>
  `,
}

const shareIN = {
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


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductReviews() {
  return (
    <div className="bg-white border-2 border-black">
      <div className="mx- my-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-5 border-2 border-red-500">
      <Header/>
        {/*------------------ Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 -mt-14 xl:gap-x-16 border-2 border-blue-500">
          {/* Product image */}
          <div className="lg:col-span-4 grid grid-cols-2 border-2 py-1 px-12 lg:row-end-1">
                 <img src={product.imageSrc} alt="" className='border-2 border-red-400 mx-10 w-36 rounded-md' />
            <div className="aspect-h-2 aspect-w-4 overflow-hidden py-10 bg-red-500  lg:float-end rounded-l">
              <img src={product.imageSrc} alt={product.imageAlt} className="object-cover my-16  mx-1 object-center" />
            </div>
          </div>

          {/*------------Product details--------------------- */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                {/* <p className="mt-2 text-sm text-gray-500">
                  Version {product.version.name} (Updated{' '}
                  <time dateTime={product.version.datetime}>{product.version.date}</time>)
                </p> */}
              </div>
            </div>

            {/*---------------start line-------------*/}
            <div className='mb-5 flex'>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        description.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-5 border-2 rounded-sm tex-black text-sm font-sans px-2">{description.average} <span className=''>rating</span></p>
              </div>
             
                    {/*--------------- share----- */}
                <div className='border-t'>
                     <p className="mt-6 text-gray-500">{product.detail}</p>
                </div>
            <div className="mt-5 border-gray-200 grid grid-cols-1">
               <div className="flex space-x-3 ">
               <h3 className="font-medium  text-gray-900 ">Share:</h3>
              {shareIN.social.map((item) => (
                <a key={item.name} href={item.href} className="text-black py-2 ">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-7 py-1 -mt-1 bg-gray-100 ring-white rounded-full" aria-hidden="true" />
                </a>
              ))} 
            </div>  
            </div>
            <div className="mt-8 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-md border-transparent bg-red-600 py-1 border-2 px-5 capitalize font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                enquiry
              </button>
              
            </div>
          </div>
         
{/*--------this part is description, specifications and reviews-----------*/}
          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
          {/* Description */}
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 mx-2">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                      )
                    }
                  >
                    <h1>Description</h1>
                  </Tab>
                  {/* Specification */}
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                      )
                    }
                  >
                    Specification
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                      )
                    }
                  >
                    Reviews
                  </Tab>
                </Tab.List>
              </div>
{/*----For Description items-----------------*/}
              <Tab.Panels as={Fragment}>
                <Tab.Panel className=" mx-2 pt-5 ">
                  <h3 className="sr-only">description</h3>
                  <div
                    className="prose prose-sm max-w-none pt-3 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: description.content }}
                  />

                </Tab.Panel>
{/*----------------------------------------------------------- specification items-------------- */}
                <Tab.Panel className="text-sm text-gray-500">
                  <h3 className="sr-only">Specification</h3>

                  <dl>
                    {specification.map((spc) => (
                      <Fragment key={spc.text}>
                        <dt className="mt-10 font-sans text-gray-900">{spc.text}</dt>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>
{/*----------------------------------------------reviews items----------------------- */}
                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">Reviews</h3>
                  {reviews.featured.map((review, reviewIdx) => (
                    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex-none py-10">
                        <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                      </div>
                      <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                        <h3 className="font-medium text-gray-900">{review.author}</h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>

                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{review.rating} out of 5 stars</p>
                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}
