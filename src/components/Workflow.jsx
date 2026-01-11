import { useEffect, useRef, useState } from 'react'

const Workflow = ({ config }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0) // Progress from 0 to 100
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false) // Track if animation has played
  const styles = config?.styles || {}

  const steps = config.steps || []
  const maxStep = steps.length - 1

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting && entry.intersectionRatio > 0.3
        
        if (isIntersecting) {
          setIsVisible(true)
          
          // When first entering the section, start the progress animation
          if (!hasAnimated.current) {
            hasAnimated.current = true
            setProgress(0)
            
            // Animate progress from 0 to 100 with smooth easing
            // Duration: 4 seconds for smoother, more visible animation
            const duration = 4000 // 4 seconds
            const startTime = Date.now()
            
            // Easing function for smooth animation (ease-in-out cubic)
            const easeInOutCubic = (t) => {
              return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2
            }
            
            const animate = () => {
              const elapsed = Date.now() - startTime
              const rawProgress = Math.min(1, elapsed / duration)
              const easedProgress = easeInOutCubic(rawProgress)
              const newProgress = easedProgress * 100
              setProgress(newProgress)
              
              if (rawProgress < 1) {
                requestAnimationFrame(animate)
              } else {
                // Ensure we end at exactly 100
                setProgress(100)
              }
            }
            
            requestAnimationFrame(animate)
          }
        } else {
          // Reset when scrolling away from section
          if (entry.boundingClientRect.top > window.innerHeight) {
            hasAnimated.current = false
            setProgress(0)
            setIsVisible(false)
          }
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!config?.enabled) return null

  // Calculate which step is active based on progress (0-100)
  // Each step gets its own time slot for sequential activation
  const isStepActive = (index) => {
    if (index === 0) {
      // First step is active as soon as progress starts
      return progress > 5 // Small threshold to ensure smooth start
    }
    // Each step gets equal time, with a small overlap for smooth transitions
    const progressPerStep = 100 / (maxStep + 1)
    const stepThreshold = index * progressPerStep
    // Add a small buffer (5%) to ensure smooth activation
    return progress >= stepThreshold - 2
  }
  
  // Calculate progress for line between steps
  // Lines fill smoothly between their adjacent steps
  const getLineProgress = (index) => {
    const progressPerStep = 100 / (maxStep + 1)
    const stepStart = index * progressPerStep
    const stepEnd = (index + 1) * progressPerStep
    
    if (progress <= stepStart) return 0
    if (progress >= stepEnd) return 100
    
    // Calculate percentage within this step segment for smooth fill
    const segmentProgress = ((progress - stepStart) / (stepEnd - stepStart)) * 100
    return Math.min(100, Math.max(0, segmentProgress))
  }

  // Input sources for Import step
  const inputSources = [
    { icon: 'csv', label: 'CSV' },
    { icon: 'json', label: 'JSON' },
    { icon: 'api', label: 'API' },
  ]

  // Export formats for Export step
  const exportFormats = [
    { icon: 'parquet', label: 'Parquet' },
    { icon: 'json', label: 'JSON' },
    { icon: 'csv', label: 'CSV' },
    { icon: 'hf', label: 'HF' },
  ]

  // Default inline SVG icons for steps
  const stepIcons = {
    import: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    schema: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    prelabel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    review: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    export: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  }

  // Small icons for sub-circles
  const smallIcons = {
    csv: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    json: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
        <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
      </svg>
    ),
    parquet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    hf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  }

  const getStepIcon = (step, index) => {
    const iconKey = step.iconType || Object.keys(stepIcons)[index % 5]
    return stepIcons[iconKey] || stepIcons.import
  }

  return (
    <section
      id="workflow"
      ref={sectionRef}
      aria-label={config.title || "How it works"}
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${styles.backgroundColor || 'bg-slate-50'} relative overflow-hidden min-h-screen snap-start flex items-center`}
    >
      {/* Subtle background decoration */}
      <div className={`absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 ${styles.decorationColor || 'bg-slate-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-30'}`} />
      <div className={`absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 ${styles.decorationColor || 'bg-slate-100'} rounded-full blur-3xl ${styles.decorationOpacity || 'opacity-30'}`} />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Title */}
        <div 
          className="text-center mb-8 sm:mb-10 md:mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium ${styles.titleColor || 'text-slate-950'} mb-3 sm:mb-2`}>
            {config.title?.split(' ').map((word, index) => {
              const highlightWord = config.highlightWord || 'works'
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
            <p className={`text-sm sm:text-base ${styles.subtitleColor || 'text-slate-600'} max-w-2xl mx-auto px-2`}>
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Grid Box Container */}
        <div 
          className={`${styles.cardBg || 'bg-white'} rounded-xl sm:rounded-2xl ${styles.cardBorder || 'border border-slate-200/80'} shadow-lg sm:shadow-xl overflow-hidden`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease-out 0.2s'
          }}
        >
          {/* Grid Background Pattern */}
          <div 
            className="relative py-6 px-4 sm:py-7 sm:px-5 md:py-8 md:px-6"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          >
            {/* Desktop Layout - Single Row with All Steps */}
            <div className="hidden lg:block">
              <div className="relative py-4">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-center gap-4 relative">
                    {/* Input Sources around Step 0 */}
                    <div className="flex flex-col items-center gap-2">
                      {inputSources.map((source, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div 
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                              isStepActive(0) 
                                ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                                : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                            }`}
                          >
                            <div className="w-3 h-3">{smallIcons[source.icon]}</div>
                          </div>
                          <span className={`text-[10px] font-medium transition-colors duration-500 ease-in-out ${
                            isStepActive(0) ? 'text-fuchsia-500' : 'text-slate-400'
                          }`}>{source.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Connector from inputs to Step 0 */}
                    <div className="flex items-center">
                      <div 
                        className={`w-4 h-[2px] transition-all duration-500 ease-in-out ${
                          isStepActive(0) ? 'bg-fuchsia-500' : 'bg-slate-200'
                        }`}
                      />
                    </div>

                    {/* All Steps in a Row */}
                    {steps.map((step, index) => {
                      const active = isStepActive(index)
                      const isLast = index === steps.length - 1
                      
                      return (
                        <div key={index} className="flex items-center">
                          <div
                            className="flex flex-col items-center"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                              transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`
                            }}
                          >
                            <div 
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out ${
                                active
                                  ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105'
                                  : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                              }`}
                            >
                              <div className="w-4 h-4">
                                {getStepIcon(step, index)}
                              </div>
                            </div>
                            <div className="mt-2 text-center">
                              <div className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 transition-colors duration-500 ease-in-out ${
                                active ? 'text-fuchsia-500' : 'text-slate-400'
                              }`}>
                                {step.title}
                              </div>
                              <div className={`text-[11px] leading-tight max-w-[90px] transition-colors duration-500 ease-in-out ${
                                active ? 'text-slate-700' : 'text-slate-400'
                              }`}>
                                {step.description}
                              </div>
                            </div>
                          </div>

                          {/* Curved connector line between steps */}
                          {!isLast && (
                            <div className="relative mx-3 w-16" style={{ height: '2px' }}>
                              {/* Background line */}
                              <div className="absolute inset-0 h-[2px] bg-slate-200 rounded-full" />
                              {/* Animated progress line */}
                              <div 
                                className="absolute top-0 left-0 h-[2px] bg-fuchsia-500 rounded-full transition-all duration-500 ease-in-out"
                                style={{
                                  width: `${getLineProgress(index)}%`,
                                  transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      )
                    })}

                    {/* Connector from Step 4 to outputs */}
                    <div className="flex items-center">
                      <div 
                        className={`w-4 h-[2px] transition-all duration-500 ease-in-out ${
                          isStepActive(steps.length - 1) ? 'bg-fuchsia-500' : 'bg-slate-200'
                        }`}
                      />
                    </div>

                    {/* Export Formats around Step 4 */}
                    <div className="flex flex-col items-center gap-2">
                      {exportFormats.map((format, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <span className={`text-[10px] font-medium transition-colors duration-500 ease-in-out ${
                            isStepActive(steps.length - 1) ? 'text-fuchsia-500' : 'text-slate-400'
                          }`}>{format.label}</span>
                          <div 
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                              isStepActive(steps.length - 1) 
                                ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                                : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                            }`}
                          >
                            <div className="w-3 h-3">{smallIcons[format.icon]}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet/Medium Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="flex flex-col items-center gap-6">
                {/* Input sources row */}
                <div className="flex items-center gap-4 mb-2">
                  {inputSources.map((source, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                          isStepActive(0) 
                            ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                            : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                        }`}
                      >
                        <div className="w-3.5 h-3.5">{smallIcons[source.icon]}</div>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500">{source.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Vertical connector */}
                <div className={`w-[2px] h-4 transition-colors duration-500 ease-in-out ${isStepActive(0) ? 'bg-fuchsia-500' : 'bg-slate-200'}`} />

                {/* Steps in a row */}
                <div className="flex items-center gap-4">
                  {steps.map((step, index) => {
                    const active = isStepActive(index)
                    const isLast = index === steps.length - 1
                    
                    return (
                      <div key={index} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out ${
                              active
                                ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105'
                                : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                            }`}
                          >
                            <div className={`w-5 h-5 transition-all duration-500 ease-in-out ${active ? 'scale-110' : 'scale-100'}`}>
                              {getStepIcon(step, index)}
                            </div>
                          </div>
                          <div className="mt-3 text-center">
                            <div className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-500 ease-in-out ${active ? 'text-fuchsia-500' : 'text-slate-400'}`}>
                              {step.title}
                            </div>
                          </div>
                        </div>
                        {!isLast && (
                          <div className="mx-2 w-10 h-[2px] bg-slate-200 relative">
                            <div 
                              className="absolute top-0 left-0 h-full bg-fuchsia-500 transition-all duration-500 ease-in-out"
                              style={{ 
                                width: `${getLineProgress(index)}%`,
                                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Vertical connector */}
                <div className={`w-[2px] h-4 transition-colors duration-500 ease-in-out ${isStepActive(steps.length - 1) ? 'bg-fuchsia-500' : 'bg-slate-200'}`} />

                {/* Export formats row */}
                <div className="flex items-center gap-4 mt-2">
                  {exportFormats.map((format, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                          isStepActive(steps.length - 1) 
                            ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                            : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                        }`}
                      >
                        <div className="w-3.5 h-3.5">{smallIcons[format.icon]}</div>
                      </div>
                      <span className={`text-[10px] font-medium transition-colors duration-500 ease-in-out ${
                        isStepActive(steps.length - 1) ? 'text-fuchsia-500' : 'text-slate-500'
                      }`}>{format.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="md:hidden">
              {/* Input Sources Section */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="text-center mb-4">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Input Sources</p>
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {inputSources.map((source, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                          isStepActive(0) 
                            ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                            : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                        }`}
                      >
                        <div className="w-5 h-5">{smallIcons[source.icon]}</div>
                      </div>
                      <span className={`text-xs font-medium transition-colors duration-500 ease-in-out ${
                        isStepActive(0) ? 'text-fuchsia-500' : 'text-slate-500'
                      }`}>{source.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative pl-14 sm:pl-16 md:pl-20">
                {/* Steps Container with Timeline */}
                <div className="relative">
                  {/* Vertical timeline line - connects from first icon center to last icon center */}
                  <div 
                    className="absolute left-5 sm:left-7 md:left-8 w-[3px] bg-slate-200 rounded-full"
                    style={{
                      // Start from center of first icon: h-11 (2.75rem) / 2 = 1.375rem on mobile
                      // On sm: h-12 (3rem) / 2 = 1.5rem, on md: h-14 (3.5rem) / 2 = 1.75rem
                      top: 'calc(2.75rem / 2)',
                      // End at center of last icon (same offset from bottom)
                      bottom: 'calc(2.75rem / 2)'
                    }}
                  >
                    <div 
                      className="w-full bg-fuchsia-500 rounded-full transition-all duration-500 ease-in-out origin-top"
                      style={{ 
                        height: `${progress}%`,
                        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                  </div>

                  {/* Steps */}
                  <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {steps.map((step, index) => {
                      const active = isStepActive(index)
                      
                      return (
                        <div
                          key={index}
                          className="relative"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `all 0.5s ease-out ${0.2 + index * 0.1}s`
                          }}
                        >
                          {/* Step Circle */}
                          <div 
                            className={`absolute -left-[48px] sm:-left-[56px] md:-left-[60px] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out z-10 ${
                              active
                                ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 scale-105'
                                : 'bg-white border-[3px] border-slate-200 text-slate-400 scale-100'
                            }`}
                          >
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500 ease-in-out ${active ? 'scale-110' : 'scale-100'}`}>
                              {getStepIcon(step, index)}
                            </div>
                          </div>

                        {/* Content Card */}
                        <div className={`bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 transition-all duration-500 ease-in-out ${
                          active 
                            ? 'border-fuchsia-200 shadow-md shadow-fuchsia-500/10' 
                            : 'border-slate-100 shadow-sm'
                        }`}>
                          <div className={`text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3 transition-colors duration-500 ease-in-out ${
                            active ? 'text-fuchsia-500' : 'text-slate-500'
                          }`}>
                            {step.title}
                          </div>
                          <div className={`text-base sm:text-lg leading-relaxed transition-colors duration-500 ease-in-out ${
                            active ? 'text-slate-800' : 'text-slate-600'
                          }`}>
                            {step.description}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  </div>
                </div>
              </div>

              {/* Export Formats Section - Centered */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-center mb-4">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Export Formats</p>
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {exportFormats.map((format, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-in-out ${
                          isStepActive(steps.length - 1) 
                            ? 'bg-fuchsia-500 text-white shadow-md scale-105' 
                            : 'bg-slate-50 border-2 border-slate-200 text-slate-400 scale-100'
                        }`}
                      >
                        <div className="w-5 h-5">{smallIcons[format.icon]}</div>
                      </div>
                      <span className={`text-xs font-medium transition-colors duration-500 ease-in-out ${
                        isStepActive(steps.length - 1) ? 'text-fuchsia-500' : 'text-slate-500'
                      }`}>{format.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
