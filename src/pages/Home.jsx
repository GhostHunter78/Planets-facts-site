import styled from "styled-components";
import data from "../data.json";
import SourceIcon from "../SVGs/SourceIcon";
import { useParams } from "react-router-dom";
import { useState } from "react";
import TabletMenu from "../components/TabletMenu";
import TabletContent from "../components/TabletContent";
import TabletInfo from "../components/TabletInfo";

const Home = () => {
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

  const { name } = useParams();
  const planet = data.find((item) => item.name.toLowerCase() === name);

  if (!planet) {
    // Handleing the case where data is not found
    return null;
  }

  // Getting appropriate planet colors to then give them to the navigation words divs'
  const getPlanetColor = (planetName) => {
    const normalizedPlanetName = planetName.toLowerCase();
    const planet = planets.find(
      (p) => p.name.toLowerCase() === normalizedPlanetName
    );
    return planet ? planet.color : "white";
  };

  const activeNavigationColor = getPlanetColor(name);

  // Setting OVERVIEW as a default navigation word
  const [activeItem, setActiveItem] = useState("OVERVIEW");

  const handleNavigationClick = (itemName) => {
    setActiveItem(itemName);
  };

  const activeContent =
    activeItem === "OVERVIEW"
      ? planet.overview
      : activeItem === "STRUCTURE"
      ? planet.structure
      : activeItem === "SURFACE"
      ? planet.geology
      : null;

  const activeImage =
    activeItem === "OVERVIEW"
      ? planet.images.planet
      : activeItem === "STRUCTURE"
      ? planet.images.internal
      : activeItem === "SURFACE"
      ? planet.images.geology
      : null;

  return (
    <>
      <NavigationDiv>
        <ActiveNavigationDiv
          borderColor={activeItem === "OVERVIEW" ? activeNavigationColor : null}
          onClick={() => handleNavigationClick("OVERVIEW")}
        >
          <NavigationWord opacity={activeItem === "OVERVIEW" ? "1" : null}>
            OVERVIEW
          </NavigationWord>
        </ActiveNavigationDiv>
        <ActiveNavigationDiv
          borderColor={
            activeItem === "STRUCTURE" ? activeNavigationColor : null
          }
          onClick={() => handleNavigationClick("STRUCTURE")}
        >
          <NavigationWord opacity={activeItem === "STRUCTURE" ? "1" : null}>
            STRUCTURE
          </NavigationWord>
        </ActiveNavigationDiv>
        <ActiveNavigationDiv
          borderColor={activeItem === "SURFACE" ? activeNavigationColor : null}
          onClick={() => handleNavigationClick("SURFACE")}
        >
          <NavigationWord opacity={activeItem === "SURFACE" ? "1" : null}>
            SURFACE
          </NavigationWord>
        </ActiveNavigationDiv>
      </NavigationDiv>

      {/* Importing navigation div for tablet (tablet menu)*/}
      <TabletMenu />
      <Line></Line>
      <Main>
        <PlanetImg src={activeImage} alt={`${planet.name} planet`} />
        <PlanetName>{planet.name}</PlanetName>
        <Content>{activeContent.content}</Content>
        <SourceDiv>
          <SourceText>Source : </SourceText>
          <SourceLink
            href={activeContent.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </SourceLink>
          <SourceIcon />
        </SourceDiv>
        <InfoDivs>
          <InfoDiv>
            <InfoTitle>rotation time</InfoTitle>
            <InfoNumbers>{planet.rotation}</InfoNumbers>
          </InfoDiv>
          <InfoDiv>
            <InfoTitle>revolution time</InfoTitle>
            <InfoNumbers>{planet.revolution}</InfoNumbers>
          </InfoDiv>
          <InfoDiv>
            <InfoTitle>radius</InfoTitle>
            <InfoNumbers>{planet.radius}</InfoNumbers>
          </InfoDiv>
          <InfoDiv>
            <InfoTitle>average temp.</InfoTitle>
            <InfoNumbers>{planet.temperature}</InfoNumbers>
          </InfoDiv>
        </InfoDivs>
        <TabletDiv>
          {/* Planet name, content and Wikipedia source div for Tablet dedisgn. Importing TabletContent from components */}
          <TabletContent />
          {/* Importing TabletInfo from components to display planet information divs for tablet design */}
          <TabletInfo />
        </TabletDiv>
      </Main>
    </>
  );
};

export default Home;

const Main = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 24px 47px 24px;
  @media (min-width: 768px) {
    padding: 36px 39px;
  }
`;

const Line = styled.div`
  height: 1px;
  opacity: 0.2;
  background: #fff;
`;

const NavigationDiv = styled.div`
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ActiveNavigationDiv = styled.div`
  width: 62px;
  padding: 17px 0;
  border-bottom: 4px solid ${(props) => props.borderColor || "transparent"};
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
  opacity: ${(props) => props.opacity || "0.5"};
`;

const PlanetImg = styled.img`
  width: 50%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PlanetName = styled.h2`
  margin-top: 35px;
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
  font-family: Antonio;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.p`
  margin-top: 16px;
  color: #ffffffb3;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SourceDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 5px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SourceText = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
`;

const SourceLink = styled.a`
  opacity: 0.5;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  text-decoration-line: underline;
`;

const InfoDivs = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const InfoDiv = styled.div`
  width: 327px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff49;
`;

const InfoTitle = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
  opacity: 0.2;
`;

const InfoNumbers = styled.h2`
  color: #fff;
  font-family: Antonio;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.75px;
  text-transform: uppercase;
`;

const TabletDiv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 165px;
  }
`;
