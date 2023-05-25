import React from 'react'
import Button from './Button'
import navItems from './Arrays'

export default function Nav() {
    return (
        <>
            <div className='flex justify-between p-4 bg-lightBlue md:px-20'>
                <div className='w-32 self-center'>
                    <img src='./images/proxy-logo.png' alt='proxy click logo' />
                </div>

                <div className='flex gap-16'>
                    <div className='hidden lg:flex md:items-center'>
                        <ul className='flex items-center gap-12 text-buttonColor font-bold'>
                            {navItems.map((navItem, index) => {
                                return (<li>{navItem}</li>)
                            })}
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='hidden md:flex md:gap-3'>
                            <Button classNames='inline-block text-md text-white bg-buttonColor w-38 px-3 py-3 rounded-full my-6 lg:my-2' text='Book a demo' />
                            <Button classNames='inline-block text-md text-buttonColor border-buttonColor border w-38 px-3 py-3 rounded-full my-6 lg:my-2' text='Login' />
                        </div>
                        <div className='flex py-7 lg:hidden'>
                            <div className='self-center'><img width="32" height="32" src="https://img.icons8.com/windows/32/grip-lines.png" alt="grip-lines" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// color: 13138A, highlighted-button: 1D1DCD, card: 0A0A47