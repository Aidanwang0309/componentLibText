import {useDynamicUI} from "../DynamicUI/Contexts";
import {useData} from "../Context/DataContext/useData";

const withText = (Component) => (props) => {
  const {getStructureValue} = useDynamicUI();
  const structureValues = getStructureValue(props.themeType);

  const {getLabelString} = useData();
  const [labelKey, component] = props.name.split("_");
  const string = getLabelString({
    labelKey,
    collectionUnit: props.collectionUnit,
  });


  return <Component {...structureValues} string={string} name={props.name} />;
};

export {withText};
