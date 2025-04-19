import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import recipeData from "./recipeData";
import { Link } from "react-router-dom";
import styles from "./RandomRecipe.module.css";


const getRandomRecipe = () => {
  const index = Math.floor(Math.random() * recipeData.length);
  return recipeData[index];
};

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(getRandomRecipe());

  const handleShuffle = () => {
    setRecipe(getRandomRecipe());
  };

  return (
    <Container className={styles.randomPage}>
  <h2>Random Recipe</h2>
  <Card className={styles.randomCard}>
    <Card.Img
      variant="top"
      src={recipe.image}
      alt={recipe.name}
      className={styles.randomImage}
    />
    <Card.Body className={styles.cardBody}>
      <Card.Title>{recipe.name}</Card.Title>
      <Card.Text>
        <strong>Cooking Time:</strong> {recipe.cookingTime}
        <br />
        <strong>Difficulty:</strong> {recipe.level}
        <br />
        <strong>Calories:</strong> {recipe.calories}
        <br />
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </Card.Text>
      <div className={styles.cardButtons}>
        <Link to={`/recipe/${recipe.id}`}>
          <Button variant="primary">😋 View Full Recipe</Button>
        </Link>
        <Button variant="warning" onClick={handleShuffle}>
          🔀 Shuffle Again
        </Button>
      </div>
    </Card.Body>
  </Card>
</Container>

  );
};

export default RandomRecipe;
