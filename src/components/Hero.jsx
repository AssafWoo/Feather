import EmailSignup from './EmailSignup'
import { ChevronDown } from 'lucide-react'

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
      const intensity = imageAnim.intensity || 'subtle'
      if (intensity === 'strong') return 'animate-gentle-float'
      if (intensity === 'medium') return 'animate-gentle-float'
      return 'animate-gentle-float'
    }
    return ''
  }
  
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center snap-start ${
        config.backgroundImage
          ? 'bg-cover bg-center'
          : `bg-gradient-to-br ${gradient.from} ${gradient.to}`
      }`}
      style={
        config.backgroundImage
          ? { backgroundImage: `url(${config.backgroundImage})` }
          : {}
      }
    >
      {/* Floating Geometric Shapes Background */}
      {animations.enabled !== false && animations.geometricShapes?.enabled !== false && (
        <FloatingShapes shapes={animations.geometricShapes?.shapes || []} />
      )}
      
      {config.backgroundImage && (
        <div className={`absolute inset-0 ${config.backgroundOverlay || 'bg-black/20'}`} style={{ zIndex: 2 }}></div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full flex-1 flex items-center">
        <div className="flex items-start gap-8 relative w-full">
          {/* Left Content - 65% */}
          <div className="w-[65%] relative">
            {badge.enabled !== false && badge.text && (
              <div 
                className={`inline-flex items-center px-3 py-1 rounded-full ${badge.bgColor || 'bg-gray-100'} border ${badge.borderColor || 'border-gray-200'} mb-6 ${getTextAnimationClass()}`}
                style={{ animationDelay: `${(textAnim.delay || 200) - 100}ms` }}
              >
                <span className={`text-xs font-medium ${badge.textColor || 'text-gray-700'}`}>{badge.text}</span>
              </div>
            )}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 leading-tight ${getTextAnimationClass()}`}
              style={{ animationDelay: `${textAnim.delay || 200}ms` }}
            >
              {config.title}
            </h1>
            <p 
              className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 ${getTextAnimationClass()}`}
              style={{ animationDelay: `${(textAnim.delay || 200) + 200}ms` }}
            >
              {config.subtitle}
            </p>
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
              <div className="absolute left-0 top-full mt-4 z-20" style={{ width: '85%' }}>
                <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} />
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className={`${config.rightImageWidth || 'w-[35%]'} flex items-start justify-center relative`}>
            {config.rightImage ? (
              <img
                src={config.rightImage}
                alt={config.rightImageAlt || "Hero Image"}
                className={`w-full h-auto object-contain ${getImageAnimationClass()} ${getTextAnimationClass()}`}
                style={{ animationDelay: `${(textAnim.delay || 200) + 400}ms` }}
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image placeholder</span>
              </div>
            )}
          </div>
        </div>
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
