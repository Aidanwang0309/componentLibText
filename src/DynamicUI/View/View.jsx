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

let View = Styled(({children, className}) => {
  return <div className={className}>{children}</div>;
})`
  ${({linearLayout}) => linearLayout ? linearLayoutProperties: ""}
  ${({inset}) => inset ? `padding: ${inset}`: ""}
`;

export {View};
