import LandingPage from './components/LandingPage'
import { landingConfig } from './config/landingConfig'
import { featherConfig } from './config/featherConfig'

function App() {
  // Switch between configs here:
  // - landingConfig: Base template config
  // - featherConfig: Feather product config
  return <LandingPage config={featherConfig} />
}

export default App
