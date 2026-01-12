import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Google Analytics Component (GA4)
 * Tracks page views and custom events
 * 
 * Usage:
 * Add your GA4 Measurement ID to the config file:
 * analytics: {
 *   enabled: true,
 *   measurementId: 'G-XXXXXXXXXX'
 * }
 */
const GoogleAnalytics = ({ measurementId, enabled = false }) => {
  const location = useLocation()

  useEffect(() => {
    if (!enabled || !measurementId || typeof window === 'undefined') return

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', measurementId, {
      page_path: location.pathname + location.search,
    })

    return () => {
      // Cleanup: remove script if component unmounts
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [measurementId, enabled])

  // Track page views on route changes
  useEffect(() => {
    if (!enabled || !measurementId || typeof window === 'undefined' || !window.gtag) return

    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
    })
  }, [location, measurementId, enabled])

  return null // This component doesn't render anything
}

// Helper function to track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Helper function to track email signup conversions
export const trackEmailSignup = (source = 'unknown') => {
  trackEvent('email_signup', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  })
}

// Helper function to track button clicks
export const trackButtonClick = (buttonName, location = 'unknown') => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location,
  })
}

export default GoogleAnalytics
