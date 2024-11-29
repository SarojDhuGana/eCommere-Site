
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Kitchen } from '@mui/icons-material'
import Mycard from '../../Component/Mycard'
import Footer from '../../Component/Footer'
import Data from '../../Component/Data'
const breadcrumbs = [
  {
    id: 1,
    name: 'Product .',
    href: '#'
  },
  {
    id: 1,
    name: 'kitchen appliences .',
    href: '#'
  },
  {
    id: 1,
    name: 'kitchen ware .',
    href: '#'
  },


]


const filters = [
  {
    id: 'kitchen',
    name: 'kitchen appliances',
    options: [
      { value: 'Pressure Cooker', label: 'Pressure Cooker' },
      { value: 'Cookware', label: 'Cookware' },
      { value: 'Knives', label: 'Knives' },
      { value: 'Kitchen ware', label: 'Kitchen ware' },
      { value: 'Air frier', label: 'Air frier' },

      { value: 'mixer', label: 'mixer' },
      { value: 'micro wave', label: 'micro wave' },
      { value: 'oven', label: 'oven' },
      { value: 'water boiler', label: 'water boiler' },
      { value: 'coffee maker', label: 'coffee maker' },
      { value: 'Gas stove & chimney', label: 'Gas stove & chimney' },

    ],
  },

  {
    id: 'Sort',
    name: 'Sort by',
    options: [
      { value: 'JustLunch', label: 'Just Lunch' },
      { value: 'New Arrival', label: 'New Arrival' },
      { value: 'recommended', label: 'recommended' },
      { value: 'sales', label: 'Sales' },

    ],
  },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function ProductCatageory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (

    <div className="">
      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-2 ">
        <div className="bg-red-50 mt-4 pb-10 pt-24 flex">
          <div className="px-36 py-2 ">
            <h1 className="text-4xl text-red-800 ">Kitchn appliences</h1>
            <nav aria-label="Breadcrumb" className="max-w-xl lg:-mx-5 sm:px-6 py-2 ">
              <ol role="list" className="flex items-center space-x-1">
                {breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center  ">
                      <a href={breadcrumb.href} className="">
                        {breadcrumb.name}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <a href="#" aria-current="page" className="font-medium">
                    Mixer
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className='w-96 -mt-10 ml-5 '>
            <img src="src/assets/homeappliances.png" alt="This is img" className='object-cover' />
          </div>
        </div>

        <div className="pb-24 pt-12 px-3  mt-10 lg:grid lg:grid-cols-3 lg:gap-x-8  xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filters</h2>

            <button
              type="button"
              className="inline-flex items-center lg:hidden "
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 " aria-hidden="true" />
            </button>

            <div className="hidden lg:block">
              <form className="space-y-3 divide-gray-200  px-16 pr-28">
                {filters.map((section, sectionIdx) => (
                  <div key={section.name} className={sectionIdx === 0 ? null : '-pt-2'}>
                    <fieldset>
                      <div className="space-y-1 pt-4 px-10 pb-4 -mx-10 rounded-sm bg-blue-100">
                        <legend className="block text-xl capitalize font-medium text-gray-900 mb-2 pb-2 border-b border-black">{section.name}</legend>
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center mx-2 ">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="accent-red-500 w-7 h-5 "
                            />
                            <label htmlFor={`${section.id}-${optionIdx}`} className="ml-2  ">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>
          {/*-------------------------------- Card section----------- */}
          <section aria-labelledby="product-heading" className="   -ml-20  lg:col-span-2 lg:mt-0 xl:col-span-3 px-2">
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>
            <div className='grid grid-cols-3 py-2 my-2 px-2 mx-2'>
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />

              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
              <Mycard
                imgSrc={Data[0].image}
                Iname={Data[0].title}
                fdetail={Data[0].detail}
                sdetail={Data[0].detailS}
                link={Data[0].link}
              />
            </div>


          </section>

        </div>
      </main>
    </div>
  )
}
