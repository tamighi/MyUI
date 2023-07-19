import { styled } from "styled-components";

type Props = React.BaseHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  font-weight: bold;
`;

const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
