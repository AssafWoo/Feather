const Integrations = ({ config }) => {
  const styles = config.styles || {}
  const cardStyles = config.cardStyles || {}

  return (
    <section id="integrations" className={`py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden min-h-screen snap-start flex items-center`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.items?.map((integration, index) => {
            return (
              <div
                key={index}
                className={`${cardStyles.defaultBg || 'bg-white'} rounded-lg p-6 border-l-4 ${
                  index % 3 === 0 
                    ? 'border-l-blue-500' 
                    : index % 3 === 1 
                    ? 'border-l-purple-500' 
                    : 'border-l-pink-500'
                } border-t border-r border-b ${cardStyles.defaultBorder || 'border-gray-100'} ${cardStyles.defaultHoverBorder || 'hover:border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Integration icon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {integration.icon ? (
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-100 p-2">
                        <img 
                          src={integration.icon} 
                          alt={`${integration.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index % 3 === 0 
                          ? 'bg-blue-100' 
                          : index % 3 === 1 
                          ? 'bg-purple-100' 
                          : 'bg-pink-100'
                      }`}>
                        <svg 
                          className={`w-6 h-6 ${
                            index % 3 === 0 
                              ? 'text-blue-600' 
                              : index % 3 === 1 
                              ? 'text-purple-600' 
                              : 'text-pink-600'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${cardStyles.titleColor || 'text-gray-900'} mb-1`}>
                      {integration.name}
                    </h3>
                    {integration.category && (
                      <p className={`text-xs font-medium uppercase tracking-wide ${
                        index % 3 === 0 
                          ? 'text-blue-600' 
                          : index % 3 === 1 
                          ? 'text-purple-600' 
                          : 'text-pink-600'
                      }`}>
                        {integration.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Integrations
