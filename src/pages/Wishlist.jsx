import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useWishlist } from "../pages/WishlistContext";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  

  return (
    <div className={styles.wishlistPage}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center" }}>No recipes in wishlist yet.</p>
      ) : (
        <Row>
          {wishlist.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Card className={`h-100 ${styles.wishlistCard}`}>
                <Card.Img
                  variant="top"
                  src={recipe.image}
                  alt={recipe.name}
                  className={styles.wishlistCardImage}
                />
                <Card.Body className={styles.wishlistCardBody}>
                  <center>
                    <Card.Title>{recipe.name}</Card.Title>
                  </center>
                  <Card.Text>
                    <strong>Cooking Time:</strong> {recipe.cookingTime}
                    <br />
                    <strong>Difficulty:</strong> {recipe.level}
                    <br />
                    <strong>Calories:</strong> {recipe.calories}
                    <br />
                    <strong>Ingredients:</strong>{" "}
                    {recipe.ingredients.join(", ")}
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
