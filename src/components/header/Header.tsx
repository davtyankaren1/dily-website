import { Link } from "react-router-dom";
import "../../styles/Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <h1>My Logo</h1>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
