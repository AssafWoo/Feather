import { useEffect } from 'react'

const Integrations = ({ config }) => {
  const styles = config.styles || {}
  const cardStyles = config.cardStyles || {}

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

      // Remove existing script if any
      const existingScript = document.getElementById('integrations-structured-data')
      if (existingScript) {
        existingScript.remove()
      }

      // Add new script
      const script = document.createElement('script')
      script.id = 'integrations-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        const scriptToRemove = document.getElementById('integrations-structured-data')
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [config.items, config.title, config.subtitle])

  return (
    <section id="integrations" aria-label={config.title || "Integrations"} className={`py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden min-h-screen snap-start flex items-center`}>
      {/* Different background decoration pattern - diagonal lines instead of circles */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${styles.decorationColor || 'bg-blue-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-15'}`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${styles.decorationColor || 'bg-purple-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-15'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Title with highlighted word */}
        <div className="text-center mb-16">
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

        {/* Grid layout - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.items?.map((integration, index) => {
            return (
              <article
                key={index}
                className={`${cardStyles.defaultBg || 'bg-white'} rounded-lg p-4 border ${cardStyles.defaultBorder || 'border-gray-100'} ${cardStyles.defaultHoverBorder || 'hover:border-gray-200'} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start text-left`}
              >
                {/* Integration logo at the top */}
                <div className="mb-3">
                  {integration.icon ? (
                    <div className="w-6 h-6 flex items-center justify-start">
                      <img 
                        src={integration.icon} 
                        alt={`${integration.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-gray-100">
                      <svg 
                        className="w-3 h-3 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Name and description */}
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
      </div>
    </section>
  )
}

export default Integrations
