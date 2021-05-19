import {useContext} from "react";
import {DataContext} from "./DataContext";

const useData = () => {
  const contextValues = useContext(DataContext);

  if (!contextValues) {
    throw new Error(
      "useDynamicUI is being accessed outside a DynamicUIProvider",
    );
  }

  return contextValues;
};

export {useData};
