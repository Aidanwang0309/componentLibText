import React from "react";
import Styled, {css} from "styled-components";

const LinearLayout = Styled(({children, name, className}) => {
  return (
    <div id={name} className={className}>
      {children}
    </div>
  );
})`
  box-sizing:border-box;
  display:flex;
  ${({align}) => (align ? `align-items:${align}` : "")};  
  ${({position}) => (position ? `position:${position}` : "")};  
  ${({overflow}) => (overflow ? `overflow:${overflow}` : "")};  
  ${({top}) => (top ? `top:${top}` : "")};
  ${({bottom}) => (bottom ? `left:${bottom}` : "")};
  ${({justify}) => (justify ? `justify-content:${justify}` : "")};
  ${({right}) => (right ? `right:${right}` : "")};
  ${({left}) => (left ? `left:${left}` : "")};
  ${({direction}) => (direction ? `flex-direction:${direction}` : "")};
  ${({padding}) =>
    padding
      ? `
  padding-top: ${padding[0]}px;
  padding-right: ${padding[1]}px;
  padding-bottom: ${padding[2]}px;
  padding-left: ${padding[3]}px;
  `
      : ""};  ${({margin}) => (margin ? `margin:${margin}px` : "")};
  ${({width}) => (width ? `width:${width}` : "")};
  ${({height}) => (height ? `height:${height}` : "")};
  ${({background}) => (background ? `background:${background}` : "")};
`;

export {LinearLayout};
