import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { SearchBar } from "../../search/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.body}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  search: {
    padding: 16,
  },
  body: {
    padding: 16,
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default RestaurantScreen;
