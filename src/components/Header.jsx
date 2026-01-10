const Header = ({ config }) => {
  if (!config?.enabled) return null

  const styles = config.styles || {}

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Get responsive logo height classes
  // Use smaller height on mobile, then config height on md+
  const getLogoHeightClasses = () => {
    const defaultHeight = config.logoHeight || "h-8"
    // Map common heights to responsive classes
    const heightMap = {
      "h-8": "h-6 md:h-8",
      "h-10": "h-7 md:h-10",
      "h-12": "h-8 md:h-12",
      "h-14": "h-10 md:h-14",
      "h-16": "h-12 md:h-16",
    }
    return `${heightMap[defaultHeight] || "h-6 md:h-8"} w-auto`
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Dark Navigation Container */}
          <div className={`${styles.navContainerBg || 'bg-gray-900'} rounded-full px-4 sm:px-5 lg:px-6 ${styles.navContainerWidth || 'w-1/2'}`}>
            <div className="flex items-center gap-4 sm:gap-5 h-16">
              {/* Logo */}
              <div className="flex items-center">
                {config.logo ? (
                  <img
                    src={config.logo}
                    alt={config.logoAlt || "Logo"}
                    className={getLogoHeightClasses()}
                  />
                ) : (
                  <span className={`text-lg font-medium ${styles.navTextColor || 'text-white'}`}>
                    {config.logoText || "Logo"}
                  </span>
                )}
              </div>

              {/* Navigation */}
              {config.navLinks && config.navLinks.length > 0 && (
                <nav className="hidden md:flex items-center space-x-4">
                  {config.navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      onClick={(e) => handleNavClick(e, link.link)}
                      className={`text-sm ${styles.navTextColor || 'text-white'} ${styles.navHoverColor || 'hover:text-gray-300'} transition-colors`}
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>

          {/* Help and Contact - Outside the dark wrapper, pushed to the right */}
          <div className="flex items-center gap-5">
            {config.helpLink?.enabled !== false && config.helpLink && (
              <a
                href={config.helpLink.link}
                className={`text-sm ${styles.helpLinkColor || 'text-gray-900'} ${styles.helpLinkHover || 'hover:text-gray-700'} transition-colors`}
              >
                {config.helpLink.text}
              </a>
            )}
            {config.ctaButton?.enabled !== false && config.ctaButton && (
              <a
                href={config.ctaButton.link}
                onClick={(e) => handleNavClick(e, config.ctaButton.link)}
                className={`px-4 py-2 ${styles.ctaButtonBg || 'bg-amber-500'} ${styles.ctaButtonHover || 'hover:bg-amber-600'} ${styles.ctaButtonText || 'text-white'} rounded-full text-sm font-medium transition-colors`}
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
