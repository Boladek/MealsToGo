import { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { SearchBar } from "../../search/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/safearea/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const RestaurantContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <ActivityIndicator animating={isLoading} color={"#002465"} />
      ) : (
        <>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
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
