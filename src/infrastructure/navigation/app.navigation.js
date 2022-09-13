/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { SafeArea } from "../../components/safearea/safe-area.components";
import { Ionicons } from "@expo/vector-icons";
import RestaurantNavigator from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          } else if (route.name === "Maps") {
            iconName = focused ? "ios-map" : "ios-map-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Maps" component={MapScreen} />
    </Tab.Navigator>
  );
}

const SettingsScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};
