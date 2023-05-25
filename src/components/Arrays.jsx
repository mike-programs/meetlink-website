const navItems = [
    {link: 'Why Meetlink', url: '/'},
    {link: 'Product', url: '/'},
    {link: 'Solution', url: '/'},
    {link: 'Pricing', url: '/'},
    {link: 'Resources', url: '/'},
]

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

const footers = [{
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


const logos = [{
    src: "images/airbnb.svg",
    alt: "AirBnb",
    style: "w-16"
},
{
    src: "images/logo.svg",
    alt: "Logo",
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

export default navItems
export { images }
export { footers }
export { reviewItems }
export { cards }
export { logos }