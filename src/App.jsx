import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { featherConfig } from './config/featherConfig'
import { landingConfig } from './config/landingConfig'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
