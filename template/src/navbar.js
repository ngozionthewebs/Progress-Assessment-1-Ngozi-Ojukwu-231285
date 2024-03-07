import './navbar.css'
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (  
    <nav className="navbar">
      <div className="logo"></div>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/one">One</Link>
        <Link to="/two">Two</Link>

       

      </div>
    </nav>
  );
}
 
export default NavBar;
