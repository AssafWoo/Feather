import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { featherConfig } from './config/featherConfig'
import { landingConfig } from './config/landingConfig'
import { plainConfig } from './config/plainConfig'

// ============================================
// PRODUCT CONFIG REGISTRY
// ============================================
// Add new product configs here. Each product should have:
// 1. A config file in src/config/
// 2. Assets in public/<product-name>/
// 3. An entry in this registry
const configs = {
  feather: featherConfig,
  base: landingConfig,
  plain: plainConfig,
  // Add new products here:
  // productb: productBConfig,
}

// Select config based on VITE_PRODUCT environment variable
// Defaults to 'feather' if not set
const productName = import.meta.env.VITE_PRODUCT || 'feather'
const activeConfig = configs[productName] || featherConfig

// Component to handle scroll to signup on /signup route
function SignupRedirect() {
  return <LandingPage config={activeConfig} scrollToSignup={true} />
}

// Component to handle scroll to "How it works" on /howitworks route
function HowItWorksRedirect() {
  return <LandingPage config={activeConfig} scrollToWorkflow={true} />
}

// Component to handle scroll to CTA on /join route
function JoinRedirect() {
  return <LandingPage config={activeConfig} scrollToSignup={true} />
}

// Component to handle scroll to "Why Plain" (integrations) on /whyplain route
function WhyPlainRedirect() {
  return <LandingPage config={activeConfig} scrollToIntegrations={true} />
}

// Component to handle scroll to features section on /features route
function FeaturesRedirect() {
  return <LandingPage config={activeConfig} scrollToFeatures={true} />
}

// Component to handle scroll to FAQ section on /faq route
function FaqRedirect() {
  return <LandingPage config={activeConfig} scrollToFaq={true} />
}

function App() {
  // Active product: controlled by VITE_PRODUCT env var
  // Run with: VITE_PRODUCT=feather npm run dev
  // Or use npm scripts: npm run dev:feather
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage config={activeConfig} />} />
        <Route path="/signup" element={<SignupRedirect />} />
        <Route path="/howitworks" element={<HowItWorksRedirect />} />
        <Route path="/join" element={<JoinRedirect />} />
        <Route path="/whyplain" element={<WhyPlainRedirect />} />
        <Route path="/workflow" element={<HowItWorksRedirect />} />
        <Route path="/features" element={<FeaturesRedirect />} />
        <Route path="/faq" element={<FaqRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
