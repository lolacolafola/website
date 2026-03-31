import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import FlywheelPage from './pages/FlywheelPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/flywheel" element={<FlywheelPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
