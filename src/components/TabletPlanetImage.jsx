import styled from "styled-components";

const TabletPlanetImage = ({ activeImage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {activeImage && <Planet src={activeImage} alt="Planet" />}
    </div>
  );
};

export default TabletPlanetImage;

const Planet = styled.img`
  margin-top: 40px;
  width: 70%;
`;
