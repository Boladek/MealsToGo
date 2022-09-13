import { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";

import {
  Background,
  AccountWrapper,
  AccountButtonWrapper,
  AuthButton,
  Spacer,
  Input,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const login = () => {
    onLogin(email, password);
  };

  return (
    <Background>
      <AccountWrapper />
      <Title>Meals To Go</Title>
      <Spacer />
      <AccountButtonWrapper>
        <Input
          label="Email"
          value={email}
          right={<Input.Icon icon="email" />}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Spacer />
        <Input
          label="Password"
          secureTextEntry={check}
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          right={<Input.Icon icon="eye" onPress={() => setCheck(!check)} />}
        />
        <Spacer />
        {error && <Text variant="error">{error}</Text>}
        <AuthButton icon="login" mode="contained" onPress={login}>
          {isLoading ? (
            <ActivityIndicator animating={true} color="#fff" />
          ) : (
            "Login"
          )}
        </AuthButton>
      </AccountButtonWrapper>
      <Spacer />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </Background>
  );
};
