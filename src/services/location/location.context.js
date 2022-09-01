import { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    if (!searchKeyword.length) {
      return;
    }
    setKeyWord(searchKeyword);
  };

  useEffect(() => {
    if (keyWord) {
      setIsLoading(true);
      locationRequest(keyWord.toLowerCase())
        .then(locationTransform)
        .then((res) => {
          setIsLoading(false);
          setLocation(res);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [keyWord]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        search: onSearch,
        location,
        keyWord,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
