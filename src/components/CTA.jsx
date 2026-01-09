import EmailSignup from './EmailSignup'

const CTA = ({ config }) => {
  const styles = config.styles || {}
  
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-gray-900'} min-h-screen snap-start flex items-center`}>
      <div className="max-w-4xl mx-auto text-center w-full">
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
