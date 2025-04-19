import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const stored = localStorage.getItem('wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse wishlist from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  const toggleWishlist = (recipe) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === recipe.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== recipe.id);
      } else {
        return [...prevWishlist, recipe];
      }
    });
  };

  const isWishlisted = (recipeId) => wishlist.some((r) => r.id === recipeId);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};
