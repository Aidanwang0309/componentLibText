import {useDynamicUI} from "../DynamicUI/Contexts";
import {Factory} from "./Factory";
import {useCollectionData} from "../hooks/useCollectionData";

const withCollectionView = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);
  const renderChildren = structureValues?.renderChildren || [];

  const [collection, component] = props.name.split("_");
  const [collectionData] = useCollectionData(collection);

  return (
    <Component {...structureValues} name={props.name}>
      {collectionData.map((unit, index) => {
        return (
          // only one child actually, no need to loop
          renderChildren.length
            ? renderChildren.map((child) => {
                const [_, component] = child.split("_");
                const Type = Factory(component);

                return (
                  <Type
                    name={child}
                    themeType={child}
                    collectionData={unit}
                    collectionUnit={index}
                  />
                );
              })
            : null
        );
      })}
    </Component>
  );
};

export {withCollectionView};
