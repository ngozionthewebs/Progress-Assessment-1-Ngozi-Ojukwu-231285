import './navbar.css'
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (  
    <nav className="navbar">
      <div className="logo"></div>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/one">Sales</Link>
        <Link to="/two">More</Link>

       

      </div>
    </nav>
  );
}
 
export default NavBar;
