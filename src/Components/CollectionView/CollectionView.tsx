import React from "react";
import Styled, {css} from "styled-components";

// const flexDirectionMap = {
//   horizontal: "row",
//   vertical: "column",
// };
// const flexAlignMap = {
//   center: "center",
//   end: "flex-end",
//   start: "flex-start",
//   stretch: "stretch",
// };
// const flexJustifyMap = {
//   min: "start",
//   max: "flex-end",
//   center: "center",
//   "space-between": "space-between",
//   "space-around": "space-around",
//   "space-evenly": "space-evenly",
// };

// const linearLayoutProperties = css`
//   display: flex;
//   flex-direction: ${({linearLayout}) => {
//     return flexDirectionMap[linearLayout.axis];
//   }};
//   ${({linearLayout}) =>
//     linearLayout.weight ? `flex-grow: ${linearLayout.weight}` : ""};
//   align-items: ${({linearLayout}) => flexAlignMap[linearLayout.align]};
//   justify-content: ${({linearLayout}) =>
//     flexJustifyMap[linearLayout.distribution]};
// `;
interface Frame {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface CollectionTheme extends Frame {
  direction?: string;
  padding?: number[];
  overflow?: string;
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
}

export interface CollectionProps extends CollectionTheme {
  content?: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const CollectionView = Styled(
  ({children, name, className}: CollectionProps) => {
    return (
      <div id={name} className={className}>
        {children}
      </div>
    );
  }
)`
  box-sizing:border-box;
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

export {CollectionView};
