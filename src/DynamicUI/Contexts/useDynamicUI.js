import {useContext} from "react";
import {DynamicUIContext} from "./DynamicUIContext";

const useDynamicUI = () => {
  const contextValues = useContext(DynamicUIContext);

  if (!contextValues) {
    throw new Error(
      "useDynamicUI is being accessed outside a DynamicUIProvider",
    );
  }

  return contextValues;
};

export {useDynamicUI};
