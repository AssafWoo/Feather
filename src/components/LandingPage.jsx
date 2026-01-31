import { useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Problem from './Problem'
import Workflow from './Workflow'
import Features from './Features'
import Integrations from './Integrations'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'
import SEO from './SEO'
import GoogleTagManager from './GoogleTagManager'

const LandingPage = ({ config, scrollToSignup = false, scrollToWorkflow = false, scrollToIntegrations = false }) => {
  // Get current path for SEO
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isSignupPage = currentPath === '/signup'
  
  // Get product name from config (fallback to Feather for backwards compatibility)
  const productName = config.header?.logoText || 'Feather AI'
  const defaultDescription = config.hero?.subtitle || 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.'
  
  // Prepare SEO config - use config.seo if available, otherwise build from landing page content
  const seoConfig = config.seo ? {
    // Use explicit SEO config when available
    title: isSignupPage 
      ? `Join Waitlist | ${config.seo.title}`
      : config.seo.title,
    ogTitle: config.seo.ogTitle || config.seo.title,
    ogDescription: config.seo.ogDescription || config.seo.description,
    ogImage: config.seo.ogImage,
    ogUrl: config.seo.ogUrl,
    twitterTitle: config.seo.twitterTitle || config.seo.title,
    twitterDescription: config.seo.twitterDescription || config.seo.description,
    twitterImage: config.seo.twitterImage || config.seo.ogImage,
    canonicalUrl: config.seo.canonicalUrl,
    favicon32: config.seo.favicon32,
    favicon16: config.seo.favicon16,
    appleTouchIcon: config.seo.appleTouchIcon,
  } : {
    // Fallback: Build from landing page content (backwards compatibility)
    title: isSignupPage 
      ? `Join Waitlist | ${productName}`
      : config.hero?.title 
        ? `${config.hero.title} | ${productName}`
        : productName,
    ogTitle: isSignupPage 
      ? `Join Waitlist | ${productName}`
      : config.hero?.title || productName,
    ogDescription: defaultDescription,
    ogImage: 'https://feathersai.app/feather-owl-navy-pink.png',
    ogUrl: `https://feathersai.app${currentPath}`,
    twitterTitle: isSignupPage 
      ? `Join Waitlist | ${productName}`
      : config.hero?.title || productName,
    twitterDescription: defaultDescription,
    twitterImage: 'https://feathersai.app/feather-owl-navy-pink.png',
    canonicalUrl: `https://feathersai.app${currentPath}`,
  }

  // Handle scroll to signup section when coming from /signup route
  useEffect(() => {
    if (scrollToSignup) {
      const timer = setTimeout(() => {
        // Find the signup section (CTA section with email signup, or Hero if CTA doesn't exist)
        const ctaSection = document.getElementById('cta')
        const heroSection = document.getElementById('hero')
        
        // Prefer CTA section if it exists and has email signup, otherwise use Hero
        const targetSection = ctaSection || heroSection
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300) // Small delay to ensure page is rendered
      
      return () => clearTimeout(timer)
    }
  }, [scrollToSignup])

  // Handle scroll to workflow section when coming from /howitworks route
  useEffect(() => {
    if (scrollToWorkflow) {
      const timer = setTimeout(() => {
        const workflowSection = document.getElementById('workflow')
        if (workflowSection) {
          workflowSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [scrollToWorkflow])

  // Handle scroll to integrations section when coming from /whyplain route
  useEffect(() => {
    if (scrollToIntegrations) {
      const timer = setTimeout(() => {
        const integrationsSection = document.getElementById('integrations')
        if (integrationsSection) {
          integrationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [scrollToIntegrations])

  return (
    <>
      <SEO config={seoConfig} />
      {config.analytics?.enabled && (
        <GoogleTagManager 
          containerId={config.analytics.gtmContainerId} 
          enabled={config.analytics.enabled}
        />
      )}
      {config.header?.enabled && <Header config={config.header} />}
      <div 
        className="h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
      >
        <main id="main-content" role="main">
          <Hero config={config.hero} />
          {config.problem?.enabled && <Problem config={config.problem} />}
          {config.workflow?.enabled && <Workflow config={config.workflow} />}
          {config.features?.enabled && <Features config={config.features} />}
          {config.integrations?.enabled && <Integrations config={config.integrations} />}
          {config.faq?.enabled && <FAQ config={config.faq} />}
          {config.cta?.enabled && <CTA config={config.cta} />}
        </main>
        {config.footer?.enabled && <Footer config={config.footer} />}
      </div>
    </>
  )
}

export default LandingPage
