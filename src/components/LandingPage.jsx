import Hero from './Hero'
import Features from './Features'
import CTA from './CTA'
import Footer from './Footer'

const LandingPage = ({ config }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero config={config.hero} />
      {config.features?.enabled && <Features config={config.features} />}
      {config.cta?.enabled && <CTA config={config.cta} />}
      {config.footer?.enabled && <Footer config={config.footer} />}
    </div>
  )
}

export default LandingPage
