import React from "react";
import styled from "styled-components";
//import { useMediaQuery } from "react-responsive";
import BookLoader from "./bookloader"; // Adjust the import path for your BookLoader component

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Center vertically in the viewport */
`;

function CenteredBookLoader() {
  return (
    <CenteredContainer>
      <BookLoader text="Loading..." size="64px" />
    </CenteredContainer>
  );
}

export default CenteredBookLoader;
