const navItems = [
  { link: "Why Meetlink", url: "/" },
  { link: "Product", url: "/" },
  { link: "Solution", url: "/" },
  { link: "Pricing", url: "/" },
  { link: "Resources", url: "/" },
];

const footers = [
  {
    title: "Product",
    links: [
      "Compliance",
      "Security",
      "Efficiency",
      "Branding",
      "Enterprise services",
      "Integrations",
      "All features",
      "Pricing",
    ],
  },
  {
    title: "Company",
    links: [
      "Our story",
      "Join our team",
      "Customers",
      "Partners",
      "How we handle security",
    ],
  },
  {
    title: "Resources",
    links: ["Help center", "Downloads"],
  },
  {
    title: "Contact Us",
    links: ["Contact"],
  },
];

const cards = [
  {
    img: "images/proxyclick-self-check-in.svg",
    title: "Autonomous Check In",
    list: ["- Custom Guest Badge", "- eSign NDAs and other docs"],
  },
  {
    img: "images/administrative.svg",
    title: "Operations and Administration",
    list: [
      "- Logbook",
      "- Workplace Security",
      "- Enterprise customization",
      "- Data Security and Compliance",
      "-Identity Management",
    ],
  },
  {
    img: "images/proxyclick-interogations.svg",
    title: "Workplace Integrations",
    list: [
      "-Access Control",
      "- Future of Work applications",
      "- Hybrid Work",
      "- Facility Management",
      "- Slack, Teams, Cisco",
    ],
  },
];

export default navItems;
export { footers };
export { cards };
