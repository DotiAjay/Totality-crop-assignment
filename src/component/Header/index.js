import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <ul type="none" className="header-Nav">
          <li className="navItems">
            <Link to="/" style={{textDecoration: 'none'}}>
              Home
            </Link>
          </li>
          <li className="navItems">
            {' '}
            <Link to="/rooms" style={{textDecoration: 'none'}}>
              Rooms
            </Link>
          </li>

          <li className="navItems">
            <Link to="/cart" style={{textDecoration: 'none'}}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
