import { useEffect, useRef, useState } from 'react'

const Problem = ({ config }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const styles = config?.styles || {}

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!config?.enabled) return null

  const items = config.items || []

  return (
    <section
      id={config.id || "problem"}
      ref={sectionRef}
      aria-label={config.title || "The problem"}
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-white'} relative overflow-hidden min-h-screen snap-start flex items-center`}
      style={{ scrollSnapStop: 'always' }}
    >
      {/* Background decoration */}
      <div className={`absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 ${styles.decorationColor || 'bg-slate-100'} rounded-full blur-3xl opacity-30`} />
      <div className={`absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 ${styles.decorationColor || 'bg-slate-100'} rounded-full blur-3xl opacity-30`} />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Section Title */}
        <div 
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium ${styles.titleColor || 'text-slate-950'} mb-4`}>
            {config.title?.split(' ').map((word, index) => {
              const highlightWord = config.highlightWord || 'problem'
              if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
                return (
                  <span key={index}>
                    <span className={styles.highlightColor || 'text-red-500'}>{word}</span>{' '}
                  </span>
                )
              }
              return <span key={index}>{word} </span>
            })}
          </h2>
          {config.subtitle && (
            <p className={`text-base sm:text-lg ${styles.subtitleColor || 'text-slate-600'} max-w-2xl mx-auto font-medium`}>
              {config.subtitle}
            </p>
          )}
          {config.subtitleLine2 && (
            <p className={`text-sm sm:text-base ${styles.subtitleColor || 'text-slate-500'} max-w-2xl mx-auto mt-2`}>
              {config.subtitleLine2}
            </p>
          )}
        </div>

        {/* Problem Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.cardBg || 'bg-white'} rounded-xl p-5 sm:p-6 border ${styles.cardBorder || 'border-slate-200'} transition-all duration-300 hover:shadow-md`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${0.2 + index * 0.1}s`
              }}
            >
              <h3 className={`text-base sm:text-lg font-semibold ${styles.itemTitleColor || 'text-slate-900'} mb-2`}>
                {item.title}
              </h3>
              <p className={`text-sm ${styles.itemDescriptionColor || 'text-slate-500'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        {config.closingStatement && (
          <div 
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.6s ease-out 0.6s'
            }}
          >
            <p className={`text-lg sm:text-xl font-medium ${styles.highlightColor || 'text-red-600'} max-w-2xl mx-auto`}>
              {config.closingStatement}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Problem
