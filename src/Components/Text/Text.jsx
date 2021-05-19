import React from "react";
import Styled, {css} from "styled-components";
// import {withText} from "./withText.js";
export const Text = Styled(({string, name, className, ...props}) => {
  return (
    <p id={name} className={className}>
      {string}
    </p>
  );
})`
  line-height:1.5rem;
  margin:0;
  box-sizing:border-box;
  ${({fontSize}) => (fontSize ? `font-size:${fontSize}px` : "")};  
  ${({fontWeight}) => (fontWeight ? `font-weight:${fontWeight}` : "")};  
`;
