const CTA = ({ config }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {config.title}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {config.subtitle}
        </p>
        {config.button && (
          <a
            href={config.button.link}
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {config.button.text}
          </a>
        )}
      </div>
    </section>
  )
}

export default CTA
