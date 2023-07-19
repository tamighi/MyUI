import { styled, WebTarget, DefaultTheme } from "styled-components";
import { lightTheme } from "../constants";

const styledWithDefaultTheme = <T extends {}>(Component: WebTarget) => {
  const fn = styled(Component)<T>;
  return fn(({theme}) => {})
  return styled(Component)<T>(({ theme }: { theme: DefaultTheme }) => {
    if (Object.keys(theme).length === 0) {
      return lightTheme;
    }
    return theme;
  });
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "text" | "contained";
};

const MyButton = styledWithDefaultTheme<Props>("button")(({ theme }: any) => {
  return {

  };
});
