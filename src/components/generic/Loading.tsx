import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const primaryColor = "#ffa2bf";

const sizeMapping = {
  small: 10,
  medium: 14,
  large: 20,
};

const Container = styled.div`
  animation: spin 1.5s linear infinite;

  @-moz-keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% { 
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% { 
      transform: rotate(360deg);
    }
  }
`;



const DotGroup = styled.div`
  display: flex;
`;

const Loading = ({ size = "medium", color = primaryColor }) => {
  return (
    <Container>
      <DotGroup>
      </DotGroup>
      <DotGroup>
      </DotGroup>
    </Container>
  );
};


export default Loading;
