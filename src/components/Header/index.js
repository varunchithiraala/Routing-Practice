// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar-header-container">
    <div className="nav-bar-logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="nav-bar-logo-image"
        alt="wave"
      />
      <h1 className="nav-bar-title">Wave</h1>
    </div>
    <ul className="nav-bar-items-container">
      <li className="nav-bar-link-item">
        <Link className="nav-bar-route-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-bar-link-item">
        <Link className="nav-bar-route-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-bar-link-item">
        <Link className="nav-bar-route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
