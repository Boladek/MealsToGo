import { Text as Test } from "react-native";
import styled from "styled-components";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular}
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const variants = { body, hint, label, caption, error };

export const Text = styled(Test)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
