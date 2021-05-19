import React from "react";
import Styled, {css} from "styled-components";
import {withView} from "./withView";
const flexDirectionMap = {
  horizontal: "row",
  vertical: "column",
};
const flexAlignMap = {
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};
const flexJustifyMap = {
  min: "start",
  max: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
};

const linearLayoutProperties = css`
  display: flex;
  flex-direction: ${({linearLayout}) => {
    return flexDirectionMap[linearLayout.axis];
  }};
  ${({linearLayout}) =>
    linearLayout.weight ? `flex-grow: ${linearLayout.weight}` : ""};
  align-items: ${({linearLayout}) => flexAlignMap[linearLayout.align]};
  justify-content: ${({linearLayout}) =>
    flexJustifyMap[linearLayout.distribution]};
`;

const View = Styled(({children, name, className, ...restProps}) => {
  return (
    <div id={name} className={className}>
      {children}
    </div>
  );
})`
  box-sizing:border-box;
  ${({padding}) =>
  padding
    ? `
  padding-top: ${padding[0]}px;
  padding-right: ${padding[1]}px;
  padding-bottom: ${padding[2]}px;
  padding-left: ${padding[3]}px;
  `
      : ""};
  ${({overflow}) => (overflow ? `overflow:${overflow}` : "")};  
  ${({top}) => (top ? `top:${top}` : "")};
  ${({bottom}) => (bottom ? `left:${bottom}` : "")};
  ${({right}) => (right ? `right:${right}` : "")};
  ${({left}) => (left ? `left:${left}` : "")};
  ${({position}) => (position ? `position:${position}` : "")};
  ${({width}) => (width ? `width:${width}` : "")};
  ${({height}) => (height ? `height:${height}` : "")};
  ${({margin}) => (margin ? `margin:${margin}px` : "")};
  ${({background}) => (background ? `background:${background}` : "")};
`;

export default withView(View);
