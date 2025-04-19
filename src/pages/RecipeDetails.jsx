import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';
import recipeData from './recipeData';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === parseInt(id));

  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState('');
  const audioRef = useRef(null);

  const getMusicFiles = (lang) => {
    const folderPath = `/music/${lang}_music`;
    const files = [];
  
    for (let i = 1; i <= 5; i++) {
      files.push(`${folderPath}/track${i}.mp3`);
    }
  
    setPlaylist(files);
  };
  
  

  useEffect(() => {
    if (playlist.length > 0 && isPlaying) {
      audioRef.current.src = playlist[currentTrack];
      audioRef.current.play();
    }
  }, [currentTrack, playlist]);

  useEffect(() => {
    if (playlist.length > 0 && isPlaying) {
      audioRef.current.play();
    }
  }, [playlist]);

  const playMusic = (lang) => {
    setLanguage(lang);
    getMusicFiles(lang); 
    setCurrentTrack(0); 
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setPlaylist([]);
    setCurrentTrack(0);
  };

  // Handle song change when current track ends
  const handleEnded = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [playlist]);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className={styles.recipeDetails}>
      <center>
        <h2>{recipe.name}</h2>
      </center> 
      <img src={recipe.image} alt={recipe.name} className={styles.recipeImage} />
      
      <div className={styles.recipeInfo}>
        <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
        <p><strong>Difficulty:</strong> {recipe.level}</p>
        <p><strong>Calories:</strong> {recipe.calories}</p>
      </div>

      <div className={styles.musicControls}>
        {!isPlaying ? (
          <>
            <p className={styles.musicLabel}>🎵 Focus music:</p>
            <button className={styles.musicButton} onClick={() => playMusic('english')}>🎶 Play English Music</button>
            <button className={styles.musicButton} onClick={() => playMusic('hindi')}>🎶 Play Hindi Music</button>
          </>
        ) : (
          <>
            <p className={styles.musicLabel}>Now playing: {language} track {currentTrack + 1}</p>
            <button className={styles.musicButton} onClick={pauseMusic}>⏸️ Pause</button>
            <button className={styles.musicButton} onClick={stopMusic}>⏹️ Stop</button>
          </>
        )}
        <audio ref={audioRef} controls={false} />
      </div>

      <h3>Cooking Steps:</h3>
      <ul>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
