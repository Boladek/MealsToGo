import React, { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Container } from "../components/restaurant-info-card.styles";
import { List } from "react-native-paper";
import { ScrollView, View } from "react-native";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, sexExpanded] = useState({
    breakFast: false,
    lunch: false,
    dinner: false,
  });

  const handleExpansion = (meal) => {
    if (meal === "breakFast") {
      sexExpanded({ ...expanded, breakFast: !expanded.breakFast });
    }
    if (meal === "lunch") {
      sexExpanded({ ...expanded, lunch: !expanded.lunch });
    }
    if (meal === "dinner") {
      sexExpanded({ ...expanded, dinner: !expanded.dinner });
    }
  };

  return (
    <View>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          id="1"
          expanded={expanded.breakFast}
          onPress={() => handleExpansion("breakFast")}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Puff Puff" />
          <List.Item title="Fried Eggs" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          id="2"
          expanded={expanded.lunch}
          onPress={() => handleExpansion("lunch")}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Bread & Beans" />
          <List.Item title="Yam and Egg/Beans" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          id="3"
          expanded={expanded.dinner}
          onPress={() => handleExpansion("dinner")}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Boladek's Special" />
          <List.Item title="Lavish" />
        </List.Accordion>
      </ScrollView>
    </View>
  );
};

export default RestaurantDetailScreen;
