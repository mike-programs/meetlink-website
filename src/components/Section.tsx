import React from 'react'
import Features from './Features'
import LearnMore from './LearnMore'
import Button from './Button'
import { cards } from './Arrays'
import { logos } from './Arrays'


export default function Section() {
  return (
    <>
      <div className='mx-3 my-8 md:mt-32'>
        <p className='text-center text-3xl font-bold text-primaryColor my-3 md:text-4xl'> A Superior Guest Experience</p>
        <p className='text-center text-xl leading-8 text-text md:w-[42rem] md:mx-auto'>MeetLink's Visitor Management System is a fully integrated solution designed to reduce the operational costs associated with workplace entry and establish a secure environment for visitors and employees.</p>
      </div>

      <div className='mx-5 md:flex md:justify-between md:mx-32'>
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

      <Features style='md:flex md:flex-row-reverse' img='images/homepage.png' title='Integrate Your Access Control System' content='Effortlessly synchronize visitor and employee data with your access control system, enabling seamless integration. Employ the convenience of unique QR codes or Access Codes to grant access precisely when needed. Securities or staffs can stay informed in real-time about the presence of individuals within the premises. Bid farewell to any concerns about unauthorized access. Indeed, as the famous saying goes, "Peter has left the building."' />
      <Features style='md:flex' img='images/id-scan.png' title='Secure the Workplace. Protect User Data.' content='Proxyclick’s facial recognition technology, international watchlists, and pre-arrival check-in requirements ensure workplace security and compliance. Proxyclick is also SOC 2 Type II and ISO 27001 certified to demonstrate our commitment to safely managing user data and their privacy.' />
    </>
  )
}
