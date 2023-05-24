import React from 'react'
import Features from './Features'
import LearnMore from './LearnMore'
import Button from './Button'


const cards = [{
  img: 'images/proxyclick-self-check-in.svg',
  title: 'Autonomous Check In',
  list: ['- Branded Kiosk', '- Guest Wifi Credentials', '- Custom Guest Badge', '- eSign NDAs and other docs', '- Localized into 30+ languages']
}, {
  img: 'images/administrative.svg',
  title: 'Operations and Administration',
  list: ['- Logbook', '- Workplace Security', '- Enterprise customization', '- Data Security and Compliance', '-Identity Management']
}, {
  img: 'images/health-and-safety.svg',
  title: 'Health and Safety',
  list: ['-Scan or Upload Vaccination Certificates', '- Health Screening', '- Emergency List', '- Watchlist Monitor']
}, {
  img: 'images/proxyclick-interogations.svg',
  title: 'Workplace Integrations',
  list: ['-Access Control', '- Future of Work applications', '- Hybrid Work', '- Facility Management', '- Slack, Teams, Cisco']
}]


const images = [{
  src: "images/airbnb.svg",
  alt: "AirBnb",
  style: "w-16"
},
{
  src: "images/acer.svg",
  alt: "Acer",
  style: "w-16"
},
{
  src: "images/audi.svg",
  alt: "Audi",
  style: "w-16"
}, {
  src: "images/pepsico.svg",
  alt: "Pepsico",
  style: "w-16"
}, {
  src: "images/loreal.svg",
  alt: "Loreal",
  style: "w-16 hidden sm:inline-block"
}, {
  src: "images/revolut.svg",
  alt: "Revolut",
  style: "w-16 hidden sm:inline-block"
}]


export default function Section() {
  return (
    <>
      <div className='mx-3 my-8 md:mt-32'>
        <p className='text-center text-3xl font-bold text-primaryColor my-3 md:text-4xl'> A Superior Guest Experience</p>
        <p className='text-center text-xl leading-8 text-text md:w-[42rem] md:mx-auto'>Proxyclick’s Visitor Management System is a fully integrated solution designed to reduce the operational costs associated with workplace entry and establish a secure environment for visitors and employees.</p>
      </div>

      <div className='mx-3 md:flex md:justify-between md:mx-32'>
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <img src={card.img} className='w-28 mt-9' />
              <p className='text-primaryColor font-bold text-xl mb-8'>{card.title}</p>
              {card.list.map((item) => (
                <p key={item} className='text-text leading-5 md:leading-6'>{item}</p>
              ))}

              <div className='md:my-auto'>
                <LearnMore />
              </div>

            </div>)
        })

        }


      </div>

      <Features style='md:flex md:flex-row-reverse' img='images/homepage.png' title='Integrate Your Access Control System' content='Sync visitor and employee data with your access control system, send unique QR codes or program RFID cards to grant access at the right time, and get real-time information about who is in the building. Yes, Elvis has left the building.' />

      <div className='flex justify-around pb-7 md:py-6 md:my-20 md:mx-80'>
        {images.map((image, index) => {
          return <img key={index} className={image.style} src={image.src} alt={image.alt} />
        })
        }
      </div>
      <Button classNames='text-center text-white rounded-full bg-buttonColor w-[15rem] py-3 mx-auto' text='Access Control Integration' />
      <Features style='md:flex' img='images/id-scan.png' title='Secure the Workplace. Protect User Data.' content='Proxyclick’s facial recognition technology, international watchlists, and pre-arrival check-in requirements ensure workplace security and compliance. Proxyclick is also SOC 2 Type II and ISO 27001 certified to demonstrate our commitment to safely managing user data and their privacy.' />

    </>
  )
}
