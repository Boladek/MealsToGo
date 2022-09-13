import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const Background = styled(ImageBackground).attrs({
  source: require("../../../../assets/back.jpeg"),
  resizeMode: "cover",
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountWrapper = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.35);
`;

export const AccountButtonWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const Spacer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Input = styled(TextInput).attrs({})`
  padding: ${(props) => props.theme.space[1]};
  height: ${(props) => props.theme.sizes[3]};
  width: 250px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
