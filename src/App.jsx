import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { featherConfig } from './config/featherConfig'

// Component to handle scroll to signup on /signup route
function SignupRedirect() {
  return <LandingPage config={featherConfig} scrollToSignup={true} />
}

// Component to handle scroll to "How it works" on /howitworks route
function HowItWorksRedirect() {
  return <LandingPage config={featherConfig} scrollToWorkflow={true} />
}

function App() {
  // Switch between configs here:
  // - landingConfig: Base template config
  // - featherConfig: Feather product config
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage config={featherConfig} />} />
        <Route path="/signup" element={<SignupRedirect />} />
        <Route path="/howitworks" element={<HowItWorksRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
