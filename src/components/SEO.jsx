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
  }, [config])

  return null // This component doesn't render anything
}

export default SEO
