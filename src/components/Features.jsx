import { useEffect } from 'react'

const Features = ({ config }) => {
  const items = config.items || []
  const styles = config.styles || {}
  const badge = config.badge || {}
  const illustration = config.illustration || {}
  
  // Layout type: 'classic' (default/Feather) or 'glassy' (Plain)
  const layout = config.layout || 'classic'

  // Default colors for illustration
  const primaryColor = illustration.primaryColor || '#D946EF'
  const secondaryColor = illustration.secondaryColor || '#EC4899'
  const tertiaryColor = illustration.tertiaryColor || '#F472B6'

  // Add structured data for features
  useEffect(() => {
    if (items.length > 0) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": config.title || "Features",
        "description": config.subtitle || "",
        "itemListElement": items.map((feature, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareFeature",
            "name": feature.title,
            "description": feature.description,
            "applicationCategory": "DataScienceApplication"
          }
        }))
      }

      const existingScript = document.getElementById('features-structured-data')
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement('script')
      script.id = 'features-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        const scriptToRemove = document.getElementById('features-structured-data')
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [items, config.title, config.subtitle])

  // Decorative spiral/wireframe illustration
  const DecorativeIllustration = () => (
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
      <defs>
        <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
        <linearGradient id="featherGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor={tertiaryColor} />
        </linearGradient>
      </defs>
      
      {/* Outer orbital rings */}
      {[0, 30, 60].map((rotation, i) => (
        <ellipse
          key={`orbit-${i}`}
          cx="200"
          cy="200"
          rx="170"
          ry="50"
          fill="none"
          stroke="url(#featherGradient)"
          strokeWidth="1"
          transform={`rotate(${rotation} 200 200)`}
          opacity={0.3 + i * 0.1}
        />
      ))}
      
      {/* Primary spiral rays */}
      {[...Array(36)].map((_, i) => {
        const angle = (i / 36) * Math.PI * 2
        const startRadius = 35
        const endRadius = 175
        const twist = 0.4
        const startX = 200 + Math.cos(angle) * startRadius
        const startY = 200 + Math.sin(angle) * startRadius
        const endX = 200 + Math.cos(angle + twist) * endRadius
        const endY = 200 + Math.sin(angle + twist) * endRadius
        const controlX = 200 + Math.cos(angle + twist * 0.5) * (endRadius * 0.6)
        const controlY = 200 + Math.sin(angle + twist * 0.5) * (endRadius * 0.6)
        
        return (
          <path
            key={`ray-${i}`}
            d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
            fill="none"
            stroke="url(#featherGradient)"
            strokeWidth={i % 3 === 0 ? "1.5" : "0.8"}
            opacity={0.4 + (i % 4) * 0.15}
            style={{
              animation: `pulse ${3 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.08}s`
            }}
          />
        )
      })}
      
      {/* Secondary counter-spiral */}
      {[...Array(18)].map((_, i) => {
        const angle = (i / 18) * Math.PI * 2
        const startRadius = 60
        const endRadius = 140
        const twist = -0.3
        const startX = 200 + Math.cos(angle) * startRadius
        const startY = 200 + Math.sin(angle) * startRadius
        const endX = 200 + Math.cos(angle + twist) * endRadius
        const endY = 200 + Math.sin(angle + twist) * endRadius
        
        return (
          <line
            key={`counter-${i}`}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="url(#featherGradient2)"
            strokeWidth="0.5"
            opacity={0.3}
          />
        )
      })}
      
      {/* Accent ellipse */}
      <ellipse
        cx="200"
        cy="200"
        rx="160"
        ry="55"
        fill="none"
        stroke="url(#featherGradient)"
        strokeWidth="2.5"
        transform="rotate(-25 200 200)"
        opacity="0.85"
      />
      
      {/* Inner structure rings */}
      <circle cx="200" cy="200" r="90" fill="none" stroke="url(#featherGradient2)" strokeWidth="0.5" opacity="0.4" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="url(#featherGradient)" strokeWidth="1" opacity="0.5" />
      
      {/* Core elements */}
      <circle cx="200" cy="200" r="35" fill="none" stroke="url(#featherGradient)" strokeWidth="2" opacity="0.9" />
      <circle cx="200" cy="200" r="25" fill="none" stroke="url(#featherGradient2)" strokeWidth="1" opacity="0.7" />
      <circle cx="200" cy="200" r="8" fill="url(#featherGradient)" opacity="0.8" />
      
      {/* Floating accent dots */}
      {[
        { x: 280, y: 120, r: 4 },
        { x: 320, y: 180, r: 3 },
        { x: 100, y: 280, r: 5 },
        { x: 130, y: 140, r: 3 },
        { x: 300, y: 300, r: 4 },
        { x: 85, y: 200, r: 3 },
      ].map((dot, i) => (
        <circle
          key={`dot-${i}`}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill="url(#featherGradient)"
          opacity={0.5 + (i % 3) * 0.2}
          style={{
            animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
      
      {/* Connecting arcs */}
      <path
        d="M 120 200 Q 200 100 280 200"
        fill="none"
        stroke="url(#featherGradient)"
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="4 4"
      />
      <path
        d="M 120 200 Q 200 300 280 200"
        fill="none"
        stroke="url(#featherGradient2)"
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="4 4"
      />
    </svg>
  )

  // Render illustration based on config
  const renderIllustration = () => {
    if (!illustration.enabled) return null

    if (illustration.type === 'image' && illustration.imageSrc) {
      return (
        <img
          src={illustration.imageSrc}
          alt={illustration.imageAlt || 'Feature illustration'}
          className="w-full h-auto"
          loading="lazy"
        />
      )
    }

    return <DecorativeIllustration />
  }

  // ============================================
  // GLASSY LAYOUT (Plain style)
  // ============================================
  const renderGlassyLeftSide = () => (
    <div className="text-center lg:text-left bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-white/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className={`absolute top-0 right-0 w-64 h-64 ${styles.decorationColor || 'bg-fuchsia-100'} rounded-full blur-3xl opacity-20 -mr-32 -mt-32`}></div>
      <div className={`absolute bottom-0 left-0 w-64 h-64 ${styles.decorationColor || 'bg-fuchsia-100'} rounded-full blur-3xl opacity-20 -ml-32 -mb-32`}></div>
      
      {/* Decorative concentric lines matching Workflow circle style */}
      <div className="absolute inset-4 border border-slate-200/50 rounded-xl pointer-events-none" />
      <div className="absolute inset-8 border border-slate-200/50 rounded-lg pointer-events-none" />

      <div className="relative z-10">
        {/* Badge */}
        {badge.enabled !== false && (
          <div className={`inline-block px-4 py-1.5 ${badge.bgColor || 'bg-fuchsia-500'} ${badge.textColor || 'text-white'} text-xs font-semibold tracking-widest uppercase rounded mb-4 sm:mb-6 shadow-sm`}>
            {badge.text || config.title || 'Features'}
          </div>
        )}
        
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ${styles.titleColor || 'text-gray-900'} mb-4 sm:mb-6 leading-tight`}>
          {config.title.split(' ').map((word, index) => {
            const highlightWord = config.highlightWord || 'Features'
            if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
              return (
                <span key={index}>
                  <span className={styles.highlightColor || 'text-fuchsia-500'}>{word}</span>{' '}
                </span>
              )
            }
            return <span key={index}>{word} </span>
          })}
        </h2>
        
        <p className={`text-sm sm:text-base md:text-lg ${styles.subtitleColor || 'text-gray-600'} mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed`}>
          {config.subtitle}
        </p>
      </div>
    </div>
  )

  // ============================================
  // CLASSIC LAYOUT (Feather style)
  // ============================================
  const renderClassicLeftSide = () => (
    <div className="text-center lg:text-left">
      {/* Badge */}
      {badge.enabled !== false && (
        <div className={`inline-block px-4 py-1.5 ${badge.bgColor || 'bg-fuchsia-500'} ${badge.textColor || 'text-white'} text-xs font-semibold tracking-widest uppercase rounded mb-4 sm:mb-6`}>
          {badge.text || config.title || 'Features'}
        </div>
      )}
      
      {/* Title */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ${styles.titleColor || 'text-gray-900'} mb-4 sm:mb-6 leading-tight`}>
        {config.title.split(' ').map((word, index) => {
          const highlightWord = config.highlightWord || 'Features'
          if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
            return (
              <span key={index}>
                <span className={styles.highlightColor || 'text-fuchsia-500'}>{word}</span>{' '}
              </span>
            )
          }
          return <span key={index}>{word} </span>
        })}
      </h2>
      
      <p className={`text-sm sm:text-base md:text-lg ${styles.subtitleColor || 'text-gray-600'} mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0`}>
        {config.subtitle}
      </p>
      
      {/* Decorative Illustration - smaller to fit viewport */}
      <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] mx-auto lg:mx-0">
        {renderIllustration()}
      </div>
    </div>
  )

  return (
    <section id="why" aria-label={config.title || "Features"} className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-white'} relative overflow-hidden min-h-screen snap-start flex items-center`} style={{ scrollSnapStop: 'always' }}>
      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .feature-item {
          animation: fadeInRight 0.5s ease-out forwards;
          opacity: 0;
        }
        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side: Badge + Title + Illustration */}
          {layout === 'glassy' ? renderGlassyLeftSide() : renderClassicLeftSide()}
          
          {/* Right side: Feature list */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-7 mt-6 lg:mt-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="feature-item group flex gap-4 sm:block"
              >
                {/* Icon box */}
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 ${styles.iconBorderColor || 'border-fuchsia-200'} flex items-center justify-center sm:mb-4 ${styles.iconHoverBorderColor || 'group-hover:border-fuchsia-400'} ${styles.iconHoverBgColor || 'group-hover:bg-fuchsia-50'} transition-all duration-300`}>
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      style={{ filter: 'invert(34%) sepia(94%) saturate(4385%) hue-rotate(288deg) brightness(91%) contrast(95%)' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg sm:text-xl font-semibold ${styles.featureTitleColor || 'text-slate-900'} mb-1 sm:mb-2 ${styles.featureTitleHoverColor || 'group-hover:text-fuchsia-600'} transition-colors duration-300`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${styles.featureDescriptionColor || 'text-slate-600'} leading-relaxed`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features
