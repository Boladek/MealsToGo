/* eslint-disable react/no-unstable-nested-components */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { SafeArea } from "./src/components/safearea/safe-area.components";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as useLobster,
  Lobster_400Regular,
} from "@expo-google-fonts/lobster";

import { theme } from "./src/infrastructure/theme";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  const [lobsterLoaded] = useLobster({
    Lobster_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !lobsterLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = focused
                        ? "ios-restaurant"
                        : "ios-restaurant-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused
                        ? "ios-settings"
                        : "ios-settings-outline";
                    } else if (route.name === "Maps") {
                      iconName = focused ? "ios-map" : "ios-map-outline";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "black",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Maps" component={MapsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
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

const MapsScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Maps!</Text>
      </View>
    </SafeArea>
  );
};
