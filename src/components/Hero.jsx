import EmailSignup from './EmailSignup'

const Hero = ({ config }) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${
        config.backgroundImage
          ? 'bg-cover bg-center'
          : 'bg-gradient-to-br from-slate-50 to-gray-100'
      }`}
      style={
        config.backgroundImage
          ? { backgroundImage: `url(${config.backgroundImage})` }
          : {}
      }
    >
      {config.backgroundImage && <div className="absolute inset-0 bg-black/20"></div>}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {config.badge && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <span className="text-xs font-medium text-gray-700">{config.badge}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 leading-tight">
          {config.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {config.subtitle}
        </p>
        {config.showEmailSignup ? (
          <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} />
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {config.primaryButton && (
              <a
                href={config.primaryButton.link}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-md text-sm font-normal hover:bg-gray-800 transition-colors"
              >
                {config.primaryButton.text}
              </a>
            )}
            {config.secondaryButton && (
              <a
                href={config.secondaryButton.link}
                className="px-6 py-2.5 bg-transparent border border-gray-300 text-gray-700 rounded-md text-sm font-normal hover:bg-gray-50 transition-colors"
              >
                {config.secondaryButton.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
