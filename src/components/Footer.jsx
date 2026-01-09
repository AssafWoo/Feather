const Footer = ({ config }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">{config.companyName}</h3>
            <p className="text-gray-400">{config.tagline}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {config.links?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {config.social?.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{config.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
