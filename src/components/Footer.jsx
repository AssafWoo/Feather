const Footer = ({ config }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-2">{config.companyName}</h3>
            <p className="text-sm text-gray-600">{config.tagline}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {config.links?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              {config.social?.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
