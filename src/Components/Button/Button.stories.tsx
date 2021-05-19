import * as React from "react";
import {Button} from "./Button";

const ButtonData = {
  padding: [5, 8, 5, 8],
  width: "33%",
};

const ButtonStory = () => (
  <div>
    <Button {...ButtonData} />
  </div>
);
export default {
  title: "ELEMENTS/Button",
};

export const _Button = ButtonStory.bind({});

_Button.story = {
  name: "Button",
};
