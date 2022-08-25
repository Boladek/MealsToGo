import React from "react";
import { Card } from "react-native-paper";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Text } from "../../../components/typography/text.component";
import {
  Spacer,
  Icon,
  Container,
  Info,
  CardCover,
  Ratings,
  EndSection,
  RatingsAndOpen,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8101cd5d-2451-4017-84ac-5a6829df1ce7/depdvpo-6ddc9b02-bee4-4d31-844d-1e5908f1e6c0.png/v1/fit/w_300,h_900,q_70,strp/kapri_styles_by_nonhovoglia_depdvpo-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwMCIsInBhdGgiOiJcL2ZcLzgxMDFjZDVkLTI0NTEtNDAxNy04NGFjLTVhNjgyOWRmMWNlN1wvZGVwZHZwby02ZGRjOWIwMi1iZWU0LTRkMzEtODQ0ZC0xZTU5MDhmMWU2YzAucG5nIiwid2lkdGgiOiI8PTEwNzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.paBgHZ9DCoC0kO-1JWrOgCjaWXx9NsBEZDCBgYlUq_4",
    photos = [
      "https://cache.desktopnexus.com/thumbseg/2603/2603436-bigthumbnail.jpg",
    ],
    address = "200, Lagos Street.",
    isOpenNow,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratings = Array.from(new Array(Math.floor(rating)));

  return (
    <Container elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RatingsAndOpen>
          <Ratings>
            {ratings.map((_, i) => (
              <SvgXml xml={star} height={20} width={20} key={i} />
            ))}
          </Ratings>
          <EndSection>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            {isClosedTemporarily && <Spacer />}
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            {isOpenNow && <Spacer />}
            <Icon source={{ uri: icon }} />
          </EndSection>
        </RatingsAndOpen>
        <Text variant="caption">{address}</Text>
      </Info>
    </Container>
  );
};
