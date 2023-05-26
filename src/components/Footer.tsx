import React from 'react'
import { footers } from './Arrays'

export default function Footer() {
    return (
        <>
            <div className='bg-primaryColor'>
                <div className='p-5 flex flex-wrap md:flex-nowrap gap-9 md:gap-20 md:px-32'>
                    {footers.map((content, index) => (
                        <div key={index} className="w-[40%] md:w-[20%] mt-12">
                            <p className='text-white text-xl'>{content.title}</p>
                            {content.links.map((link, index) => (
                                <p className='text-text my-2 hover:text-white cursor-pointer duration-300'>{link}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className=''>
                    <hr className='md:w-[40rem] lg:w-[68rem] mx-auto lg:my-3' />

                    <div className='flex md:flex-row py-4 '>
                        <div className='w-10 my-auto md:my-0 ml-5 md:ml-32 lg:mr-5'>
                            <img src="images/puzzle.png" alt="logo" />
                        </div>
                        <p className='text-white my-auto mr-6'>© 2023 MeetLink</p>
                        <div className='flex text-white gap-3 my-auto flex-col md:flex-row'>
                            <p>Privacy policy</p>
                            <p>Terms and conditions</p>
                            <p>Cookie statement</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
