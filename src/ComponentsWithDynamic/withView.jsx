import {useDynamicUI} from "../DynamicUI/Contexts";
import {Factory} from "./Factory";

const withView = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);
  const renderChildren = structureValues?.renderChildren || [];

  return (
    <Component {...structureValues} name={props.name}>
      {renderChildren.length
        ? renderChildren.map((child) => {
            const [_, component] = child.split("_");
            const Type = Factory(component);
            return (
              <Type
                name={child}
                themeType={child}
                collectionUnit={props.collectionUnit}
                collectionData={props.collectionData}
              />
            );
          })
        : null}
    </Component>
  );
};

export {withView};
