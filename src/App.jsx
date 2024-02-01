import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />
        <Route
          path="/planets/:name"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
`;

export default App;
