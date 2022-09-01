import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import { SafeArea } from "../../../components/safearea/safe-area.components";
import { Container } from "../components/restaurant-info-card.styles";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <Container>
      <RestaurantInfoCard restaurant={restaurant} />
    </Container>
  );
};

export default RestaurantDetailScreen;
