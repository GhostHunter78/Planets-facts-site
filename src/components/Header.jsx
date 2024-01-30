import styled from "styled-components";

const Header = () => {
  return (
    <div className="header">
      <LogoAndBurgerIcon>
        <LogoText>THE PLANETS</LogoText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </LogoAndBurgerIcon>
      <Line></Line>
      <NavigationDiv>
        <NavigationWord>OVERVIEW</NavigationWord>
        <NavigationWord>STRUCTURE</NavigationWord>
        <NavigationWord>SURFACE</NavigationWord>
      </NavigationDiv>
      <Line></Line>
    </div>
  );
};

export default Header;

const LogoAndBurgerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;

const LogoText = styled.p`
  color: #fff;
  font-family: Antonio;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const Line = styled.div`
  height: 1px;
  opacity: 0.2;
  background: #fff;
`;

const NavigationDiv = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationWord = styled.p`
  color: #fff;
  text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  opacity: 0.5;
`;
