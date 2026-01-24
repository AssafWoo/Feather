import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ config }) => {
  const navigate = useNavigate()
  if (!config?.enabled) return null

  const styles = config.styles || {}

  const handleNavClick = useCallback(
    (e, href) => {
      if (!href) return

      // In-page anchor scroll
      if (href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        return
      }

      // Client-side route navigation for internal paths (/signup, /howitworks, etc.)
      if (href.startsWith('/')) {
        e.preventDefault()
        navigate(href)
      }
    },
    [navigate]
  )

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

  // Get navigation container classes
  const getNavContainerClasses = () => {
    const baseClasses = `${styles.navContainerBg || 'bg-gray-900'} rounded-full`
    // Perfect circle on mobile: equal padding and fixed square dimensions
    const mobileClasses = "p-2.5 w-10 h-10 flex items-center justify-center"
    // Pill shape on larger screens
    const desktopClasses = "sm:px-5 sm:py-0 sm:h-16 sm:w-auto lg:px-6"
    const widthClass = styles.navContainerWidth || 'w-1/2'
    
    // Handle common width classes (Tailwind needs full class names at build time)
    let widthClasses = ""
    if (widthClass === 'w-1/2') {
      widthClasses = "sm:w-1/2"
    } else if (widthClass === 'w-1/3') {
      widthClasses = "sm:w-1/3"
    } else if (widthClass === 'w-auto') {
      widthClasses = "sm:w-auto"
    } else if (widthClass === 'w-full') {
      widthClasses = "sm:w-full"
    }
    // If widthClass doesn't match common cases, default to w-1/2
    if (!widthClasses) {
      widthClasses = "sm:w-1/2"
    }
    
    return `${baseClasses} ${mobileClasses} ${desktopClasses} ${widthClasses}`
  }

  return (
    <header 
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Dark Navigation Container */}
          <div 
            className={getNavContainerClasses()}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-5 h-full w-full">
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
