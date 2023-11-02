import styled from "styled-components";

export const TimeItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  .time-unit-label{
    font-family: 'Oswald', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
  }
  .time-section-number{
    font-family: 'JetBrains Mono', monospace;
    font-size: 4vw;
    position: relative;
    height: 6vw;
    width: 100%;
    .number-container{
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
    }
  }

`