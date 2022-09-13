import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (place) => {
    setFavourites([...favourites, place]);
  };

  const remove = (place) => {
    setFavourites(
      favourites.filter((restaurant) => restaurant.name !== place.name)
    );
  };

  const storeFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error saving", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    storeFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        addToFavourites: add,
        removeFromFavourites: remove,
        favourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
