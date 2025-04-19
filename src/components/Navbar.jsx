import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); 
  const { pathname } = location;

  return (
    <nav className="navbar">
      <h2>HomeChef Hub</h2>

      <div className="nav-buttons">
        {pathname === "/menu" && (
          <>
            <Link to="/wishlist">
              <button className="wishlist-button">🌠 Wishlist</button>
            </Link>

            <Link to="/random-recipe">
              <button className="random-button">🔀 Random Recipe</button>
            </Link>
          </>
        )}

        {(pathname === "/wishlist" || pathname === "/random-recipe" || pathname.startsWith("/recipe/")) && (
          <Link to="/menu">
            <button className="back-button">🔙 Back to Menu</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
