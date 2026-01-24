import { useEffect } from 'react'

/**
 * SEO Component - Updates meta tags dynamically based on config
 * This ensures search engines have the most relevant information
 */
const SEO = ({ config }) => {
  useEffect(() => {
    // Update document title if provided in config
    if (config?.title) {
      document.title = config.title
    }

    // Update meta description
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return
      
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // Update Open Graph tags
    if (config?.ogTitle) updateMetaTag('og:title', config.ogTitle, true)
    if (config?.ogDescription) updateMetaTag('og:description', config.ogDescription, true)
    if (config?.ogImage) updateMetaTag('og:image', config.ogImage, true)
    if (config?.ogUrl) updateMetaTag('og:url', config.ogUrl, true)

    // Update Twitter Card tags
    if (config?.twitterTitle) updateMetaTag('twitter:title', config.twitterTitle)
    if (config?.twitterDescription) updateMetaTag('twitter:description', config.twitterDescription)
    if (config?.twitterImage) updateMetaTag('twitter:image', config.twitterImage)

    // Update canonical URL
    if (config?.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', config.canonicalUrl)
    }

    // Update favicon dynamically
    const updateFavicon = (size, href) => {
      if (!href) return
      let link = document.querySelector(`link[rel="icon"][sizes="${size}x${size}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'icon')
        link.setAttribute('type', 'image/png')
        link.setAttribute('sizes', `${size}x${size}`)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    if (config?.favicon32) {
      updateFavicon(32, config.favicon32)
      // Also update the shortcut icon
      let shortcut = document.querySelector('link[rel="shortcut icon"]')
      if (shortcut) {
        shortcut.setAttribute('href', config.favicon32)
      }
    }
    if (config?.favicon16) {
      updateFavicon(16, config.favicon16)
    }
    if (config?.appleTouchIcon) {
      let apple = document.querySelector('link[rel="apple-touch-icon"]')
      if (apple) {
        apple.setAttribute('href', config.appleTouchIcon)
      }
    }
  }, [config])

  return null // This component doesn't render anything
}

export default SEO
