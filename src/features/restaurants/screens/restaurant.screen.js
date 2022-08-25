import { useContext } from "react";
import { View, FlatList } from "react-native";
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

const RestaurantScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  if (isLoading) {
    return <ActivityIndicator animating={isLoading} color={"#002465"} />;
  }

  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantContainer
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
      {/* <RestaurantContainer>
      </RestaurantContainer> */}
    </SafeArea>
  );
};

export default RestaurantScreen;
