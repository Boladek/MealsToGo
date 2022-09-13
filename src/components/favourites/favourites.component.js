import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useContext } from "react";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouritesButton = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1000;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find(
    (favourite) => favourite.name === restaurant.name
  );

  return (
    <FavouritesButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouritesButton>
  );
};
