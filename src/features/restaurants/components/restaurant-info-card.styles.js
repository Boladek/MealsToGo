import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";

export const Info = styled(View)`
  padding-top: ${(props) => props.theme.space[3]};
`;

export const Container = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)``;

export const RatingsAndOpen = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EndSection = styled(View)`
  flex-direction: row;
  gap: ${(props) => props.theme.space[4]};
  align-items: center;
`;

export const Ratings = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

export const Icon = styled(Image)`
  height: 25px;
  width: 25px;
`;

export const Spacer = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;
