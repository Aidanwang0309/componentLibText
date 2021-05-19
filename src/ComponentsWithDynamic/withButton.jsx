import {useDynamicUI} from "../DynamicUI/Contexts";
import {Factory} from "./Factory";
import {useActions} from "../Context/ActionsContext/useActions";

const withButton = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);
  const renderChildren = structureValues?.renderChildren || [];

  const {handleButtonClick} = useActions();

  return (
    <Component
      {...structureValues}
      name={props.name}
      onClick={() => handleButtonClick({clickTarget: props.name})}
    >
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

export {withButton};
