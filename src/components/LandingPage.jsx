import Header from './Header'
import Hero from './Hero'
import Workflow from './Workflow'
import Features from './Features'
import Integrations from './Integrations'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'
import SEO from './SEO'

const LandingPage = ({ config }) => {
  // Prepare SEO config from landing page content
  const seoConfig = {
    title: config.hero?.title 
      ? `${config.hero.title} | Feather AI - LLM-Assisted Labeling for Data Science Teams`
      : 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    ogTitle: config.hero?.title || 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    ogDescription: config.hero?.subtitle || 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.',
    ogImage: 'https://feathersai.app/feather-owl-navy-pink.png',
    ogUrl: 'https://feathersai.app/',
    twitterTitle: config.hero?.title || 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    twitterDescription: config.hero?.subtitle || 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.',
    twitterImage: 'https://feathersai.app/feather-owl-navy-pink.png',
    canonicalUrl: 'https://feathersai.app/',
  }

  return (
    <>
      <SEO config={seoConfig} />
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
