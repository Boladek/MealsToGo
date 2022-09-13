import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, Platform } from "react-native";
import { WebView } from "react-native-webview";

const MyText = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: ${(props) => props.theme.fontWeights.regular}
    color: ${(props) => props.theme.colors.text.primary}
`;

const Container = styled(View)`
  padding: ${(props) => `${props.theme.space[3]}`};
  max-width: 125px;
  min-height: 150px;
`;

const ImageContainer = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const WebImage = styled(WebView)`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const isAndroid = Platform.OS === "android";

export function MapCallout({ restaurant = {} }) {
  const Imager = isAndroid ? WebImage : ImageContainer;
  return (
    <Container>
      <Imager source={{ uri: restaurant.photos[0] }} />
      <MyText>{restaurant.name}</MyText>
    </Container>
  );
}
