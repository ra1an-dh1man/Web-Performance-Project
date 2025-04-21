import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useWishlist } from "../pages/WishlistContext";
import { useLanguage } from "../components/LanguageContext"; // ✅ Get global language state
import recipeDataEnglish from "../pages/recipeData"; // English recipe data
import recipeDataHindi from "../pages/recipeDataHindi"; // Hindi recipe data
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { language } = useLanguage(); // ✅ Get the selected language

  // Select correct recipe data based on language
  const recipeData = language === "en" ? recipeDataEnglish : recipeDataHindi;

  // Match wishlist recipes with the correct language dataset
  const updatedWishlist = wishlist.map((wishItem) =>
    recipeData.find((recipe) => recipe.id === wishItem.id) || wishItem
  );

  return (
    <div className={styles.wishlistPage}>
      <h2>Your Wishlist</h2>
      {updatedWishlist.length === 0 ? (
        <p style={{ textAlign: "center" }}>No recipes in wishlist yet.</p>
      ) : (
        <Row>
          {updatedWishlist.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Card className={`h-100 ${styles.wishlistCard}`}>
                <Card.Img
                  variant="top"
                  src={recipe.image} // ✅ Correctly retrieves the image from selected dataset
                  alt={recipe.name}
                  className={styles.wishlistCardImage}
                />
                <Card.Body className={styles.wishlistCardBody}>
                  <center>
                    <Card.Title>{recipe.name}</Card.Title> {/* ✅ Retrieves correct name */}
                  </center>
                  <Card.Text>
                    <strong>Cooking Time:</strong> {recipe.cookingTime} {/* ✅ Retrieves correct cooking time */}
                    <br />
                    <strong>Difficulty:</strong> {recipe.level} {/* ✅ Retrieves correct difficulty */}
                    <br />
                    <strong>Calories:</strong> {recipe.calories} {/* ✅ Retrieves correct calories */}
                    <br />
                    <strong>Ingredients:</strong>{" "}
                    {recipe.ingredients.join(", ")} {/* ✅ Retrieves actual ingredients from the correct dataset */}
                  </Card.Text>
                  <div className={styles.wishlistCardButtons}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <Button variant="primary" className={styles.wishlistButton}>
                        View Recipe
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className={styles.wishlistButton}
                      onClick={() => toggleWishlist(recipe)}
                    >
                      Remove from Wishlist
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Wishlist;