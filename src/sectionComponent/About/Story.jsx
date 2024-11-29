import React from 'react'
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';



const values = [
    {
      name: 'Brand Loyality',
      description:
        'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
      image:'LoyaltyOutlined'
    },
    {
      name: 'Innovation',
      description:
        'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
        image:''
      },
    {
      name: 'Value of money',
      description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
      image:'PaymentsOutlinedIcon'
    },
    {
      name: 'Commitments',
      description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
        image:'https://www.flaticon.com/free-icons/like'
      },
    {
      name: 'Persuit of Excellence',
      description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
      image:'https://www.flaticon.com/free-icon-font/grin-hearts_6275812?page=1&position=19&term=emoji&origin=search&related_id=6275812'
    },
  ]


const cards = [
    {
      name: 'Mission',
      description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
      image: 'https://icon-library.com/images/our-mission-icon/our-mission-icon-13.jpg'
    },
    {
      name: 'Values',
      description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
      image: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-life-insurance-flat-multi-color-icon-png-image_315756.jpg'
    },
    {
      name: 'Vision',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdnDZJmdDub1cwPnnnXD0bz2g3CsNi6OHFRpNlBlxh8e4e6vdg'
    },
  ]
  
export default function Story() {
  return (
    <>
    <div className="mx-1 sm:col-span-5 max-w-screen">
        <h1 className='text-center font-semibold text-2xl justify-center text-red-600'>Our Story</h1>
    <div className="py-1 text-xl font-extralight text-blue-400 sm:px-2 max-sm:text-center">
            <p className='lg:px-44 md:10 max-sm:px-2 max-sm:text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus blanditiis nemo, eum soluta rerum doloremque aut doloribus quo eaque optio, consectetur exercitationem eius delectus dicta porro? Sequi eum quod accusamus!
                Reprehenderit eum asperiores maiores ut optio consequatur, natus adipisci, excepturi nihil aperiam eius et, ab nemo ipsum animi obcaecati illum iusto quaerat in alias quasi necessitatibus voluptas fugiat. Accusantium, qui!
            </p>
            <div className='object-cover my-7 lg:px-64 justify-center items-center sm:mx-1 md:object-cover md:px-62 w-full sm:relative'>
                <img src="https://www.bluestream.net.in/assets/images/man.jpg" alt="Our story" className='h-72 object-cover sm:object-cover sm:max-w-full'/>
            </div>
            <p className='lg:px-44 md:px-2 max-sm:px-2 max-sm:text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus blanditiis nemo, eum soluta rerum doloremque aut doloribus quo eaque optio, consectetur exercitationem eius delectus dicta porro? Sequi eum quod accusamus!
                Reprehenderit eum asperiores maiores ut optio consequatur, natus adipisci, excepturi nihil aperiam eius et, ab nemo ipsum animi obcaecati illum iusto quaerat in alias quasi necessitatibus voluptas fugiat. Accusantium, qui!
            </p>
        </div>
        <div className="text-center text-2xl font-semibold text-red-600 my-14 max-sm:text-center">
            <h1>Our Values</h1>
            <p className='text-xl font-extralight py-2 lg:px-40  text-blue-400 max-sm:text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta quod, id delectus molestias illum odit, perferendis vitae rerum tempore officia et necessitatibus. Quia sint officia at, incidunt quibusdam odit.
            </p>
        </div>

        <dl className=" grid max-w-2xl  grid-cols-2 gap-x-10 gap-y-14 text-base leading-7 max-sm:grid-cols-1 max-sm:justify-stretch lg:mx-0 lg:max-w-none lg:grid-cols-3  px-10 mx-1">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-bold  px-5">{value.name}</dt>
                <dd className="mt-1 text-gray-500 px-5 max-sm:text-sm">{value.description}</dd>
                <i className=''>{values.image}</i>
              </div>
            ))}
          </dl>


          <div className="mt-16 pb-10 -mx-20 grid max-w-7xl gap-8 lg:gap-x-8 lg:grid-cols-3 lg:mb-5 max-md:grid-rows-3 px-2">
           {cards.map((card) => (
            <div key={card.name} className="flex shadow-xl min-w-full pb-4 pl-2 py-1 px-1 :mx-20">
              <div className="text-base leading-7 max-md:text-center  max-md:px-10 md:text-center px-28">
                <div className='justify-center flex object-cover'>
                <img src={card.image} alt="" className="h-22 aspect-square w-24 mt-4 text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-center text-xl capitalize lg:mx-16">{card.name}</h3>
                <p className="mt-1 text-blue-500 lg:text-center text-center w-full">{card.description}</p>
               </div>
            </div>
          ))}
         </div>
       </div>
  </>
  )
}
