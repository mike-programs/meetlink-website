import React from 'react'
import Button from './Button'



export default function Card() {
    return (
        <>
            <div className='mx-4 bg-primaryColor text-white p-16 text-center md:mx-28 md:my-28'>
                <div className='font-bold'>
                    <p className='text-3xl'>An Elevated Guest Experience</p>
                    <p className='leading-[3rem] text-xl mt-9'>Configure MeetLink to pre-screen visitors, advance guest credentials, and let people into the workspace based on predetermined conditions.</p>
                </div>
                <Button classNames='bg-white text-primaryColor w-40 mx-auto p-3 rounded-full mt-9 font-bold' text='Book your demo' />
            </div>


        </>
    )
}
