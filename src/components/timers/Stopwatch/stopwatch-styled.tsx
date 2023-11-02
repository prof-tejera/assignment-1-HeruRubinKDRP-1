import styled from "styled-components";
import {softShadowCSS} from "../../generic/common-styles/CommonStyles";

export const StopwatchStyled=styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;
  .time-cards-container{
    display: flex;
    flex-direction: row;
    gap: 3vw;
  }
  ${softShadowCSS}
  
`