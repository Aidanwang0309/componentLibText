import React, {useState} from "react";
import {get, set, lowerFirst, cloneDeep} from "lodash";
import {DynamicUIContext} from "./DynamicUIContext";
import {dynamicUI} from "../../structure";
import {getComponentType} from "./helpers";

const DynamicUIProvider = ({children}) => {
  const [structure, setStructure] = useState(() => dynamicUI);

  const getStructureValue = (source) => {
    const componentType = lowerFirst(getComponentType(source));

    let data = get(structure, `${componentType}s.${source}`);

    return data;
  };

  const setStructureValue = (source, newValue) => {
    const componentType = lowerFirst(getComponentType(source));

    setStructure((prevValue) => {
      let x = cloneDeep(prevValue);

      set(x, `${componentType}s.${source}`, newValue);

      return x;
    });
  };

  const contextValues = {
    getStructureValue,
    setStructureValue,
  };

  return (
    <DynamicUIContext.Provider value={contextValues}>
      {children}
    </DynamicUIContext.Provider>
  );
};

export {DynamicUIProvider};
