import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/safearea/safe-area.components";
import { SearchBar } from "../components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const MapScreen = () => {
  const { viewport, main } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northLat = viewport.northeast.lat;
    const southLat = viewport.southwest.lat;
    setLatDelta(northLat - southLat);
  }, [viewport]);

  useEffect(() => {
    console.log(restaurants.map((restaurant) => restaurant.geometry.location));
  }, [restaurants]);

  return (
    <SafeArea style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: main.lat,
          longitude: main.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
              description={restaurant.address}
            />
          );
        })}
      </MapView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  search: {
    position: "absolute",
    top: 40,
    width: "100%",
    zIndex: 1000,
    padding: 10,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
