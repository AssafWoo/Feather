import { useEffect, useState, useRef } from 'react'

const Integrations = ({ config }) => {
  const styles = config.styles || {}
  const cardStyles = config.cardStyles || {}
  const layout = config.layout || 'grid' 
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Add structured data for integrations
  useEffect(() => {
    if (config.items && config.items.length > 0) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": config.title || "Integrations",
        "description": config.subtitle || "",
        "itemListElement": config.items.map((integration, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": integration.name,
            "description": integration.description,
            "applicationCategory": integration.category || "DataScienceApplication"
          }
        }))
      }

      const existingScript = document.getElementById('integrations-structured-data')
      if (existingScript) existingScript.remove()

      const script = document.createElement('script')
      script.id = 'integrations-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        const scriptToRemove = document.getElementById('integrations-structured-data')
        if (scriptToRemove) scriptToRemove.remove()
      }
    }
  }, [config.items, config.title, config.subtitle])

  // Intersection Observer for animations
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const renderCenterLayout = () => {
    // Split items into left and right groups
    const leftItems = config.items?.slice(0, 2) || []
    const rightItems = config.items?.slice(2, 4) || []

    return (
      <div className="relative w-full max-w-6xl mx-auto hidden lg:block h-[450px]">
        {/* Connecting Lines SVG */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-in 0.5s'
          }}
        >
          {/* Left Curve: Starts center-left, curves to top-left and bottom-left items */}
          {/* We use a path that looks like a brace or C-shape facing right */}
          {/* M startX startY Q controlX controlY endX endY */}
          {/* Coordinates are approximate percentages */}
          <path 
            d="M 320 80 Q 450 225 320 370" 
            fill="none"  
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className="lg:block hidden"
          />
           {/* Connector to Center Left */}
           <path 
            d="M 400 225 L 512 225" 
            fill="none"  
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 8"
            strokeLinecap="round"
          />

          {/* Right Curve: Starts center-right, curves to top-right and bottom-right items */}
          <path 
            d="M 830 80 Q 700 225 830 370" 
            fill="none"  
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className="lg:block hidden"
          />
          {/* Connector to Center Right */}
          <path 
            d="M 640 225 L 750 225" 
            fill="none"  
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex justify-between items-center h-full w-full relative z-10">
          
          {/* Left Column Items */}
          <div className="flex flex-col justify-between h-[380px] w-1/3 px-4">
            {leftItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-end gap-4 group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s ease-out ${0.4 + idx * 0.2}s`
                }}
              >
                {/* Content */}
                <div className="text-right">
                  <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-violet-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-[240px] ml-auto">
                    {item.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white shadow-md border-2 border-slate-100 flex items-center justify-center group-hover:border-violet-300 group-hover:scale-110 transition-all duration-300 z-20 relative">
                    {item.icon ? (
                      <div className="w-7 h-7 flex items-center justify-center">
                        <img 
                          src={item.icon} 
                          alt=""
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded bg-slate-200" />
                    )}
                  </div>
                  {/* Connector Dot */}
                  <div className="absolute top-1/2 -right-[22px] -translate-y-1/2 w-3 h-3 bg-white border-2 border-violet-300 rounded-full z-10" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Circle */}
          <div 
            className="w-80 h-80 shrink-0 rounded-full bg-gradient-to-br from-white to-slate-50 shadow-xl border border-slate-100 flex items-center justify-center overflow-hidden relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
             {/* Inner content of the circle */}
             <div className="absolute inset-0 bg-white opacity-10" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Better LLMs</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Grounded in explicit meaning</p>
            </div>
            
            {/* Decorative orbital rings */}
            <div className="absolute inset-0 border border-slate-100 rounded-full scale-[0.85]" />
            <div className="absolute inset-0 border border-slate-100 rounded-full scale-[0.7]" />
          </div>

          {/* Right Column Items */}
          <div className="flex flex-col justify-between h-[380px] w-1/3 px-4">
            {rightItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-start gap-4 group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.6s ease-out ${0.4 + idx * 0.2}s`
                }}
              >
                {/* Icon Circle */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white shadow-md border-2 border-slate-100 flex items-center justify-center group-hover:border-violet-300 group-hover:scale-110 transition-all duration-300 z-20 relative">
                    {item.icon ? (
                      <div className="w-7 h-7 flex items-center justify-center">
                        <img 
                          src={item.icon} 
                          alt=""
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded bg-slate-200" />
                    )}
                  </div>
                  {/* Connector Dot */}
                  <div className="absolute top-1/2 -left-[22px] -translate-y-1/2 w-3 h-3 bg-white border-2 border-violet-300 rounded-full z-10" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-violet-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    )
  }

  return (
    <section 
      id="integrations" 
      ref={sectionRef}
      aria-label={config.title || "Integrations"} 
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden snap-start`} 
      style={{ scrollSnapStop: 'always' }}
    >
      {/* Background Decoration */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${styles.decorationColor || 'bg-blue-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-15'}`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${styles.decorationColor || 'bg-purple-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-15'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Title */}
        <div 
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium ${styles.titleColor || 'text-gray-900'} mb-4`}>
            {config.title.split(' ').map((word, index) => {
              const highlightWord = config.highlightWord || 'Integrations'
              if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
                return (
                  <span key={index}>
                    <span className={styles.highlightColor || 'text-blue-600'}>{word}</span>{' '}
                  </span>
                )
              }
              return <span key={index}>{word} </span>
            })}
          </h2>
          <p className={`text-base ${styles.subtitleColor || 'text-gray-600'} max-w-2xl mx-auto`}>
            {config.subtitle}
          </p>
        </div>

        {/* Layout Switch: Center Layout on Desktop (if enabled), Grid on Mobile/Fallback */}
        {layout === 'radial' ? (
          <>
            {renderCenterLayout()}
            {/* Mobile Fallback for Radial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {config.items?.map((integration, index) => (
                <article
                  key={index}
                  className={`${cardStyles.defaultBg || 'bg-white'} rounded-lg p-4 border ${cardStyles.defaultBorder || 'border-gray-100'} shadow-sm flex flex-col items-start text-left`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      {integration.icon && (
                        <img src={integration.icon} alt="" className="w-5 h-5 object-contain" />
                      )}
                    </div>
                    <h3 className={`text-base font-semibold ${cardStyles.titleColor || 'text-gray-900'}`}>
                      {integration.name}
                    </h3>
                  </div>
                  <p className={`text-sm ${cardStyles.descriptionColor || 'text-gray-600'}`}>
                    {integration.description}
                  </p>
                </article>
              ))}
            </div>
          </>
        ) : (
          /* Default Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.items?.map((integration, index) => {
              return (
                <article
                  key={index}
                  className={`${cardStyles.defaultBg || 'bg-white'} rounded-lg p-4 border ${cardStyles.defaultBorder || 'border-gray-100'} ${cardStyles.defaultHoverBorder || 'hover:border-gray-200'} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start text-left`}
                >
                  <div className="mb-3">
                    {integration.icon ? (
                      <div className="w-6 h-6 flex items-center justify-start">
                        <img 
                          src={integration.icon} 
                          alt={`${integration.name} integration logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-gray-100">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-base font-semibold ${cardStyles.titleColor || 'text-gray-900'} mb-1.5`}>
                      {integration.name}
                    </h3>
                    {integration.description && (
                      <p className={`text-xs ${cardStyles.descriptionColor || 'text-gray-600'}`}>
                        {integration.description}
                      </p>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {/* Closing Statement */}
        {config.closingStatement && (
          <div 
            className="text-center mt-6 sm:mt-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.6s ease-out 1s'
            }}
          >
            <p className={`text-lg sm:text-xl font-medium ${styles.highlightColor || 'text-slate-700'} max-w-2xl mx-auto`}>
              {config.closingStatement}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Integrations
