import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TabletMenu = () => {
  const planets = [
    { name: "Mercury" },
    { name: "Venus" },
    { name: "Earth" },
    { name: "Mars" },
    { name: "Jupiter" },
    { name: "Saturn" },
    { name: "Uranus" },
    { name: "Neptune" },
  ];

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu isClicked={isClicked}>
          {planets.map((planet, index) => (
            <MenuWord key={index}>
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

export default TabletMenu;

const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 39px 52px 27px 52px;
    gap: 33px;
  }
`;

const MenuWord = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff92;
`;
