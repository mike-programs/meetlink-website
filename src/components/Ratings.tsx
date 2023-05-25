import React from 'react'

const reviewItems = [{
    img: 'images/capterra-logo.png',
    reviews: ['images/star.png', 'images/star.png', 'images/star.png', 'images/star.png', 'images/half-star.png'],
    rating: '4.6/5',
    based: 'Based on 300+ reviews',
    width: 'w-36'
},
{
    img: 'images/crowd-logo.png',
    reviews: ['images/star.png', 'images/star.png', 'images/star.png', 'images/star.png', 'images/half-star.png'],
    rating: '4.7/5',
    based: 'Based on 300+ reviews',
    width: 'w-12 mx-auto'
}]
export default function Ratings() {
    return (
        <>
            <div className='max-w-3xl mx-auto px-3 md:px-0 my-28 md:my-0'>
                <p className='text-4xl font-bold text-center text-primaryColor'>"Welcome to the New Era of Visitor Managment." -Mr Sam</p>
                <p className='text-lg text-center text-primaryColor font-bold mt-8'>Don’t take our word for it. Read our reviews, <span className='text-buttonColor underline'>like this one by Emilio,</span> and see how we stack up on Capterra and G2</p>
            </div>
            <div className='p-7'>
                <div className='md:flex md:mx-auto md:w-[60rem]'>
                    {reviewItems.map((reviewItem, index) => (
                        <div className='w-36 mx-auto mt-9'>
                            <div className={'mb-8 ' + reviewItem.width}>
                                <img key={index} src={reviewItem.img} alt='alt' />
                            </div>

                            <div className='w-6 flex center mb-4 ml-3' >
                                {reviewItem.reviews.map((review) => (
                                    <img key={index} src={review} />
                                ))}
                            </div>

                            <div>
                                <p className='text-4xl font-bold text-primaryColor text-center mb-3'>{reviewItem.rating}</p>
                                <p className='text-center text-text'>{reviewItem.based}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
