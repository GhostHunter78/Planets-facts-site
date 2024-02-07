import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";

const TabletInfo = () => {
  const { name } = useParams();
  const planet = data.find((item) => item.name.toLowerCase() === name);

  if (!planet) {
    // Handleing the case where data is not found
    return null;
  }

  return (
    <>
      <TabletInfoDivs>
        <TabletInfoDiv>
          <TabletInfoTitle>rotation time</TabletInfoTitle>
          <TabletInfoNumbers>{planet.rotation}</TabletInfoNumbers>
        </TabletInfoDiv>
        <TabletInfoDiv>
          <TabletInfoTitle>revolution time</TabletInfoTitle>
          <TabletInfoNumbers>{planet.revolution}</TabletInfoNumbers>
        </TabletInfoDiv>
        <TabletInfoDiv>
          <TabletInfoTitle>radius</TabletInfoTitle>
          <TabletInfoNumbers>{planet.radius}</TabletInfoNumbers>
        </TabletInfoDiv>
        <TabletInfoDiv>
          <TabletInfoTitle>average temp.</TabletInfoTitle>
          <TabletInfoNumbers>{planet.temperature}</TabletInfoNumbers>
        </TabletInfoDiv>
      </TabletInfoDivs>
    </>
  );
};

export default TabletInfo;

const TabletInfoDivs = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-top: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-left: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 87px;
  }
`;

const TabletInfoDiv = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 167px;
    padding: 16px 0 19px 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff49;
    gap: 6px;
  }

  @media (min-width: 1440px) {
    width: 255px;
    padding: 20px 0 27px 23px;
  }
`;

const TabletInfoTitle = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.727px;
    text-transform: uppercase;
    opacity: 0.2;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

const TabletInfoNumbers = styled.h2`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #fff;
    font-family: Antonio;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;
