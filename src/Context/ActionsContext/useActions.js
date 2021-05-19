import {useContext} from "react";
import {ActionsContext} from "./ActionsContext";

const useActions = () => {
  const contextValues = useContext(ActionsContext);
  if (!contextValues) {
    throw new Error(
      "useDynamicUI is being accessed outside a DynamicUIProvider",
    );
  }
  return contextValues;
};

export {useActions};
