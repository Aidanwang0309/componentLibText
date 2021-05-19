import React from "react";
import Styled from "styled-components";

interface Frame {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface ButtonTheme extends Frame {
  direction?: string;
  padding?: number[];
  overflow?: string;
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
}

export interface ButtonProps extends ButtonTheme {
  name?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = Styled(
  ({children, name, className, onClick}: ButtonProps) => {
    return (
      <button id={name} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
)`

  box-sizing:border-box;
  ${({border}) => (`border:${border ? border: "none"}`};  
  ${({position}) => (position ? `position:${position}` : "")};  
  ${({overflow}) => (overflow ? `overflow:${overflow}` : "")};  
  ${({top}) => (top ? `top:${top}` : "")};
  ${({bottom}) => (bottom ? `left:${bottom}` : "")};
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
      : ""};
  ${({margin}) => (margin ? `margin:${margin}px` : "")};
  ${({width}) => (width ? `width:${width}` : "")};
  ${({height}) => (height ? `height:${height}` : "")};
  ${({background}) => (background ? `background:${background}` : "")};
`;
