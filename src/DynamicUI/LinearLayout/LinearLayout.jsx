import React from "react";
import Styled, {css} from "styled-components";

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

// const cssTemplate = css`
//   display: flex;
//   flex-direction: ${(props) => {
//     return flexDirectionMap[props.axis];
//   }};
//   ${(props) => (props.weight ? `flex-grow: ${props.weight}` : "")};
//   align-items: ${(props) => flexAlignMap[props.align]};
//   justify-content: ${(props) => flexJustifyMap[props.distribution]};
// `;

let LinearLayout = Styled(
  ({children, className, onSettingsClick, ...props}) => {
    return (
      <div className={className} onClick={onSettingsClick}>
        {children}
      </div>
    );
  },
)`
  display: flex;
  ${({direction}) => (direction ? `flex-direction:${direction}` : "")};

`;

export {LinearLayout};
