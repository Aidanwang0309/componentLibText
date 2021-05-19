import {useDynamicUI} from "./Contexts";

const withDynamicUIData = (Component, type) => {
  return ({dynamicUIKey, ...props}) => {
    const values = useDynamicUI();
    return <Component {...values?.[type]?.[dynamicUIKey]} {...props} />;
  };
};

export {withDynamicUIData};
