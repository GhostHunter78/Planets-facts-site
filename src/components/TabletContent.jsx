import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SourceIcon from "../SVGs/SourceIcon";
import TabletPlanetImage from "./TabletPlanetImage";

const TabletContent = () => {
  const planets = [
    { name: "Mercury", color: "#419EBB" },
    { name: "Venus", color: "#EDA249" },
    { name: "Earth", color: "#6D2ED5" },
    { name: "Mars", color: "#D14C32" },
    { name: "Jupiter", color: "#D83A34" },
    { name: "Saturn", color: "#CD5120" },
    { name: "Uranus", color: "#1EC1A2" },
    { name: "Neptune", color: "#2D68F0" },
  ];

  const { name } = useParams();
  const planet = data.find((item) => item.name.toLowerCase() === name);

  if (!planet) {
    // Handleing the case where data is not found
    return null;
  }

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
      <TabletPlanetImage activeImage={activeImage} />
      <TabletMain>
        <TabletPlanetSrcAndContent>
          <TabletPlanetName>{planet.name}</TabletPlanetName>
          <Content>{activeContent.content}</Content>
          <TabletSourceDiv>
            <SourceText>Source : </SourceText>
            <SourceLink
              href={activeContent.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </SourceLink>
            <SourceIcon />
          </TabletSourceDiv>
        </TabletPlanetSrcAndContent>
        <TabletNavigationsDiv>
          <ActiveNavigationButton
            onClick={() => handleNavigationClick("OVERVIEW")}
            backgroundColor={
              activeItem === "OVERVIEW" ? activeNavigationColor : null
            }
          >
            01 <span style={{ color: "white" }}>OVERVIEW</span>
          </ActiveNavigationButton>
          <ActiveNavigationButton
            onClick={() => handleNavigationClick("STRUCTURE")}
            backgroundColor={
              activeItem === "STRUCTURE" ? activeNavigationColor : null
            }
          >
            02 <span style={{ color: "white" }}>INTERNAL STRUCTURE</span>
          </ActiveNavigationButton>
          <ActiveNavigationButton
            onClick={() => handleNavigationClick("SURFACE")}
            backgroundColor={
              activeItem === "SURFACE" ? activeNavigationColor : null
            }
          >
            01 <span style={{ color: "white" }}>SURFACE GEOLOGY</span>
          </ActiveNavigationButton>
        </TabletNavigationsDiv>
      </TabletMain>
    </>
  );
};

export default TabletContent;

const TabletMain = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-left: 39px;
    gap: 70px;
  }
`;

const TabletPlanetSrcAndContent = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 339px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TabletPlanetName = styled.h2`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 35px;
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    line-height: normal;
    font-family: Antonio;
    text-transform: uppercase;
  }
`;

const Content = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 24px;
    color: #ffffffb3;
    text-align: left;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const TabletSourceDiv = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 32px;
    gap: 5px;
  }
`;

const TabletNavigationsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 50px;
`;

const TabletNavigationButton = styled.button`
  width: 281px;
  padding: 10px 20px;
  border: 1px solid #ffffff49;
  font-size: 11px;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 1.9285714626312256px;
  text-align: left;
  color: #ffffff5c;
  background: none;
`;

const ActiveNavigationButton = styled(TabletNavigationButton)`
  background-color: ${(props) => props.backgroundColor || "transparent"};
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
