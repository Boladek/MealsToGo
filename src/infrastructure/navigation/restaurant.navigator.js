import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurant.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants-Page"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="Restaurants-Detail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
}

export default RestaurantNavigator;
