import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = ({ config }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const styles = config.styles || {}

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!config.items || config.items.length === 0) return null

  return (
    <section 
      id="faq" 
      aria-label={config.title || "Frequently Asked Questions"} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-white'} relative overflow-hidden min-h-screen snap-start flex items-center`}
      style={{ scrollSnapStop: 'always' }}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${styles.decorationColor || 'bg-slate-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-20'}`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${styles.decorationColor || 'bg-fuchsia-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-15'}`}></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium ${styles.titleColor || 'text-slate-950'} mb-4`}>
            {config.title?.split(' ').map((word, index) => {
              const highlightWord = config.highlightWord || 'Questions'
              if (word.toLowerCase().includes(highlightWord.toLowerCase())) {
                return (
                  <span key={index}>
                    <span className={styles.highlightColor || 'text-fuchsia-500'}>{word}</span>{' '}
                  </span>
                )
              }
              return <span key={index}>{word} </span>
            })}
          </h2>
          {config.subtitle && (
            <p className={`text-base ${styles.subtitleColor || 'text-slate-600'} max-w-2xl mx-auto`}>
              {config.subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {config.items.map((item, index) => (
            <div
              key={index}
              className={`${styles.cardBg || 'bg-white'} rounded-none border-t-2 ${
                openIndex === index 
                  ? styles.cardActiveBorder || 'border-fuchsia-400' 
                  : styles.cardBorder || 'border-slate-200'
              } overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-base font-medium ${styles.questionColor || 'text-slate-900'} pr-4`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 ${styles.iconColor || 'text-slate-500'} transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-5 ${styles.answerColor || 'text-slate-600'} text-sm leading-relaxed`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
