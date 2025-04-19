import React from "react";
import { Link } from "react-router-dom"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import RecipeDetails from "./pages/RecipeDetails";
import styles from "./App.module.css";
import { Carousel } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import Wishlist from "./pages/Wishlist";
import RandomRecipe from "./pages/RandomRecipe";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.landingPage}>
              <div className={styles.overlay}>
                <h1> Welcome to HomeChef Hub</h1>
                <h1>🎊</h1>
                <p>
                  Discover, create, and share amazing recipes with your loved
                  ones.
                </p>

                <Carousel className={styles.carousel}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/pasta.jpg"
                      alt="First recipe"
                    />
                    <Carousel.Caption>
                      <h3>Delicious Pasta</h3>
                      <p>Fresh, homemade, and full of flavor!</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/4.jpg"
                      alt="Second recipe"
                    />
                    <Carousel.Caption>
                      <h3>Vegetable Stir Fry</h3>
                      <p>quick and healthy dish made by sautéing assorted fresh vegetables.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/desert.jpg"
                      alt="Third recipe"
                    />
                    <Carousel.Caption>
                      <h3>Sweet Desserts</h3>
                      <p>End your meal with sweetness!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <Link to="/menu">
                  <button className="menu-button">😁 Click me to explore</button>
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/random-recipe" element={<RandomRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
