import React from 'react'
import Button from './Button'
import { images } from './Arrays'



export default function HeroPage() {

    return (
        <>
            {/* use clip art for the background wave*/}
            <div className='bg-lightBlue px-3 sm:px-6 md:px-28'>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='md:w-1/2 md:mt-24'>
                        <p className='text-primaryColor font-bold text-3xl mb-6 pt-6'>Open Sesame</p>
                        <p className='text-text text-2xl'>You’ve struck gold! Welcome visitors into the workplace with an experience that doesn’t compromise the health, security, or compliance objectives of your company.</p>
                        <Button classNames='inline-block text-md text-white bg-buttonColor w-38 px-3 py-3 rounded-full my-6' text='Demo Proxyclick' />
                    </div>
                    <div className='md:w-2/3'>
                        <img src='images/mock.png' alt='hero' />
                    </div>

                </div>
                <p className='text-primaryColor font-bold text-center text-2xl my-12 md:my-32'>People check in to these companies with Proxyclick</p>

                <div className='flex justify-around pb-7 md:py-6'>
                    {images.map((image, index) => {
                        return <img key={index} className={image.style} src={image.src} alt={image.alt} />
                    })
                    }
                </div>
            </div>

        </>
    )
}
