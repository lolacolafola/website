import { NavLink, Outlet } from 'react-router-dom'

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

export default function Layout() {
  return (
    <>
      <nav className="site-nav">
        <div className="container nav-inner">
          <NavLink to="/" className="nav-logo">Laura Cordrey</NavLink>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>Home</NavLink>
            <NavLink to="/case-studies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Case Studies</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
            <NavLink to="/flywheel" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Fandom Flywheel</NavLink>
            <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
