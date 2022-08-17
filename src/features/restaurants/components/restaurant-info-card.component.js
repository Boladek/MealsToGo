import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding-top: 8px;
`;

const Container = styled(Card)`
  padding: 8px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cache.desktopnexus.com/thumbseg/2603/2603436-bigthumbnail.jpg",
    ],
    address = "200, Lagos Street.",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Container elevation={5}>
      <Container.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   content: {
//     padding: 8,
//   },
// });
