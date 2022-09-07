import { createContext, useContext, useEffect, useState } from "react";

import { restaurantService, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
// import { locations } from "../location/location.mock";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([1, 2, 3]);
  const { location } = useContext(LocationContext);

  const fetchRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantService(loc)
        .then(restaurantsTransform)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    fetchRestaurants(location);
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
