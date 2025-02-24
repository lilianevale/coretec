import { Link } from 'react-router-dom'
import './header.css';

  const Header = () => {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src="logo.png" alt="Blog Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              Technology
            </li>
            <li>
              Travel
            </li>
            <li>
             Lifestyle
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
export default Header;