const Header = ({ config }) => {
  if (!config?.enabled) return null

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="flex justify-center px-4">
        <div className="max-w-6xl w-full flex items-center justify-between">
          {/* Dark Navigation Container */}
          <div className="bg-gray-900 rounded-full px-4 sm:px-6 lg:px-8 w-1/2">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                {config.logo ? (
                  <img
                    src={config.logo}
                    alt={config.logoAlt || "Logo"}
                    className="h-8 w-auto"
                  />
                ) : (
                  <span className="text-lg font-medium text-white">
                    {config.logoText || "Logo"}
                  </span>
                )}
              </div>

              {/* Navigation */}
              {config.navLinks && config.navLinks.length > 0 && (
                <nav className="hidden md:flex items-center space-x-8">
                  {config.navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="text-sm text-white hover:text-gray-300 transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>

          {/* Help and Contact - Outside the dark wrapper, pushed to the right */}
          <div className="flex items-center gap-6">
            {config.helpLink && (
              <a
                href={config.helpLink.link}
                className="text-sm text-gray-900 hover:text-gray-700 transition-colors"
              >
                {config.helpLink.text}
              </a>
            )}
            {config.ctaButton && (
              <a
                href={config.ctaButton.link}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-medium transition-colors"
              >
                {config.ctaButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
