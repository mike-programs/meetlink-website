import React from 'react'

const footer = [{
    title: 'Product',
    links: ['Compliance', 'Security', 'Efficiency', 'Branding', 'Enterprise services', 'Integrations', 'COVID-19 features', 'All features', 'Pricing', 'Store', 'Product updates']
},
{
    title: 'Company',
    links: ['Our story', 'Join our team', 'Customers', 'Partners', 'How we handle security']
},
{
    title: 'Resources',
    links: ['Help center', 'Return Ready resources', 'Visitor management guide', 'GDPR guide', 'Blog', 'Downloads', 'Webinars', 'API', 'System status', 'Refer a Friend']
},
{
    title: 'Contact Us',
    links: ['Contact']
}
]

export default function Footer() {
    return (
        <>
            <div className='bg-primaryColor p-3 flex flex-wrap md:flex-nowrap md:gap-20 md:px-32'>
                {footer.map((content, index) => (
                    <div key={index} className="w-[49%] md:w-[20%]">
                        <p className='text-white text-xl'>{content.title}</p>
                        {content.links.map((link, index) => (
                            <p className='text-text my-2'>{link}</p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
