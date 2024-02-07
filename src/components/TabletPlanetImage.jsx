import styled from "styled-components";

const TabletPlanetImage = ({ activeImage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        width: "100%",
      }}
    >
      {activeImage && <Planet src={activeImage} alt="Planet" />}
    </div>
  );
};

export default TabletPlanetImage;

const Planet = styled.img`
  width: 40%;
`;
