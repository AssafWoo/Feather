const Hero = ({ config }) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${
        config.backgroundImage
          ? 'bg-cover bg-center'
          : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500'
      }`}
      style={
        config.backgroundImage
          ? { backgroundImage: `url(${config.backgroundImage})` }
          : {}
      }
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {config.title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {config.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {config.primaryButton && (
            <a
              href={config.primaryButton.link}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {config.primaryButton.text}
            </a>
          )}
          {config.secondaryButton && (
            <a
              href={config.secondaryButton.link}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {config.secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
