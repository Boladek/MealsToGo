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

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(true);
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const register = () => {
    onRegister(email, password, confirmPassword);
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
          secureTextEntry={checkPassword}
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          right={
            <Input.Icon
              icon="eye"
              onPress={() => setCheckPassword(!checkPassword)}
            />
          }
        />
        <Spacer />
        <Input
          label="Confirm Password"
          secureTextEntry={checkConfirmPassword}
          value={confirmPassword}
          autoCapitalize="none"
          onChangeText={(text) => setConfirmPassword(text)}
          right={
            <Input.Icon
              icon="eye"
              onPress={() => setCheckConfirmPassword(!checkConfirmPassword)}
            />
          }
        />
        <Spacer />
        {error && <Text variant="error">{error}</Text>}
        <AuthButton icon="email" mode="contained" onPress={register}>
          {isLoading ? (
            <ActivityIndicator animating={true} color="#fff" />
          ) : (
            "Register"
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
