import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { SignUpScreen } from "../../features/account/screens/sign-up.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
