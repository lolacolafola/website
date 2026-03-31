import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import FlywheelPage from './pages/FlywheelPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/flywheel" element={<FlywheelPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
