/* eslint-disable react-hooks/rules-of-hooks */
import {useDynamicUI} from "./Contexts";
import {getDisplayName} from "../utils/JSXHelpers";

const withDynamicUI = (Component, source) => {
  const withDynamicUIComponent = (props) => {
    const {getStructureValue} = useDynamicUI();

    const dynamicValue = getStructureValue(source);

    const onClick = () => {
      let el = document.getElementById("settings");

      el.setAttribute("source", source);
    };

    return <Component {...dynamicValue} {...props} onSettingsClick={onClick} />;
  };

  withDynamicUIComponent.displayName = `withDynamicUI(${getDisplayName(
    Component,
  )})`;

  return withDynamicUIComponent;
};

export {withDynamicUI};
