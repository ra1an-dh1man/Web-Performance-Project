import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row, Form, InputGroup } from "react-bootstrap";
import styles from "./Menu.module.css";
import recipeData from "./recipeDataThumbnail";
import { useWishlist } from "./WishlistContext";
import LazyLoad from "react-lazyload";


const Menu = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipeData.filter((recipe) => {
    const query = searchQuery.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.join(", ").toLowerCase().includes(query) ||
      recipe.cookingTime.toLowerCase().includes(query) ||
      recipe.level.toLowerCase().includes(query) ||
      recipe.calories.toLowerCase().includes(query)
    );
  });

  return (
    <div className={styles.menuPage}>
      <h2>Our Recipes</h2>
      <p>Browse through our selection of delicious recipes!</p>

      <InputGroup className="mb-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Form.Control
          placeholder="😉 Search by name, ingredient, cooking time, calories, or difficulty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      <Row>
        {filteredRecipes.length === 0 ? (
          <p className="text-center">😥 No matching recipes found.</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Card className={`h-100 ${styles.cardCustom}`}>
                <LazyLoad height={200} offset={100} once>
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.name}
                    className={styles.cardImage}
                  />
                </LazyLoad>

                <Card.Body>
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
                    <strong>Ingredients: </strong> {recipe.ingredients.join(", ")}
                  </Card.Text>

                  <div className={styles.cardButtons}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <Button variant="primary">😋 View Recipe</Button>
                    </Link>
                    <Button
                      variant={isWishlisted(recipe.id) ? "danger" : "success"}
                      onClick={() => toggleWishlist(recipe)}
                    >
                      {isWishlisted(recipe.id)
                        ? "💔 Remove from Wishlist"
                        : "❤️ Add to Wishlist"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Menu;
