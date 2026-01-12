import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { landingConfig } from './config/landingConfig'
import { featherConfig } from './config/featherConfig'

// Component to handle scroll to signup on /signup route
function SignupRedirect() {
  return <LandingPage config={featherConfig} scrollToSignup={true} />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
