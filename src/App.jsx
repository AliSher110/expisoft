import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Technologies from './pages/Technologies'
import Insights from './pages/Insights'
import Portfolio from './pages/Portfolio'
import MobileApp from './pages/MobileApp'
import Checkout from './pages/Checkout'
import CrossPlatformApps from './pages/CrossPlatformApps'
import ReactNativeApps from './pages/ReactNativeApps'
import EnterpriseSoftware from './pages/EnterpriseSoftware'
import SaaSDevelopment from './pages/SaaSDevelopment'
import LegacyModernization from './pages/LegacyModernization'
import ApiIntegration from './pages/ApiIntegration'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mobile-app-development" element={<MobileApp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cross-platform-apps" element={<CrossPlatformApps />} />
        <Route path="/react-native-apps" element={<ReactNativeApps />} />
        <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
        <Route path="/saas-development" element={<SaaSDevelopment />} />
        <Route path="/legacy-modernization" element={<LegacyModernization />} />
        <Route path="/api-integration" element={<ApiIntegration />} />
      </Routes>
      <Footer />
    </Router>
  )
}
