import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../SVGs/ArrowIcon";
import { Link, useParams } from "react-router-dom";
import BurgerIcon from "../SVGs/BurgerIcon";

// Adding breakpoints for responsive designs
const breakpoints = {
  tablet: 768,
  desktop: 1440,
};

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

// Creating array for planets to then iterate through them
// with using map and display them in the menu
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

  // Importing BurgerIcon SVG as a component
  <BurgerIcon />;

  return (
    <div className="header">
      <LogoAndBurgerIcon>
        <LogoText>THE PLANETS</LogoText>
        <BurgerIcon onClick={handleClick} isClicked={isClicked} />
      </LogoAndBurgerIcon>
      <Line></Line>

      {
        /*iterating through planets' array using map to display them inside the menu*/
        // using React.Fragment to also return MenuLines
      }
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

export default Header;

const LogoAndBurgerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  ${media.tablet`
    padding-top: 32px
  `}
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

  ${media.tablet`
    margin: auto
  `}
`;

const Line = styled.div`
  height: 1px;
  opacity: 0.2;
  background: #fff;

  @media (min-width: 768px) {
    display: none;
  }
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
