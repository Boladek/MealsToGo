import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

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

const firebaseConfig = {
  apiKey: "AIzaSyCg1SVi6BMoP_atQY82wQw576lVSQ-iWjw",
  authDomain: "mealstogo-92fa6.firebaseapp.com",
  projectId: "mealstogo-92fa6",
  storageBucket: "mealstogo-92fa6.appspot.com",
  messagingSenderId: "1035982745805",
  appId: "1:1035982745805:web:c3e887774f12c3c6803984",
};

firebase.initializeApp(firebaseConfig);

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
