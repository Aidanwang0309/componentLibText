import * as React from "react";
import {LinearLayout} from "./LinearLayout";

const LinearLayoutData = {
  position: "absolute",
  right: "3%",
  top: "0%",
  direction: "column",
  padding: 10,
  width: "40%",
  height: "100%",
  background: "#FFC1F5",
};

const LinearLayoutStory = () => (
  <div>
    <LinearLayout {...LinearLayoutData} />
  </div>
);

export default {
  title: "ELEMENTS/LinearLayout",
};

export const _LinearLayoutStory = LinearLayoutStory.bind({});

_LinearLayoutStory.story = {
  name: "LinearLayout",
};
