import styled from "styled-components";
import data from "../../data.json";
import SourceIcon from "../SVGs/SourceIcon";
import { useParams } from "react-router-dom";

const Home = () => {
  const { name } = useParams();
  const planet = data.find((item) => item.name.toLowerCase() === name);

  if (!planet) {
    // Handleing the case where data is not found
    return null;
  }

  return (
    <>
      <Main>
        <PlanetImg src={planet.images.planet} alt={`${planet.name} planet`} />
        <PlanetName>{planet.name}</PlanetName>
        <Content>{planet.overview.content}</Content>
        <SourceDiv>
          <SourceText>Source : </SourceText>
          <SourceLink
            href={planet.overview.source}
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
`;

const PlanetImg = styled.img`
  width: 50%;
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
`;

const Content = styled.p`
  margin-top: 16px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const SourceDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 5px;
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
