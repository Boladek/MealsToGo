import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../../search/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const RestaurantContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}; ;
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantContainer>
        <RestaurantInfoCard />
      </RestaurantContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
