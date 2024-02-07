import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const DesktopMenu = () => {
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
    // Handling the case where data is not found
    return null;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu>
          {planets.map((planet, index) => (
            <MenuWord key={index} color={planet.color}>
              {/* Link to navigate to the planet */}
              <Link
                to={`/planets/${planet.name.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {planet.name}
              </Link>
            </MenuWord>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default DesktopMenu;

const Menu = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 33px;
  }
`;

const MenuWord = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff92;
  cursor: pointer;
  position: relative;

  &:hover {
    color: white;
    transition: 0.5s;
    &:before {
      content: "";
      position: absolute;
      top: -36px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.color};
      transition: height 2s;
    }
  }
`;
