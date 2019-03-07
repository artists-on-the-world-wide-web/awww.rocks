import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo/logo-y.svg';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" title="Logo" style={{ margin:"20px" }}>
            <img src={logo} alt="awww-logo" style={{ width: '88px', marginBottom:"10px" }} />
            <span style={{ fontSize:"10px" }}>Artists on the World Wide Web</span>
          </Link>
          <div id="navMenu" className="navbar-menu">
            <Link className="navbar-item" to="/blog" activeStyle={{ backgroundColor:"#00FF27", color:"#2C2E3F" }}>
              Blog
            </Link>
            <Link className="navbar-item" to="/work" activeStyle={{ backgroundColor:"#E8AF00", color:"#2C2E3F" }}>
              Portfolio
            </Link>
            <Link className="navbar-item" to="/about" activeStyle={{ backgroundColor:"#EE6EAF", color:"#2C2E3F" }}>
              About
            </Link>
            {/* <Link className="navbar-item" to="/contact">
              Contact
            </Link> */}
            {/* <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
