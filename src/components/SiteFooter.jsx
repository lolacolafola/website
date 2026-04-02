import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-credit">&copy; 2025 Laura Cordrey. All rights reserved.</p>
          <nav className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/flywheel">Flywheel</Link>
            <Link to="/case-studies">Case Studies</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
