import {useDynamicUI} from "../DynamicUI/Contexts";
import {Factory} from "./Factory";

const withSegmentView = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);
  const renderChildren = structureValues?.renderChildren || [];

  const segments = structureValues.segments;

  return (
    <Component {...structureValues} name={props.name}>
      {segments.length
        ? segments.map((segment) => {
            const [name, component] = segment.split("_");
            const Type = Factory(component);
            return <Type name={segment} themeType={segment} />;
          })
        : null}
    </Component>
  );
};

export {withSegmentView};
