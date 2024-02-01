import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../SVGs/ArrowIcon";
import { Link } from "react-router-dom";

// Creating array for planets to then iterate through them
// with using map and display them in menu
const planets = [
  { name: "Mercury", color: "#def4fc" },
  { name: "Venus", color: "#f7cc7f" },
  { name: "Earth", color: "#545bfe" },
  { name: "Mars", color: "#FF6A45" },
  { name: "Jupiter", color: "#ECAD7A" },
  { name: "Saturn", color: "#FCCB6B" },
  { name: "Uranus", color: "#65F0D5" },
  { name: "Neptune", color: "#497EFA" },
];

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Toggleing the state to manage the click
    setIsClicked(!isClicked);
  };

  // When BurgerIcon is clicked it lowers its opcity to appear as "close icon"
  const BurgerIcon = ({ onClick, isClicked }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      onClick={onClick}
      style={{ opacity: isClicked ? "0.2" : "1" }}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );

  return (
    <div className="header">
      <LogoAndBurgerIcon>
        <LogoText>THE PLANETS</LogoText>
        <BurgerIcon onClick={handleClick} isClicked={isClicked} />
      </LogoAndBurgerIcon>
      <Line></Line>
      <NavigationDiv>
        <NavigationWord>OVERVIEW</NavigationWord>
        <NavigationWord>STRUCTURE</NavigationWord>
        <NavigationWord>SURFACE</NavigationWord>
      </NavigationDiv>
      <Line></Line>

      {/*iterating through planets' array using map to display them inside the menu*/}
      <MenuDiv isClicked={isClicked}>
        {planets.map((planet, index) => (
          <React.Fragment key={planet.name}>
            {/* Link to navigate to the planet */}
            <Link
              to={`/planets/${planet.name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <PlanetDivAndArrowIcon
                onClick={() => {
                  setIsClicked(false);
                }}
              >
                <PlanetDiv>
                  <PlanetColor color={planet.color}></PlanetColor>
                  <PlanetName>{planet.name}</PlanetName>
                </PlanetDiv>
                <ArrowIcon />
              </PlanetDivAndArrowIcon>
            </Link>
            {/* Rendering MenuLine after each Link, except for the last one */}
            {index < planets.length - 1 && <MenuLine />}
          </React.Fragment>
        ))}
      </MenuDiv>
    </div>
  );
};

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
  z-index: 1;
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

const MenuDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 70px;
  left: 0;
  background-color: #070724;
  z-index: 100;
  padding: 44px 32px 67px 24px;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
`;

const PlanetDivAndArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 327px;
`;

const PlanetName = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

const PlanetDiv = styled.div`
  border: none;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const PlanetColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const MenuLine = styled.div`
  width: 327px;
  height: 1px;
  opacity: 0.1;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Header;
