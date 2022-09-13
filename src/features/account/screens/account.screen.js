import {
  Background,
  AccountWrapper,
  AccountButtonWrapper,
  AuthButton,
  Spacer,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountWrapper />
      <Title>Meals To Go</Title>
      <Spacer />
      <AccountButtonWrapper>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer />
        <AuthButton
          icon="file-document-outline"
          mode="contained"
          onPress={() => navigation.navigate("SignUp")}
        >
          Register
        </AuthButton>
      </AccountButtonWrapper>
    </Background>
  );
};
