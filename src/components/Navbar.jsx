
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <h2>HomeChef Hub</h2>

      <div className="nav-buttons">
        {location.pathname === "/menu" && (
          <>
            <Link to="/wishlist">
              <button className="wishlist-button">Wishlist</button>
            </Link>

            <Link to="/random-recipe">
              <button className="random-button">Random Recipe</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
