import styled from "styled-components";

const StyledBurgerIcon = styled.svg`
  width: 24px;
  height: 17px;
  cursor: pointer;
  opacity: 1;
  display: block;
  & path {
    fill: white; /* Apply fill directly to the path element */
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerIcon = (props) => (
  <StyledBurgerIcon {...props}>
    <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
  </StyledBurgerIcon>
);

export default BurgerIcon;
