import {useDynamicUI} from "../DynamicUI/Contexts";
import {Factory} from "./Factory";
import {LocationTab} from "../Pages/Location/LocationTab";

const withLinearLayout = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);
  const renderChildren = structureValues?.renderChildren || [];


  if (props.themeType === "LocationContent_LinearLayout") {
    return (
      <Component {...structureValues} name={props.name}>
        <LocationTab />
      </Component>
    );
  }

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

export {withLinearLayout};
