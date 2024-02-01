import "./style.css";
import Header from "./components/Header";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Main>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/planets/mercury" />} /> */}
        <Route path="/planets/:name" element={<Home />} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100vw;
`;
