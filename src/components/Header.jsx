const Header = ({ config }) => {
  if (!config?.enabled) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {config.logo ? (
              <img
                src={config.logo}
                alt={config.logoAlt || "Logo"}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-lg font-medium text-gray-900">
                {config.logoText || "Logo"}
              </span>
            )}
          </div>
          {config.navLinks && config.navLinks.length > 0 && (
            <nav className="hidden md:flex items-center space-x-6">
              {config.navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
