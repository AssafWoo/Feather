const Features = ({ config }) => {
  // Split items into two columns
  const leftColumn = config.items?.filter((_, index) => index % 2 === 0) || []
  const rightColumn = config.items?.filter((_, index) => index % 2 === 1) || []
  const styles = config.styles || {}
  const cardStyles = config.cardStyles || {}
  const avatarGradients = config.avatarGradients || [
    { from: "from-blue-500", to: "to-cyan-500" },
    { from: "from-purple-500", to: "to-pink-500" },
  ]

  return (
    <section id="why" className={`py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-white'} relative overflow-hidden min-h-screen snap-start flex items-center`}>
      {/* Subtle background decoration */}
      <div className={`absolute top-0 right-0 w-64 h-64 ${styles.decorationColor || 'bg-gray-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-20'}`}></div>
      <div className={`absolute bottom-0 left-0 w-64 h-64 ${styles.decorationColor || 'bg-gray-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-20'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Title with highlighted word */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium ${styles.titleColor || 'text-gray-900'} mb-4`}>
            {config.title.split(' ').map((word, index) => {
              const highlightWord = config.highlightWord || 'Coming'
              if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
                return (
                  <span key={index}>
                    <span className={styles.highlightColor || 'text-amber-500'}>{word}</span>{' '}
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

        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((feature, index) => {
              const originalIndex = config.items?.indexOf(feature) || 0
              const isSpecial = feature.special || false
              
              return (
                <div
                  key={originalIndex}
                  className={`${isSpecial ? cardStyles.specialBg : cardStyles.defaultBg} rounded-xl p-6 border ${
                    isSpecial 
                      ? `${cardStyles.specialBorder || 'border-gray-200'}` 
                      : `${cardStyles.defaultBorder || 'border-gray-100'} ${cardStyles.defaultHoverBorder || 'hover:border-gray-200'}`
                  } hover:shadow-lg transition-all duration-300`}
                >
                  {isSpecial && feature.badge && (
                    <div className={`inline-flex items-center px-2 py-1 ${cardStyles.badgeBg || 'bg-amber-500'} ${cardStyles.badgeText || 'text-white'} text-xs font-medium rounded mb-4`}>
                      {feature.badge}
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    {/* Avatar/Icon */}
                    <div className="flex-shrink-0">
                      {feature.avatar ? (
                        <img
                          src={feature.avatar}
                          alt={feature.name || feature.title}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradients[0]?.from || 'from-blue-500'} ${avatarGradients[0]?.to || 'to-cyan-500'} flex items-center justify-center text-white font-medium text-sm`}>
                          {feature.name ? feature.name.charAt(0).toUpperCase() : feature.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`text-base font-medium ${cardStyles.titleColor || 'text-gray-900'}`}>
                            {feature.name || feature.title}
                          </h3>
                          {feature.role && (
                            <p className={`text-xs ${cardStyles.roleColor || 'text-gray-500'} mt-0.5`}>
                              {feature.role}
                            </p>
                          )}
                        </div>
                        {feature.platform && (
                          <span className={`text-xs ${cardStyles.platformColor || 'text-gray-400'}`}>
                            {feature.platform}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${cardStyles.descriptionColor || 'text-gray-600'} leading-relaxed`}>
                        {feature.description || feature.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((feature, index) => {
              const originalIndex = config.items?.indexOf(feature) || 0
              const isSpecial = feature.special || false
              
              return (
                <div
                  key={originalIndex}
                  className={`${isSpecial ? cardStyles.specialBg : cardStyles.defaultBg} rounded-xl p-6 border ${
                    isSpecial 
                      ? `${cardStyles.specialBorder || 'border-gray-200'}` 
                      : `${cardStyles.defaultBorder || 'border-gray-100'} ${cardStyles.defaultHoverBorder || 'hover:border-gray-200'}`
                  } hover:shadow-lg transition-all duration-300`}
                >
                  {isSpecial && feature.badge && (
                    <div className={`inline-flex items-center px-2 py-1 ${cardStyles.badgeBg || 'bg-amber-500'} ${cardStyles.badgeText || 'text-white'} text-xs font-medium rounded mb-4`}>
                      {feature.badge}
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    {/* Avatar/Icon */}
                    <div className="flex-shrink-0">
                      {feature.avatar ? (
                        <img
                          src={feature.avatar}
                          alt={feature.name || feature.title}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradients[1]?.from || 'from-purple-500'} ${avatarGradients[1]?.to || 'to-pink-500'} flex items-center justify-center text-white font-medium text-sm`}>
                          {feature.name ? feature.name.charAt(0).toUpperCase() : feature.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`text-base font-medium ${cardStyles.titleColor || 'text-gray-900'}`}>
                            {feature.name || feature.title}
                          </h3>
                          {feature.role && (
                            <p className={`text-xs ${cardStyles.roleColor || 'text-gray-500'} mt-0.5`}>
                              {feature.role}
                            </p>
                          )}
                        </div>
                        {feature.platform && (
                          <span className={`text-xs ${cardStyles.platformColor || 'text-gray-400'}`}>
                            {feature.platform}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${cardStyles.descriptionColor || 'text-gray-600'} leading-relaxed`}>
                        {feature.description || feature.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
