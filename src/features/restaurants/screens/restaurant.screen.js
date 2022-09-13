import { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { SearchBar } from "../../search/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/safearea/safe-area.components";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color={"#002465"} />
      ) : (
        <>
          <SearchContainer>
            <SearchBar
              isFavouritesToggled={isFavouritesToggled}
              onPressToggleFavourites={() =>
                setIsFavouritesToggled(!isFavouritesToggled)
              }
            />
          </SearchContainer>
          {isFavouritesToggled && <FavouritesBar favourites={favourites} />}
          <RestaurantContainer
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Restaurants-Detail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
