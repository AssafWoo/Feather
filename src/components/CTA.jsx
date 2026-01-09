import EmailSignup from './EmailSignup'

const CTA = ({ config }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-3">
          {config.title}
        </h2>
        <p className="text-base text-gray-300 mb-6">
          {config.subtitle}
        </p>
        {config.showEmailSignup ? (
          <EmailSignup config={config.emailSignup} onSubmit={config.onEmailSubmit} />
        ) : (
          config.button && (
            <a
              href={config.button.link}
              className="inline-block px-6 py-2.5 bg-white text-gray-900 rounded-md text-sm font-normal hover:bg-gray-100 transition-colors"
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
