import React from "react";
import styled from "styled-components";
import { Image, View, ScrollView } from "react-native";
import { Text } from "../typography/text.component";

const Container = styled(ScrollView)`
  //   background: #fff;
`;

const Map = styled(View)`
  padding-right: ${(props) => `${props.theme.space[3]}`};
  max-width: 100px;
`;

const ImageContainer = styled(Image)`
  width: 75px;
  height: 75px;
  border-radius: 5px;
`;

function MapCard({ restaurant = {} }) {
  return (
    <Map>
      <ImageContainer source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Map>
  );
}

export const FavouritesBar = ({ favourites }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ minHeight: 125, padding: 16 }}>
      <Text variant="caption">Favourites</Text>
      <Container horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <MapCard restaurant={restaurant} />
        ))}
      </Container>
    </View>
  );
};
