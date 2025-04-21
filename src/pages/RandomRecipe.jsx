import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext"; // ✅ Import LanguageContext
import recipeDataEnglish from "./recipeData"; // English recipe data
import recipeDataHindi from "./recipeDataHindi"; // Hindi recipe data
import styles from "./RandomRecipe.module.css";

const getRandomRecipe = (recipeData) => {
  const index = Math.floor(Math.random() * recipeData.length);
  return recipeData[index];
};

const RandomRecipe = () => {
  const { language } = useLanguage(); // ✅ Get selected language
  const recipeData = language === "en" ? recipeDataEnglish : recipeDataHindi; // ✅ Select correct dataset
  const [recipe, setRecipe] = useState(getRandomRecipe(recipeData));

  const handleShuffle = () => {
    setRecipe(getRandomRecipe(recipeData)); // ✅ Ensure new random recipe is picked from the selected dataset
  };

  return (
    <Container className={styles.randomPage}>
      <h2>Random Recipe</h2>
      <Card className={styles.randomCard}>
        <Card.Img
          variant="top"
          src={recipe.image} // ✅ Retrieves image from correct dataset
          alt={recipe.name}
          className={styles.randomImage}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{recipe.name}</Card.Title> {/* ✅ Retrieves name from correct dataset */}
          <Card.Text>
            <strong>Cooking Time:</strong> {recipe.cookingTime} {/* ✅ Retrieves correct cooking time */}
            <br />
            <strong>Difficulty:</strong> {recipe.level} {/* ✅ Retrieves correct difficulty */}
            <br />
            <strong>Calories:</strong> {recipe.calories} {/* ✅ Retrieves correct calories */}
            <br />
            <strong>Ingredients:</strong> {recipe.ingredients.join(", ")} {/* ✅ Retrieves actual ingredients from correct dataset */}
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