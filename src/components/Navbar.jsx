import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from "./LanguageContext";
const Navbar = () => {
  const location = useLocation(); 
  const { pathname } = location;
  const { language, toggleLanguage } = useLanguage(); // ✅ Access context

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

        <button className="lang" onClick={toggleLanguage}>
          {language === "en" ? "🌐 हिन्दी में बदलें" : "🌐 Switch to English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
