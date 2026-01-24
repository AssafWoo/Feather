import EmailSignup from './EmailSignup'
import { ChevronDown } from 'lucide-react'

// Floating Circles with Icons and Connecting Lines Component
const FloatingCircles = ({ config }) => {
  if (!config?.enabled || !config?.circles?.length) return null

  const circles = config.circles || []
  const connections = config.connections || []
  const styles = config.styles || {}

  // Calculate path between two circles using quadratic bezier curve
  const getConnectionPath = (fromCircle, toCircle) => {
    if (!fromCircle || !toCircle) return null

    const fromX = fromCircle.x
    const fromY = fromCircle.y
    const toX = toCircle.x
    const toY = toCircle.y

    // Calculate control point for smooth curve
    const midX = (fromX + toX) / 2
    const midY = (fromY + toY) / 2
    
    // Offset the control point perpendicular to the line for a nice curve
    const dx = toX - fromX
    const dy = toY - fromY
    const perpX = -dy * 0.3
    const perpY = dx * 0.3
    
    const controlX = midX + perpX
    const controlY = midY + perpY

    return `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
      {/* SVG Connecting Lines */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connections.map((connection, index) => {
          const fromCircle = circles.find(c => c.id === connection.from)
          const toCircle = circles.find(c => c.id === connection.to)
          const path = getConnectionPath(fromCircle, toCircle)
          
          if (!path) return null
          
          return (
            <path
              key={index}
              d={path}
              stroke={styles.lineColor || '#7C3AED'}
              strokeWidth="0.15"
              fill="none"
              opacity={styles.lineOpacity || 0.2}
              strokeLinecap="round"
            />
          )
        })}
      </svg>

      {/* Floating Circles with Icons */}
      {circles.map((circle, index) => {
        const size = circle.size || 48
        const iconSize = size * 0.5
        const shouldAnimate = circle.animated !== false // Default to animated unless explicitly set to false
        
        return (
          <div
            key={circle.id || index}
            className="absolute"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              transform: 'translate3d(-50%, -50%, 0)',
              zIndex: 10,
              willChange: shouldAnimate ? 'transform' : 'auto',
            }}
          >
            <div
              style={{
                ...(shouldAnimate ? {
                  animation: `float ${18 + index * 2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                  willChange: 'transform',
                } : {}),
              }}
            >
              {/* Circle container */}
              <div
                className={`rounded-full flex items-center justify-center ${styles.circleBg || 'bg-white/80 backdrop-blur-sm'} ${styles.circleShadow || 'shadow-lg shadow-slate-200/50'}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: 'translateZ(0)',
                }}
              >
              {/* Icon */}
              {typeof circle.icon === 'string' ? (
                <img
                  src={circle.icon}
                  alt=""
                  style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                  className="opacity-70"
                />
              ) : (
                <circle.icon 
                  style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    color: circle.color || '#64748b'
                  }}
                  className="opacity-80"
                />
              )}
              </div>
              
              {/* Optional Badge */}
              {circle.badge && (
                <span
                  className={`absolute -top-1 -right-1 ${styles.badgeBg || 'bg-[#7C3AED]'} ${styles.badgeText || 'text-white'} text-xs font-medium px-1.5 py-0.5 rounded-full`}
                  style={{ fontSize: '10px' }}
                >
                  {circle.badge}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Floating Geometric Shapes Component
const FloatingShapes = ({ shapes }) => {
  if (!shapes || shapes.length === 0) return null

  const renderShape = (shape, index) => {
    const style = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity || 0.1,
      animation: `float ${shape.duration || 20}s ease-in-out infinite`,
      animationDelay: `${shape.delay || 0}s`,
      pointerEvents: 'none',
      zIndex: 1,
      willChange: 'transform',
      transform: 'translate3d(0, 0, 0)',
    }

    if (shape.type === 'circle') {
      return (
        <div
          key={index}
          className="rounded-full"
          style={{ ...style, backgroundColor: shape.color }}
        />
      )
    } else if (shape.type === 'triangle') {
      // Remove opacity from style for SVG, use it only on the polygon
      const svgStyle = { ...style }
      delete svgStyle.opacity
      return (
        <svg
          key={index}
          width={shape.size}
          height={shape.size}
          style={svgStyle}
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,0 100,100 0,100"
            fill={shape.color}
            opacity={shape.opacity}
          />
        </svg>
      )
    } else if (shape.type === 'hexagon') {
      // Remove opacity from style for SVG, use it only on the polygon
      const svgStyle = { ...style }
      delete svgStyle.opacity
      return (
        <svg
          key={index}
          width={shape.size}
          height={shape.size}
          style={svgStyle}
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,0 100,25 100,75 50,100 0,75 0,25"
            fill={shape.color}
            opacity={shape.opacity}
          />
        </svg>
      )
    }
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {shapes.map((shape, index) => renderShape(shape, index))}
    </div>
  )
}

const Hero = ({ config }) => {
  const gradient = config.gradient || { from: "from-slate-50", to: "to-gray-100" }
  const scrollIndicator = config.scrollIndicator || {}
  const badge = config.badge || {}
  const animations = config.animations || {}
  const textAnim = animations.textAnimation || {}
  const imageAnim = animations.imageAnimation || {}
  
  // Get animation classes
  const getTextAnimationClass = () => {
    if (textAnim.enabled === false) return ''
    return 'animate-fade-in-up'
  }
  
  const getImageAnimationClass = () => {
    if (imageAnim.enabled === false || imageAnim.type === 'none') return ''
    if (imageAnim.type === 'pulse') return 'animate-pulse-subtle'
    if (imageAnim.type === 'float') {
      return 'animate-slow-move'
    }
    return ''
  }
  
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className={`relative h-screen flex flex-col items-center snap-start ${
        config.backgroundImage
          ? 'bg-cover bg-center'
          : `bg-gradient-to-br ${gradient.from} ${gradient.via || ''} ${gradient.to}`
      }`}
      style={{
        ...(config.backgroundImage ? { backgroundImage: `url(${config.backgroundImage})` } : {}),
        scrollSnapStop: 'always',
      }}
    >
      {/* Floating Geometric Shapes Background */}
      {animations.enabled !== false && animations.geometricShapes?.enabled !== false && (
        <FloatingShapes shapes={animations.geometricShapes?.shapes || []} />
      )}
      
      {/* Floating Circles with Icons and Connecting Lines */}
      {config.floatingCircles?.enabled && (
        <FloatingCircles config={config.floatingCircles} />
      )}
      
      {config.backgroundImage && (
        <div className={`absolute inset-0 ${config.backgroundOverlay || 'bg-black/20'}`} style={{ zIndex: 2 }}></div>
      )}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center justify-center`} style={{ paddingTop: config.topPadding || '4rem' }}>
        {/* Centered Layout */}
        {config.layout === 'centered' ? (
          <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto">
            {/* Floating Content Box */}
            <div 
              className={`${config.contentBox?.enabled !== false ? `${config.contentBox?.bg || 'bg-white/80 backdrop-blur-md'} ${config.contentBox?.shadow || 'shadow-xl shadow-slate-200/50'} ${config.contentBox?.border || 'border border-white/60'} ${config.contentBox?.rounded || 'rounded-2xl'} ${config.contentBox?.padding || 'px-8 py-10 sm:px-12 sm:py-14'}` : ''} relative`}
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              {/* Optional brand watermark in content box */}
              {config.contentBox?.brandName && (
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    <span className="text-slate-900">{config.contentBox.brandName}</span>
                    <span style={{ color: config.contentBox.brandAccentColor || '#7C3AED' }}>.</span>
                  </span>
                </div>
              )}
              {badge.enabled !== false && badge.text && (
                <div 
                  className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full ${badge.bgColor || 'bg-gray-100'} border ${badge.borderColor || 'border-gray-200'} mb-4 sm:mb-6 ${getTextAnimationClass()}`}
                  style={{ 
                    animationDelay: `${(textAnim.delay || 200) - 100}ms`,
                    opacity: textAnim.enabled === false ? 1 : 0
                  }}
                >
                  <span className={`text-xs font-medium ${badge.textColor || 'text-gray-700'}`}>{badge.text}</span>
                </div>
              )}
              <h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ${config.titleColor || 'text-gray-900'} mb-4 sm:mb-6 leading-tight ${getTextAnimationClass()}`}
                style={{ 
                  animationDelay: `${textAnim.delay || 200}ms`,
                  opacity: textAnim.enabled === false ? 1 : 0
                }}
              >
                {config.title}
              </h1>
              <p 
                className={`text-sm sm:text-base md:text-lg lg:text-xl ${config.subtitleColor || 'text-gray-600'} ${config.subtitleLine2 ? 'mb-3 sm:mb-4' : 'mb-6 sm:mb-8'} max-w-2xl mx-auto ${getTextAnimationClass()}`}
                style={{ 
                  animationDelay: `${(textAnim.delay || 200) + 300}ms`,
                  opacity: textAnim.enabled === false ? 1 : 0
                }}
              >
                {config.subtitle}
              </p>
              {config.subtitleLine2 && (
                <p 
                  className={`text-sm sm:text-base md:text-lg ${config.subtitleColor || 'text-gray-600'} mb-6 sm:mb-8 max-w-2xl mx-auto ${getTextAnimationClass()}`}
                  style={{ 
                    animationDelay: `${(textAnim.delay || 200) + 450}ms`,
                    opacity: textAnim.enabled === false ? 1 : 0
                  }}
                >
                  {config.subtitleLine2}
                </p>
              )}
              {!config.showEmailSignup && (
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {config.primaryButton?.enabled && config.primaryButton && (
                    <a
                      href={config.primaryButton.link}
                      className={`px-6 py-2.5 ${config.primaryButton.bgColor || 'bg-gray-900'} ${config.primaryButton.textColor || 'text-white'} rounded-full text-sm font-normal ${config.primaryButton.hoverBg || 'hover:bg-gray-800'} transition-colors`}
                    >
                      {config.primaryButton.text}
                    </a>
                  )}
                  {config.secondaryButton?.enabled && config.secondaryButton && (
                    <a
                      href={config.secondaryButton.link}
                      className={`px-6 py-2.5 bg-transparent border ${config.secondaryButton.borderColor || 'border-gray-300'} ${config.secondaryButton.textColor || 'text-gray-700'} rounded-full text-sm font-normal ${config.secondaryButton.hoverBg || 'hover:bg-gray-50'} transition-colors`}
                    >
                      {config.secondaryButton.text}
                    </a>
                  )}
                </div>
              )}
              
              {/* Centered Email Signup */}
              {config.showEmailSignup && (
                <div className="w-full max-w-md mx-auto">
                  <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} source="hero_form" />
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Split Layout (default) */
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative w-full">
            {/* Left Content - 65% */}
            <div className="w-full md:w-[65%] relative" style={{ marginTop: config.contentTopMargin || '2rem' }}>
              {badge.enabled !== false && badge.text && (
                <div 
                  className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full ${badge.bgColor || 'bg-gray-100'} border ${badge.borderColor || 'border-gray-200'} mb-4 sm:mb-6 ${getTextAnimationClass()}`}
                  style={{ 
                    animationDelay: `${(textAnim.delay || 200) - 100}ms`,
                    opacity: textAnim.enabled === false ? 1 : 0
                  }}
                >
                  <span className={`text-xs font-medium ${badge.textColor || 'text-gray-700'}`}>{badge.text}</span>
                </div>
              )}
              <h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium ${config.titleColor || 'text-gray-900'} mb-3 sm:mb-4 leading-tight ${getTextAnimationClass()}`}
                style={{ 
                  animationDelay: `${textAnim.delay || 200}ms`,
                  opacity: textAnim.enabled === false ? 1 : 0
                }}
              >
                {config.title}
              </h1>
              <p 
                className={`text-sm sm:text-base md:text-lg lg:text-xl ${config.subtitleColor || 'text-gray-600'} ${config.subtitleLine2 ? 'mb-2 sm:mb-3' : 'mb-6 sm:mb-8'} ${getTextAnimationClass()}`}
                style={{ 
                  animationDelay: `${(textAnim.delay || 200) + 300}ms`,
                  opacity: textAnim.enabled === false ? 1 : 0
                }}
              >
                {config.subtitle}
              </p>
              {config.subtitleLine2 && (
                <p 
                  className={`text-sm sm:text-base md:text-lg lg:text-xl ${config.subtitleColor || 'text-gray-600'} mb-6 sm:mb-8 ${getTextAnimationClass()}`}
                  style={{ 
                    animationDelay: `${(textAnim.delay || 200) + 450}ms`,
                    opacity: textAnim.enabled === false ? 1 : 0
                  }}
                >
                  {config.subtitleLine2}
                </p>
              )}
              {!config.showEmailSignup && (
                <div className="flex flex-col sm:flex-row gap-3">
                  {config.primaryButton?.enabled && config.primaryButton && (
                    <a
                      href={config.primaryButton.link}
                      className={`px-6 py-2.5 ${config.primaryButton.bgColor || 'bg-gray-900'} ${config.primaryButton.textColor || 'text-white'} rounded-full text-sm font-normal ${config.primaryButton.hoverBg || 'hover:bg-gray-800'} transition-colors`}
                    >
                      {config.primaryButton.text}
                    </a>
                  )}
                  {config.secondaryButton?.enabled && config.secondaryButton && (
                    <a
                      href={config.secondaryButton.link}
                      className={`px-6 py-2.5 bg-transparent border ${config.secondaryButton.borderColor || 'border-gray-300'} ${config.secondaryButton.textColor || 'text-gray-700'} rounded-full text-sm font-normal ${config.secondaryButton.hoverBg || 'hover:bg-gray-50'} transition-colors`}
                    >
                      {config.secondaryButton.text}
                    </a>
                  )}
                </div>
              )}
              
              {/* Floating Email Signup - Positioned below subtitle, extends into image area */}
              {config.showEmailSignup && (
                <div className="relative md:absolute left-0 top-full mt-4 z-20 w-full md:w-[85%]">
                  <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} source="hero_form" />
                </div>
              )}
            </div>

            {/* Right Image/Video */}
            <div 
              className="w-full md:w-[35%] flex items-start justify-center relative overflow-hidden -mt-24 md:mt-0 md:-mt-8"
            >
              {config.rightVideo ? (
                <div
                  className="w-full"
                  style={{
                    ...(imageAnim.enabled !== false && imageAnim.type === 'float' ? {
                      animation: `slowMove 8s ease-in-out infinite`,
                      animationDelay: textAnim.enabled === false ? '0s' : `${((textAnim.delay || 200) + 500 + 1000) / 1000}s`
                    } : {})
                  }}
                >
                  <video
                    src={config.rightVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                    style={{ 
                      mixBlendMode: config.videoBlendMode || 'normal',
                      filter: config.videoFilter || 'none',
                      transform: config.imageScale ? `scale(${config.imageScale})` : 'scale(1.3)',
                      transformOrigin: 'center center',
                      opacity: textAnim.enabled === false ? 1 : 0,
                      animation: textAnim.enabled === false ? 'none' : `fadeInImage 1s ease-out ${(textAnim.delay || 200) + 500}ms forwards`
                    }}
                  />
                </div>
              ) : config.rightImage ? (
                <div 
                  className="relative w-full overflow-hidden" 
                  style={{ 
                    aspectRatio: config.imageAspectRatio || 'auto',
                    height: config.imageHeight || 'auto',
                    maxHeight: config.imageMaxHeight || 'none',
                    ...(imageAnim.enabled !== false && imageAnim.type === 'float' ? {
                      animation: `slowMove 8s ease-in-out infinite`,
                      animationDelay: textAnim.enabled === false ? '0s' : `${((textAnim.delay || 200) + 500 + 1000) / 1000}s`
                    } : {})
                  }}
                >
                  <img
                    src={config.rightImage}
                    alt={config.rightImageAlt || "Hero Image"}
                    className="w-full h-full object-cover"
                    style={{ 
                      transform: config.imageScale ? `scale(${config.imageScale})` : 'scale(1.3)',
                      transformOrigin: config.imageTransformOrigin || 'center center',
                      objectPosition: config.imagePosition || 'center center',
                      opacity: textAnim.enabled === false ? 1 : 0,
                      animation: textAnim.enabled === false ? 'none' : `fadeInImage 1s ease-out ${(textAnim.delay || 200) + 500}ms forwards`
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
      
      {/* More? Indicator - Peeking from below */}
      {scrollIndicator.enabled !== false && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          {/* More? text above the dark band */}
          <span className={`${scrollIndicator.textColor || 'text-gray-900'} ${scrollIndicator.textSize || 'text-sm'} font-medium mb-0.5`}>
            {scrollIndicator.text || 'More?'}
          </span>
          
          {/* Wide, shallow dark curved band peeking up - bell curve shape */}
          <div className="relative" style={{ 
            width: `${scrollIndicator.curveWidth || 320}px`, 
            height: `${scrollIndicator.curveHeight || 20}px` 
          }}>
            <svg 
              width={scrollIndicator.curveWidth || 320}
              height={scrollIndicator.curveHeight || 20}
              viewBox={`0 0 ${scrollIndicator.curveWidth || 320} ${scrollIndicator.curveHeight || 20}`}
              className="absolute"
              style={{ top: 0, left: 0 }}
            >
              <path 
                d="M 0 20 C 100 20, 159.5 7, 160 7 C 160.5 7, 220 20, 320 20 L 320 20 L 0 20 Z" 
                fill={scrollIndicator.curveColor || '#111827'}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '7px' }}>
              <ChevronDown className={`${scrollIndicator.arrowSize || 'w-3.5 h-3.5'} ${scrollIndicator.arrowColor || 'text-white'}`} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
