import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Google Tag Manager Component
 * Loads GTM and tracks page views on route changes
 * 
 * Usage:
 * Add your GTM Container ID to the config file:
 * analytics: {
 *   enabled: true,
 *   gtmContainerId: 'GTM-XXXXXXX'
 * }
 */
const GoogleTagManager = ({ containerId, enabled = false }) => {
  const location = useLocation()

  // Ensure dataLayer exists (GTM script is loaded in index.html)
  useEffect(() => {
    if (!enabled || !containerId || typeof window === 'undefined') return

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || []
  }, [containerId, enabled])

  // Track page views on route changes
  useEffect(() => {
    if (!enabled || !containerId || typeof window === 'undefined' || !window.dataLayer) return

    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: document.title,
    })
  }, [location, containerId, enabled])

  return null // This component doesn't render anything
}

// Helper function to push events to dataLayer
export const pushToDataLayer = (eventData) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData)
  }
}

// Helper function to track waitlist submission (fires only on success)
export const trackWaitlistSubmit = (source = 'unknown') => {
  pushToDataLayer({
    event: 'waitlist_submit',
    event_category: 'conversion',
    event_label: source,
    value: 1,
  })
}

export default GoogleTagManager
