const footerLinks = [
  {
    title: "About",
    links: ["About Us", "Our Story"],
  },
  {
    title: "Help",
    links: ["Size Guide", "Track Orders", "Shipping Policy", "Returns"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQs"],
  },
]

export default function FooterLinks() {
  return (
    <section className="bg-rosebrown-100 flex justify-center border-t border-rosebrown-200">
      <div className=" max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 text-sm font-semibold text-rosebrown-800">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li
                  key={link}
                  className=" text-sm text-rosebrown-600 hover:text-rosebrown-800 cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
