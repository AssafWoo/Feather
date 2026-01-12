import { useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Workflow from './Workflow'
import Features from './Features'
import Integrations from './Integrations'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'
import SEO from './SEO'
import GoogleTagManager from './GoogleTagManager'

const LandingPage = ({ config, scrollToSignup = false }) => {
  // Get current path for SEO
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isSignupPage = currentPath === '/signup'
  
  // Prepare SEO config from landing page content
  const seoConfig = {
    title: isSignupPage 
      ? `Join Waitlist | Feather AI - LLM-Assisted Labeling for Data Science Teams`
      : config.hero?.title 
        ? `${config.hero.title} | Feather AI - LLM-Assisted Labeling for Data Science Teams`
        : 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    ogTitle: isSignupPage 
      ? 'Join Waitlist | Feather AI'
      : config.hero?.title || 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    ogDescription: config.hero?.subtitle || 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.',
    ogImage: 'https://feathersai.app/feather-owl-navy-pink.png',
    ogUrl: `https://feathersai.app${currentPath}`,
    twitterTitle: isSignupPage 
      ? 'Join Waitlist | Feather AI'
      : config.hero?.title || 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    twitterDescription: config.hero?.subtitle || 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.',
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

  return (
    <>
      <SEO config={seoConfig} />
      {config.analytics?.enabled && (
        <GoogleTagManager 
          containerId={config.analytics.gtmContainerId} 
          enabled={config.analytics.enabled}
        />
      )}
      <div className="min-h-screen bg-white overflow-y-scroll snap-y snap-mandatory scroll-smooth" style={{ height: '100vh', scrollBehavior: 'smooth' }}>
        {config.header?.enabled && <Header config={config.header} />}
        <main id="main-content" role="main">
          <Hero config={config.hero} />
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
