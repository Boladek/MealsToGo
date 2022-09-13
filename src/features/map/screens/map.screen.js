import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, Dimensions } from "react-native";
// import styled from "styled-components/native";

import { SafeArea } from "../../../components/safearea/safe-area.components";
import { SearchBar } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const MapScreen = ({ navigation }) => {
  const { viewport, main } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northLat = viewport.northeast.lat;
    const southLat = viewport.southwest.lat;
    setLatDelta(northLat - southLat);
  }, [viewport]);

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
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
              description={restaurant.address}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurants-Detail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
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
