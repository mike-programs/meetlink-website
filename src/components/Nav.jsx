import React from 'react'
import Button from './Button'

export default function Nav() {
    return (
        <>
            <div className='flex justify-between p-4 bg-lightBlue md:px-20'>
                <div className='w-32 self-center'>
                    <img src='./images/proxy-logo.png' alt='proxy click logo' />
                </div>
                <div className='flex'>
                    <div className='hidden md:flex'>
                        <Button classNames='inline-block text-md text-white bg-buttonColor w-38 px-3 py-3 rounded-full my-6' text='Book a demo' />
                        <Button classNames='inline-block text-md text-primaryColor border-red-500 bg-none w-38 px-3 py-3 rounded-full my-6' text='Login' />
                    </div>
                    <div className='flex py-7 lg:hidden'>
                        <div className='self-center'><img width="32" height="32" src="https://img.icons8.com/windows/32/grip-lines.png" alt="grip-lines" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}


// color: 13138A, highlighted-button: 1D1DCD, card: 0A0A47