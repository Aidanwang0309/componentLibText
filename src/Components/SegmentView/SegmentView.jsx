import React from "react";
import Styled, {css} from "styled-components";

const SegmentView = Styled(({children, name, className}) => {
  return (
    <div id={name} className={className}>
      {children}
    </div>
  );
})`
  box-sizing:border-box;
  display:flex;
  ${({justifyContent}) =>
    justifyContent ? `justify-content:${justifyContent}` : ""};  
  ${({position}) => (position ? `position:${position}` : "")};  
  ${({overflow}) => (overflow ? `overflow:${overflow}` : "")};  
  ${({top}) => (top ? `top:${top}` : "")};
  ${({bottom}) => (bottom ? `left:${bottom}` : "")};
  ${({right}) => (right ? `right:${right}` : "")};
  ${({left}) => (left ? `left:${left}` : "")};
  ${({direction}) => (direction ? `flex-direction:${direction}` : "")};
  ${({padding}) => (padding ? `padding:${padding}px` : "")};
  ${({margin}) => (margin ? `margin:${margin}px` : "")};
  ${({width}) => (width ? `width:${width}` : "")};
  ${({height}) => (height ? `height:${height}` : "")};
  ${({background}) => (background ? `background:${background}` : "")};
`;

export {SegmentView};
