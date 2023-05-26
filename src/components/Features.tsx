import React from 'react'
import LearnMore from './LearnMore'

interface Props {
    title: string,
    content: string,
    img: string,
    style: string,
    alt: string
}

export default function Features(props: Props) {
    return (
        <>
            <div className={'mx-4 mt-28 md:justify-between md:mx-28 md:my-32 ' + props.style}>
                <div className='md:w-[40%] self-center'>
                    <p className='text-primaryColor text-3xl font-bold mb-8'>{props.title}</p>
                    <span className='text-text leading-7'>{props.content}</span>
                    <LearnMore />
                </div>
                <div className='mt-28 md:w-[50%] md:my-auto'>
                    <img src={props.img} alt={props.alt} />
                </div>
            </div>
        </>
    )
}
