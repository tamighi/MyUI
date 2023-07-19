import { styled } from "styled-components";

type Props = React.BaseHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  font-weight: bold;
  border: none;
  text-decoration: none;
  border-radius: 10px;
  padding: 6px;
`;

const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
