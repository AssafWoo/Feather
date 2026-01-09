import EmailSignup from './EmailSignup'

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

const CTA = ({ config }) => {
  const styles = config.styles || {}
  const animations = config.animations || {}
  
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-gray-900'} min-h-screen snap-start flex items-center relative`}>
      {/* Floating Geometric Shapes Background */}
      {animations.enabled !== false && animations.geometricShapes?.enabled !== false && (
        <FloatingShapes shapes={animations.geometricShapes?.shapes || []} />
      )}
      
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium ${styles.titleColor || 'text-white'} mb-3`}>
          {config.title}
        </h2>
        <p className={`text-base ${styles.subtitleColor || 'text-gray-300'} mb-6`}>
          {config.subtitle}
        </p>
        {config.showEmailSignup ? (
          <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} />
        ) : (
          config.button?.enabled !== false && config.button && (
            <a
              href={config.button.link}
              className={`inline-block px-6 py-2.5 ${styles.buttonBg || 'bg-white'} ${styles.buttonText || 'text-gray-900'} rounded-full text-sm font-normal ${styles.buttonHover || 'hover:bg-gray-100'} transition-colors`}
            >
              {config.button.text}
            </a>
          )
        )}
      </div>
    </section>
  )
}

export default CTA
